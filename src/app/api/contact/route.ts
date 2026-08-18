import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema, sanitizeInput } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import { siteConfig } from "@/content/site";

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check (by IP)
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";
    const rateLimit = await checkRateLimit(ip, 5, 60); // 5 requests per minute

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Rate limit exceeded. Please wait a minute before trying again.",
        },
        { status: 429 }
      );
    }

    // 2. Request body parsing & size validation (max 100kb limit)
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 100000) {
      return NextResponse.json(
        { success: false, message: "Payload too large." },
        { status: 413 }
      );
    }

    const rawBody = await req.json();
    const parseResult = contactFormSchema.safeParse(rawBody);

    if (!parseResult.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parseResult.error.issues) {
        const fieldName = issue.path[0] as string;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      }
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please correct the errors and try again.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, company, message, honeypot } = parseResult.data;

    // 3. Honeypot check (if populated, bot detected)
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json(
        { success: false, message: "Spam detection triggered." },
        { status: 400 }
      );
    }

    // 4. Sanitize inputs
    const cleanName = sanitizeInput(name);
    const cleanEmail = sanitizeInput(email);
    const cleanCompany = company ? sanitizeInput(company) : "";
    const cleanMessage = sanitizeInput(message);

    // 5. Provider delivery verification
    const resendApiKey = process.env.RESEND_API_KEY;
    const targetEmail = process.env.CONTACT_EMAIL || siteConfig.contactEmail;

    if (resendApiKey) {
      // Production Resend provider integration
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Ethisyn Contact <inquiry@ethisyn.in>",
          to: [targetEmail],
          reply_to: cleanEmail,
          subject: `Ethisyn Inquiry from ${cleanName}${cleanCompany ? ` (${cleanCompany})` : ""}`,
          text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nCompany: ${cleanCompany || "N/A"}\n\nWhat would you like to discuss:\n${cleanMessage}`,
        }),
      });

      if (!resendRes.ok) {
        console.error("Email delivery provider returned an error status.");
        return NextResponse.json(
          {
            success: false,
            message: `Delivery provider is temporarily unavailable. Please reach us directly at ${siteConfig.contactEmail}.`,
          },
          { status: 502 }
        );
      }
    } else {
      // In development environments without credentials, log safely
      if (process.env.NODE_ENV === "development") {
        console.log("[Ethisyn Dev Inbound Message Received]", {
          name: cleanName,
          email: cleanEmail,
          company: cleanCompany,
          messageLength: cleanMessage.length,
        });

        return NextResponse.json({
          success: true,
          message:
            "Thank you. Your message has been received. We’ll get back to you as soon as possible.",
        });
      }

      // In production if no delivery key is configured, honestly direct to mailto
      return NextResponse.json(
        {
          success: false,
          configured: false,
          message: `Inbound mail service is currently routing directly to our mailbox. Please send your message directly to ${siteConfig.contactEmail}.`,
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you. Your message has been received. We’ll get back to you as soon as possible.",
    });
  } catch (err) {
    console.error("Unhandled exception processing contact inquiry.");
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your message.",
      },
      { status: 500 }
    );
  }
}
