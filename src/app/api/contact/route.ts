import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema, sanitizeInput } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import { siteConfig } from "@/content/site";

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check (5 requests per 60 seconds per IP)
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateLimit = await checkRateLimit(ip, 5, 60);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please wait a minute before submitting again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": "60",
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    // 2. Payload size protection (100KB max)
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 100000) {
      return NextResponse.json(
        {
          success: false,
          message: "Request payload too large.",
        },
        { status: 413 }
      );
    }

    const body = await req.json();

    // 3. Zod schema validation
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.errors.forEach((err) => {
        const fieldName = err.path[0] as string;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = err.message;
        }
      });

      return NextResponse.json(
        {
          success: false,
          message: "Please correct the errors in the form.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, company, services, budget, message, honeypot } =
      parsed.data;

    // 4. Honeypot check (anti-bot)
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Spam detection triggered.",
        },
        { status: 400 }
      );
    }

    // 5. Sanitize text fields
    const cleanName = sanitizeInput(name);
    const cleanEmail = sanitizeInput(email);
    const cleanPhone = phone ? sanitizeInput(phone) : "N/A";
    const cleanCompany = company ? sanitizeInput(company) : "N/A";
    const cleanBudget = budget ? sanitizeInput(budget) : "N/A";
    const cleanMessage = sanitizeInput(message);
    const cleanServices = services.map((s) => sanitizeInput(s)).join(", ");

    // 6. Deliver via Resend API
    const resendApiKey = process.env.RESEND_API_KEY;
    const targetEmail = process.env.CONTACT_EMAIL || siteConfig.contactEmail;
    const configuredFrom =
      process.env.RESEND_FROM_EMAIL || "Ethisyn Projects <inquiry@ethisyn.in>";

    // Inbound Lead payload for system logging
    const leadPayload = {
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      company: cleanCompany,
      budget: cleanBudget,
      services: cleanServices,
      message: cleanMessage,
      timestamp: new Date().toISOString(),
    };

    if (resendApiKey) {
      let emailSent = false;

      const sendEmail = async (fromAddress: string) => {
        return fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromAddress,
            to: [targetEmail],
            reply_to: cleanEmail,
            subject: `New Project Inquiry from ${cleanName}${cleanCompany !== "N/A" ? ` (${cleanCompany})` : ""}`,
            text: `New Project Inquiry on Ethisyn:

Name: ${cleanName}
Email: ${cleanEmail}
Phone/WhatsApp: ${cleanPhone}
Company: ${cleanCompany}
Estimated Budget: ${cleanBudget}
Selected Services: ${cleanServices}

Project Details:
${cleanMessage}
`,
          }),
        });
      };

      try {
        const emailResponse = await sendEmail(configuredFrom);

        if (!emailResponse.ok) {
          const errData = await emailResponse.text();
          console.error("Resend API error with configured sender:", errData);

          // If domain is unverified or rejected, retry with Resend sandbox/onboarding sender
          if (!configuredFrom.includes("onboarding@resend.dev")) {
            console.log("Retrying delivery with fallback sender onboarding@resend.dev...");
            const fallbackResponse = await sendEmail("Ethisyn <onboarding@resend.dev>");
            if (fallbackResponse.ok) {
              emailSent = true;
            } else {
              const fallbackErr = await fallbackResponse.text();
              console.error("Resend fallback sender error:", fallbackErr);
            }
          }
        } else {
          emailSent = true;
        }
      } catch (sendErr) {
        console.error("Failed to connect to email provider:", sendErr);
      }

      // Always log inbound lead to system logs so the enquiry is NEVER lost
      console.log("=== INBOUND PROJECT INQUIRY (PERSISTED IN SYSTEM LOGS) ===", JSON.stringify(leadPayload, null, 2));

      if (!emailSent) {
        return NextResponse.json(
          {
            success: false,
            dispatchError: true,
            message: "Unable to send email right now. Please email us directly at " + siteConfig.contactEmail,
          },
          { status: 502 }
        );
      }
    } else {
      // In development or when key is not yet set
      console.log("=== INBOUND PROJECT INQUIRY (MOCK DISPATCH) ===", JSON.stringify(leadPayload, null, 2));
    }

    return NextResponse.json({
      success: true,
      message: "Your project inquiry has been received. We will respond within 24 hours.",
    });
  } catch (error) {
    console.error("Unhandled contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred. Please email us directly at " + siteConfig.contactEmail,
      },
      { status: 500 }
    );
  }
}
