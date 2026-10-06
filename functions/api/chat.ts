interface Env {
  GROQ_API_KEY?: string;
}

interface EventContext<E> {
  request: Request;
  env: E;
  waitUntil?: (promise: Promise<unknown>) => void;
}

type PagesFunction<E = unknown> = (context: EventContext<E>) => Response | Promise<Response>;

const SYSTEM_PROMPT = `You are Syn, the official intelligent studio companion for ETHISYN.
ETHISYN is an independent product engineering, AI automation, and digital growth studio established in Hyderabad, India in 2022. Led by Patan Rabiya with 11 in-house engineers and creators. Zero bureaucracy, 100% craft.

ETHISYN has 4 core service pillars:
1. BUILD: Custom web applications, mobile apps (Flutter, React Native), scalable SaaS platforms, client admin portals, and robust backends.
2. AUTOMATE: Autonomous AI agents, 24/7 AI voice and chat assistants, CRM automations, and workflow orchestration (eliminating 15+ hours of manual work weekly).
3. GROW: Performance digital marketing, Local SEO & Google Business Profile dominance, Google Ads, Meta Ads with server-side CAPI tracking, and sub-second landing pages.
4. CREATE: Cinematic video production, technical product walkthroughs with motion design, short-form Reels & Shorts, and high-retention marketing creatives.

REVERSE RECRUITING SERVICE:
ETHISYN also runs a fast-track Reverse Recruiting service (/job-application-service) where a dedicated talent associate tailors resumes to beat ATS black holes and submits 150-300+ applications monthly on behalf of candidates.

TECHNICAL PHILOSOPHY:
- Architecture-first & tech-agnostic: React, Vue, Next.js, Node.js, Python (FastAPI), Go, Flutter, Cloudflare, AWS, GCP, Azure. Never locked to one framework.
- Process: 5-phase delivery model (Understand, Plan, Build, Launch, Improve), rapid 2-week technical sprints, weekly staging previews, and guaranteed 4-hour SLA communication.
- Pricing: Transparent milestone-based pricing for builds; flexible monthly retainers for growth and automations.

CONTACT CHANNELS:
- WhatsApp: +91 80961 31202 (https://wa.me/918096131202)
- Email: hello@ethisyn.in
- Careers: careers@ethisyn.in
- Location: Hyderabad, India

RESPONSE GUIDELINES:
- Keep answers concise (2 to 4 sentences maximum), confident, authoritative, and friendly.
- Do NOT use excessive emojis (at most 0 to 1 if natural).
- If the user asks about WhatsApp, contact, or getting started, warmly invite them to message WhatsApp at +91 80961 31202.
- Ground all facts strictly in ETHISYN's real studio capabilities.`;

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const body = (await context.request.json()) as { message?: string; history?: Array<{ role: string; content: string }> };
    const userMessage = body.message?.trim();

    if (!userMessage) {
      return new Response(JSON.stringify({ error: "Message is required" }), { status: 400, headers });
    }

    const apiKey = context.env.GROQ_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "GROQ_API_KEY environment variable is not configured" }),
        { status: 500, headers }
      );
    }

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(Array.isArray(body.history) ? body.history.slice(-6) : []),
      { role: "user", content: userMessage },
    ];

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen/qwen3.8-27b",
        messages,
        max_tokens: 250,
        temperature: 0.6,
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      return new Response(JSON.stringify({ error: "Groq error", details: errText }), { status: 502, headers });
    }

    const groqData = (await groqRes.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const reply = groqData.choices?.[0]?.message?.content?.trim() || "";

    // Determine smart action link based on topic
    let actionLink = { label: "Chat on WhatsApp (+91 80961 31202)", href: "https://wa.me/918096131202" };
    const lower = userMessage.toLowerCase();
    if (lower.includes("reverse recruit") || lower.includes("job") || lower.includes("resume") || lower.includes("ats")) {
      actionLink = { label: "Fast-Track Job Search Onboarding", href: "/job-application-service" };
    } else if (lower.includes("team") || lower.includes("founder") || lower.includes("hyderabad")) {
      actionLink = { label: "Meet the Founding Team", href: "/team" };
    } else if (lower.includes("career") && (lower.includes("ethisyn") || lower.includes("hire") || lower.includes("hiring"))) {
      actionLink = { label: "View Open Positions at Ethisyn", href: "/careers" };
    } else if (lower.includes("service") || lower.includes("build") || lower.includes("automate")) {
      actionLink = { label: "Explore Studio Capabilities", href: "/#services" };
    }

    return new Response(JSON.stringify({ reply, actionLink }), { status: 200, headers });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Internal error" }),
      { status: 500, headers }
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
