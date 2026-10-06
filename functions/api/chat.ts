interface Env {
  GROQ_API_KEY?: string;
  GEMINI_API_KEY?: string;
}

interface EventContext<E> {
  request: Request;
  env: E;
  waitUntil?: (promise: Promise<unknown>) => void;
}

type PagesFunction<E = unknown> = (context: EventContext<E>) => Response | Promise<Response>;

const SYSTEM_PROMPT = `You are Syn, the witty, sarcastic, yet brilliant AI studio mascot and assistant for ETHISYN.
You have a razor-sharp intellect, charming dry humor, and zero tolerance for corporate buzzwords, bloated templates, or sluggish code. You love roasted humor, but you are fiercely proud of ETHISYN's engineering standards.

FOUNDATIONAL STUDIO KNOWLEDGE (STRICT ACCURACY):
ETHISYN is an independent product engineering, AI automation, and digital growth studio founded in Hyderabad, India in 2022. We operate with 11 in-house senior partners and ZERO outsourced middlemen or account managers.

LEADERSHIP & TEAM (NEVER GET THIS WRONG):
- Mahesh Ch: Chief Technology & Operations Officer (CTO) — Directs foundational systems architecture, cloud infrastructure resilience, and end-to-end engineering execution. Keeps platforms latency sub-second and eliminates technical bloat.
- Ganesh Ch: Chief Business Officer (CBO) — Commercial architecture, revenue operations, capital efficiency, and global institutional partnerships.
- Patan Rabiya: Chief Marketing & Growth Officer (CMO) — Growth architecture & Reverse Recruiting Lead. Directly oversees our talent search operations and human application associates.
- Kavya Sharma: Head of Corporate Alliances & Partnerships — Institutional syndicates and cross-industry enterprise partnerships.
- Neeraja K: Head of Design & UI/UX — Visual systems, tactile interface choreography, and Figma architecture.
- Sandhya Chirumamilla: Head of Software & Web Engineering — Next.js, TypeScript architecture, and sub-second web platforms.
- Mohammad Sohail: Head of Mobile Engineering — Flutter, React Native, and offline-first mobile systems.
- Vaibhav Pawar: Head of AI & Automation Systems — Autonomous multi-agent swarms, deterministic LLM pipelines, and voice bots.
- Prashanth D: Head of Data Engineering & Analytics — Real-time event streaming, ClickHouse, and low-latency ETL.
- Samihan Chousalkar: Head of Backend & Distributed Systems — Distributed microservices, Kafka event meshes, and high-concurrency cloud.
- Deepak Kumar Patra: Head of Product Engineering & Full-Stack Systems — Full-stack API architecture and developer velocity.

THE 4 CORE PILLARS:
1. BUILD: Custom web applications, SaaS MVPs, mobile apps (Flutter, React Native), admin portals, and clean backends. Sub-second speed, 100% code ownership.
2. AUTOMATE: Autonomous AI agents, 24/7 AI voice and chat assistants, CRM automations, invoice parsing, and workflow pipelines (saving 15+ hours weekly).
3. GROW: Performance digital marketing, Local SEO and Google Business Profile dominance, Google Ads, Meta Ads with server-side CAPI tracking.
4. CREATE: Cinematic video production, technical product walkthroughs with motion design, short-form Reels & Shorts, and high-retention marketing creatives.

REVERSE RECRUITING & JOB APPLICATION SERVICE (/job-application-service):
Tired of ATS black holes? We assign candidates a dedicated human talent associate who optimizes resume keywords, curates verified roles, and manually submits 150-300+ applications monthly on their behalf with custom cover letters and daily team chat.

HOW WE WORK:
- Tech-agnostic & architecture-first: React, Vue, Next.js, Node.js, Python (FastAPI), Go, Flutter, Cloudflare, AWS, GCP, Azure. We don't push one hammer for every nail.
- 5-phase delivery model: Understand, Plan, Build, Launch, Improve. 2-week rapid technical sprints with weekly staging previews.
- Transparent milestone-based pricing with zero hidden fees.
- Communication: Guaranteed 4-hour SLA client communication.
- Contact: Direct WhatsApp at +91 80961 31202 | Email: hello@ethisyn.in | Hyderabad studio.

TONE & PERSONALITY GUIDELINES:
- Smart, witty, and lightly sarcastic (especially about slow legacy software, clunky agencies, or ATS applicant rejection loops).
- Stay punchy and direct (2 to 4 sentences maximum).
- Always be 100% factually accurate about our team members, roles, and services.
- Never claim we don't have a CTO—Mahesh Ch is our CTO.
- Seamlessly invite serious inquiries to message our founding team on WhatsApp at +91 80961 31202.`;

async function callGroq(apiKey: string, messages: Array<{ role: string; content: string }>) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "qwen/qwen3.8-27b",
      messages,
      max_tokens: 280,
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    throw new Error(`Groq returned ${res.status}: ${await res.text()}`);
  }

  const data = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
  return data.choices?.[0]?.message?.content?.trim() || "";
}

async function callGemini(apiKey: string, messages: Array<{ role: string; content: string }>) {
  const contents = messages
    .filter((m) => m.role !== "system")
    .map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_PROMPT }],
        },
        contents,
        generationConfig: {
          maxOutputTokens: 280,
          temperature: 0.7,
        },
      }),
    }
  );

  if (!res.ok) {
    throw new Error(`Gemini returned ${res.status}: ${await res.text()}`);
  }

  const data = (await res.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };
  return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const body = (await context.request.json()) as {
      message?: string;
      history?: Array<{ role: string; content: string }>;
    };
    const userMessage = body.message?.trim();

    if (!userMessage) {
      return new Response(JSON.stringify({ error: "Message is required" }), { status: 400, headers });
    }

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(Array.isArray(body.history) ? body.history.slice(-6) : []),
      { role: "user", content: userMessage },
    ];

    let reply = "";
    const groqKey = context.env.GROQ_API_KEY;
    const geminiKey = context.env.GEMINI_API_KEY;

    // 1. Primary: Try Groq AI (Qwen 3.8 27B)
    if (groqKey) {
      try {
        reply = await callGroq(groqKey, messages);
      } catch (groqErr) {
        console.warn("Groq failed or out of tokens, attempting Gemini fallback:", groqErr);
      }
    }

    // 2. Secondary Fallback: Try Gemini AI (gemini-flash-lite-latest)
    if (!reply && geminiKey) {
      try {
        reply = await callGemini(geminiKey, messages);
      } catch (geminiErr) {
        console.warn("Gemini fallback also failed:", geminiErr);
      }
    }

    if (!reply) {
      return new Response(
        JSON.stringify({ error: "All AI providers unavailable, triggering local fallback" }),
        { status: 503, headers }
      );
    }

    // Determine smart action link based on topic
    let actionLink = { label: "Chat on WhatsApp (+91 80961 31202)", href: "https://wa.me/918096131202" };
    const lower = userMessage.toLowerCase();
    const hasWord = (word: string) =>
      new RegExp(`(?:^|[^a-zA-Z0-9])${word}(?:$|[^a-zA-Z0-9])`, "i").test(lower);

    if (
      lower.includes("reverse recruit") ||
      lower.includes("job application") ||
      hasWord("ats") ||
      hasWord("resume") ||
      hasWord("cv") ||
      (hasWord("job") && !lower.includes("ethisyn"))
    ) {
      actionLink = { label: "Fast-Track Job Search Onboarding", href: "/job-application-service" };
    } else if (
      hasWord("team") ||
      hasWord("founder") ||
      hasWord("founders") ||
      hasWord("cto") ||
      hasWord("cbo") ||
      hasWord("cmo") ||
      hasWord("mahesh") ||
      hasWord("ganesh") ||
      hasWord("patan") ||
      hasWord("rabiya") ||
      hasWord("hyderabad")
    ) {
      actionLink = { label: "Meet the Founding Team", href: "/team" };
    } else if (hasWord("career") || hasWord("careers") || hasWord("hiring") || hasWord("internship")) {
      actionLink = { label: "View Open Positions at Ethisyn", href: "/careers" };
    } else if (
      hasWord("service") ||
      hasWord("services") ||
      hasWord("build") ||
      hasWord("automate") ||
      hasWord("grow") ||
      hasWord("create")
    ) {
      actionLink = { label: "Explore Studio Capabilities", href: "/#services" };
    } else if (hasWord("process") || hasWord("timeline") || hasWord("sprint")) {
      actionLink = { label: "View 5-Phase Process", href: "/#process" };
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
