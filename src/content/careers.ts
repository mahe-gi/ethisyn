export type PillarType = "BUILD" | "AUTOMATE" | "GROW" | "CREATE";

export interface JobRole {
  id: string;
  title: string;
  pillar: PillarType;
  pillarLabel: string;
  department: string;
  location: string;
  type: "Full-Time" | "Full-Time / Hybrid";
  experience: string;
  salaryRange: string;
  shortSummary: string;
  overview: string;
  stack: string[];
  responsibilities: string[];
  requirements: string[];
  bonusPoints: string[];
  deliverables90Days: string[];
  applyEmail: string;
  priority: "High" | "Normal";
}

export interface StudioPerk {
  icon: string;
  title: string;
  tagline: string;
  description: string;
  highlight: string;
}

export interface HiringStep {
  step: string;
  title: string;
  timeframe: string;
  description: string;
  output: string;
}

export interface CareersContent {
  meta: {
    title: string;
    description: string;
    headline: string;
    subheadline: string;
  };
  studioManifesto: {
    badge: string;
    title: string;
    description: string;
    values: Array<{
      index: string;
      title: string;
      summary: string;
    }>;
  };
  perks: StudioPerk[];
  hiringProcess: HiringStep[];
  applicationGuide: {
    headline: string;
    primaryEmail: string;
    backupEmail: string;
    instructions: string[];
    whatToInclude: string[];
    guarantee: string;
  };
  roles: JobRole[];
}

export const careersData: CareersContent = {
  meta: {
    title: "Careers & Open Positions | Ethisyn",
    description:
      "Join Ethisyn in Hyderabad: a high-density, craft-driven software and AI studio. We're hiring senior builders across Engineering, AI, Growth, and Creative Design.",
    headline: "Build enduring systems with zero bureaucracy.",
    subheadline:
      "ETHISYN is an independent product engineering and digital systems studio in Hyderabad. We build sub-second web platforms, autonomous multi-agent pipelines, algorithmic growth engines, and cinematic digital products for ambitious brands worldwide.",
  },
  studioManifesto: {
    badge: "STUDIO PHILOSOPHY & TALENT DENSITY",
    title: "High talent density. Uncompromising craft. Direct ownership.",
    description:
      "We do not employ account managers, proxy project managers, or junior outsourcing pools. Ethisyn is structured like a Formula 1 pit crew: a compact, high-velocity assembly of senior craftspeople who build, automate, and grow mission-critical platforms with extreme pride of workmanship.",
    values: [
      {
        index: "01",
        title: "Craft Over Corporate Ceremony",
        summary:
          "We measure impact in shipped products, sub-second response times, and measurable client revenue—not 6-hour sprint planning rituals or slide decks.",
      },
      {
        index: "02",
        title: "Direct Builder Accountability",
        summary:
          "Every engineer, designer, and growth architect interfaces directly with product founders. You own the architecture from whiteboard to production edge.",
      },
      {
        index: "03",
        title: "Hyderabad Roots, Global Impact",
        summary:
          "Headquartered in Hyderabad with an intentional hybrid studio culture. We combine regional engineering rigor with tier-one global product standards.",
      },
      {
        index: "04",
        title: "Continuous Dogfooding & AI First",
        summary:
          "We operate our entire studio on custom autonomous agents, deterministic CI/CD, and vector pipelines. You will work at the frontier of applied intelligence.",
      },
    ],
  },
  perks: [
    {
      icon: "Coins",
      title: "Top-Tier Compensation & Equity",
      tagline: "Top 10% Hyderabad Percentile",
      description:
        "Competitive baseline salaries matching premier product studios, paired with annual performance profit-sharing and milestone bonuses.",
      highlight: "Direct financial upside tied to studio growth",
    },
    {
      icon: "Cpu",
      title: "Pro Hardware & Studio Rig",
      tagline: "Apple Silicon & 4K Studio Setup",
      description:
        "Maxed-out M-series Apple MacBook Pro (64GB+ unified memory), dual 4K / 5K studio displays, noise-cancelling headphones, and Herman Miller seating.",
      highlight: "Zero hardware friction from Day 1",
    },
    {
      icon: "ShieldZap",
      title: "Zero Bureaucracy & Direct Agency",
      tagline: "Autonomous Decision Making",
      description:
        "No middle management layers or human routers. You pick the right tools, propose modern architectures, and ship without navigating 5 tiers of approvals.",
      highlight: "Founders and builders work side-by-side",
    },
    {
      icon: "Sparkles",
      title: "Unlimited AI & Tooling Budget",
      tagline: "Claude, OpenAI, Cursor, AWS",
      description:
        "Personal API budget for frontier models (Claude 3.7 Sonnet, GPT-4o, DeepSeek), Claude Pro / ChatGPT Plus / Cursor subscriptions, and cloud sandbox credits for experimentation.",
      highlight: "Unrestricted access to frontier intelligence",
    },
    {
      icon: "MapPin",
      title: "Hyderabad Studio + Hybrid Freedom",
      tagline: "Deep-Work In-Studio & Remote Focus",
      description:
        "A quiet, sunlit design and engineering studio in Hyderabad tailored for synchronous creative jams, complemented by flexible remote deep-work days.",
      highlight: "Optimized for flow state, not mandatory seat-time",
    },
    {
      icon: "Flame",
      title: "Health, Wellness & Continuous Craft",
      tagline: "Full Health Coverage & Learning Fund",
      description:
        "Comprehensive health insurance for you and your dependents, annual conference tickets, books/course allowances, and wellness stipends.",
      highlight: "Invested in your longevity and continuous evolution",
    },
  ],
  hiringProcess: [
    {
      step: "01",
      title: "Asynchronous Work Review",
      timeframe: "48-Hour Response",
      description:
        "We review your GitHub, live deployments, design portfolio, or recent campaign analytics. No automated ATS keywords or robotic screening.",
      output: "Direct assessment by the domain lead",
    },
    {
      step: "02",
      title: "Builder Deep Dive",
      timeframe: "60-Minute Video Call",
      description:
        "A practical technical discussion with our CTO or Domain Leads. We walk through a real system you built, trade-offs made, and architectural choices.",
      output: "Zero algorithmic LeetCode trivia",
    },
    {
      step: "03",
      title: "Paid Micro-Project or Studio Jam",
      timeframe: "1-2 Days (Compensated)",
      description:
        "Work with our team on a real-world scoped problem (or spend a day at our Hyderabad studio). Experience our cadence, feedback loops, and standards firsthand.",
      output: "Both sides test alignment before signing",
    },
    {
      step: "04",
      title: "Formal Offer & Day-1 Onboarding",
      timeframe: "Same-Day Decision",
      description:
        "Transparent compensation terms, stock options / profit share details, equipment dispatch, and immediate integration into our core roadmap.",
      output: "Welcome package & immediate system access",
    },
  ],
  applicationGuide: {
    headline: "Skip the generic cover letter. Show us your craft.",
    primaryEmail: "careers@ethisyn.in",
    backupEmail: "hello@ethisyn.in",
    instructions: [
      "Send an email directly to careers@ethisyn.in with the position title in the subject line (e.g., 'Senior Full-Stack Engineer — [Your Name]').",
      "Include links to code you wrote (GitHub), platforms you shipped, or campaigns/videos you produced.",
      "Tell us in 2-3 sentences about the hardest technical or creative problem you solved recently.",
      "Let us know your current location and earliest potential start date.",
    ],
    whatToInclude: [
      "GitHub profile, live URLs, or portfolio link",
      "Short summary of your favourite tech stack or creative toolset",
      "A note on why high-craft agency work appeals to you over bureaucratic enterprises",
    ],
    guarantee:
      "Every single application sent to careers@ethisyn.in is read by an engineering or domain lead in Hyderabad. We promise a human response within 48 business hours.",
  },
  roles: [
    {
      id: "senior-full-stack-engineer",
      title: "Senior Full-Stack Engineer",
      pillar: "BUILD",
      pillarLabel: "01 / BUILD",
      department: "Web & Software Engineering",
      location: "Hyderabad, India (Studio / Hybrid)",
      type: "Full-Time / Hybrid",
      experience: "4+ years of production experience",
      salaryRange: "₹24,00,000 - ₹38,00,000 + Performance Profit Share",
      shortSummary:
        "Architect and ship sub-second Next.js web applications, reactive enterprise platforms, and fault-tolerant cloud backends for global clients.",
      overview:
        "At ETHISYN, software engineering is an art of high velocity and zero bloat. We do not build sluggish enterprise dashboards; we engineer ultra-responsive Next.js platforms, distributed transactional backends, and headless e-commerce platforms that load in under 500ms worldwide. As a Senior Full-Stack Engineer, you will own architecture decisions end-to-end, write pristine TypeScript, and deploy edge-optimized software trusted by enterprise users.",
      stack: [
        "Next.js 15 (App Router)",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Node.js / Bun",
        "PostgreSQL / Supabase",
        "Cloudflare Workers",
        "AWS (ECS / Lambda / S3)",
        "Docker",
        "GraphQL / REST",
      ],
      responsibilities: [
        "Architect, build, and maintain production-grade web applications using Next.js 15, React 19, and TypeScript.",
        "Implement sub-500ms global latency optimizations, streaming SSR, aggressive edge caching, and Core Web Vitals perfection.",
        "Design scalable relational database schemas (PostgreSQL) and write robust, type-safe database queries with Prisma or Drizzle ORM.",
        "Collaborate directly with our Head of UI/UX to transform intricate Figma design tokens and interactive micro-animations into pixel-perfect code.",
        "Set up resilient CI/CD pipelines, automated testing (Vitest, Playwright), and automated staging environments.",
        "Review peer code, guide junior engineers, and contribute to internal architectural RFCs and shared utility libraries.",
      ],
      requirements: [
        "4+ years of professional full-stack development experience shipping production web applications.",
        "Deep mastery of modern TypeScript, React (Server Components, hooks, reconciliation), and Next.js App Router.",
        "Proven track record of optimizing client-side performance, network waterfalls, bundle splitting, and database indexing.",
        "Comfortable with containerization (Docker), Linux environments, and modern cloud deployment architectures (Cloudflare, AWS, Vercel).",
        "Strong engineering discipline: comprehensive unit/integration testing, clean commit hygiene, and clear technical documentation.",
        "Based in or willing to relocate to Hyderabad for hybrid studio collaboration.",
      ],
      bonusPoints: [
        "Active open-source contributions or personal side projects with real recurring users.",
        "Experience building real-time collaboration engines using WebSockets or WebRTC.",
        "Familiarity with React Native for cross-platform iOS/Android development.",
        "Working knowledge of WebGL, Three.js, or GPU shader programming.",
      ],
      deliverables90Days: [
        "Day 30: Ship your first production feature into our enterprise client portal with zero regressions and sub-second metrics.",
        "Day 60: Take lead ownership of a core Next.js client platform architecture, standardizing CI/CD and edge caching policies.",
        "Day 90: Author an internal engineering module or reusable framework component that accelerates delivery across all studio projects.",
      ],
      applyEmail: "careers@ethisyn.in",
      priority: "High",
    },
    {
      id: "ai-automation-systems-architect",
      title: "AI & Automation Systems Architect",
      pillar: "AUTOMATE",
      pillarLabel: "02 / AUTOMATE",
      department: "AI & Applied Intelligence",
      location: "Hyderabad, India (Studio / Hybrid)",
      type: "Full-Time / Hybrid",
      experience: "3+ years in AI / ML or backend orchestration",
      salaryRange: "₹26,00,000 - ₹42,00,000 + Performance Profit Share",
      shortSummary:
        "Engineer autonomous multi-agent pipelines, deterministic LLM workflows, low-latency voice intelligence, and self-healing business automations.",
      overview:
        "The hype cycle of AI wrapper products is dead; production-grade deterministic intelligence is what enterprises need. In this role, you will build autonomous multi-agent systems using LangGraph, Python, and edge vector indexes. You will develop low-latency conversational voice pipelines (<800ms time-to-first-audio), custom RAG knowledge graphs, and end-to-end operational automations that save businesses hundreds of manual hours every month.",
      stack: [
        "Python 3.12+",
        "LangGraph / LangChain",
        "FastAPI",
        "OpenAI / Anthropic APIs",
        "DeepSeek & Local LLMs",
        "PostgreSQL / pgvector",
        "Qdrant / Pinecone",
        "WebSockets / LiveKit (Voice AI)",
        "Make / Zapier / n8n",
        "Docker / Redis",
      ],
      responsibilities: [
        "Architect and deploy stateful multi-agent systems using LangGraph, handling cyclical workflows, memory retention, and tool orchestration.",
        "Build low-latency streaming AI voice agents integrating LiveKit, Deepgram, Cartesia, and LLM reasoning pipelines.",
        "Construct hybrid RAG (Retrieval-Augmented Generation) pipelines combining dense vector embeddings, BM25 keyword search, and reranking models.",
        "Implement rigorous evaluation frameworks (evals) to eliminate hallucinations, enforce structured JSON schemas, and monitor latency/cost.",
        "Integrate autonomous agents directly into client CRMs, ERPs, billing systems, and communication channels (Slack, WhatsApp, Email).",
        "Author internal agent testing harnesses and automated regression suites for non-deterministic AI workflows.",
      ],
      requirements: [
        "3+ years of professional backend software engineering with at least 1.5+ years deeply focused on production LLM architectures.",
        "Command of Python 3, asynchronous event loops (asyncio), FastAPI, and modern package managers (uv, Poetry).",
        "Hands-on experience architecting graph-based agentic workflows (LangGraph or custom state machines).",
        "Deep understanding of vector mathematics, embedding models, chunking strategies, and vector databases (pgvector, Qdrant).",
        "Experience optimizing token economics, prompt caching, structured schema output (Pydantic / instructor), and latency bottlenecks.",
        "Pragmatic approach to AI: preference for deterministic code whenever possible and LLMs only where cognitive reasoning is required.",
      ],
      bonusPoints: [
        "Experience fine-tuning open-weights models (Llama, Mistral, Qwen) using LoRA / QLoRA.",
        "Published articles, benchmarks, or GitHub repositories demonstrating novel agent architectures.",
        "Experience deploying local inference servers with vLLM, Ollama, or Triton.",
        "Familiarity with enterprise compliance, PII redaction, and guardrails (NeMo, Guardrails AI).",
      ],
      deliverables90Days: [
        "Day 30: Deploy a multi-turn, stateful customer intelligence agent into production with automated eval scorecards.",
        "Day 60: Architect and launch a sub-800ms conversational voice agent prototype for high-volume inbound phone qualification.",
        "Day 90: Implement a standardized RAG and multi-agent template library that powers all incoming ETHISYN enterprise AI engagements.",
      ],
      applyEmail: "careers@ethisyn.in",
      priority: "High",
    },
    {
      id: "growth-performance-marketing-specialist",
      title: "Growth & Performance Marketing Specialist",
      pillar: "GROW",
      pillarLabel: "03 / GROW",
      department: "Digital Growth & Algorithmic Discovery",
      location: "Hyderabad, India (Studio / Hybrid)",
      type: "Full-Time / Hybrid",
      experience: "3+ years in B2B growth, paid media, or technical SEO",
      salaryRange: "₹18,00,000 - ₹30,00,000 + Revenue Incentive",
      shortSummary:
        "Drive organic dominance, Generative Engine Optimization (GEO), and high-ROI multi-channel paid acquisition campaigns across global markets.",
      overview:
        "Building exceptional software is only half the battle; bringing the right enterprise buyers through the door is what transforms code into commercial enterprise value. At ETHISYN, growth is treated as an engineering discipline. You will orchestrate high-intent Google Search campaigns, technical SEO audits, Meta advertising funnels, and pioneer Generative Engine Optimization (GEO) to ensure our clients and studio dominate traditional and LLM-driven search discovery.",
      stack: [
        "Google Ads & Performance Max",
        "Meta Ads Manager",
        "Ahrefs / Semrush",
        "PostHog / Google Analytics 4",
        "Technical SEO & Schema.org",
        "Perplexity & ChatGPT GEO Optimization",
        "HubSpot / ActiveCampaign",
        "Looker Studio / SQL",
        "Conversion Rate Optimization (CRO)",
      ],
      responsibilities: [
        "Plan, execute, and scale multi-channel performance marketing campaigns (Google Search, Meta Ads, LinkedIn Ads) with rigorous ROAS targets.",
        "Perform deep technical SEO audits: Core Web Vitals, semantic entity markup, crawl budget optimization, and site architecture restructuring.",
        "Lead Generative Engine Optimization (GEO) initiatives to maximize brand citations and recommendations across Perplexity, ChatGPT, and Gemini.",
        "Build full-funnel attribution models in PostHog and GA4, connecting top-of-funnel clicks to closed CRM revenue.",
        "Design and execute continuous landing page A/B tests to optimize conversion rates and average deal values.",
        "Work hand-in-hand with our creative team to produce high-converting ad hooks, video scripts, and product landing copy.",
      ],
      requirements: [
        "3+ years managing substantial paid ad budgets (Google, Meta, LinkedIn) with proven CAC reduction and quantifiable revenue ROI.",
        "Deep technical SEO expertise: ability to read HTML/JSON-LD, inspect server response headers, and work directly with Next.js developers.",
        "Analytical mindset: comfortable writing basic SQL or data warehouse queries to dissect churn, cohort retention, and blended CAC.",
        "Strong copywriting skills: ability to draft crisp, punchy, high-intent value propositions for tech founders and enterprise buyers.",
        "Deep curiosity for how AI and LLMs are revolutionizing organic search, citation graphs, and consumer discovery behavior.",
      ],
      bonusPoints: [
        "Experience scaling international B2B SaaS campaigns across the US, UK, and APAC regions.",
        "Familiarity with programmatic SEO using modern headless CMS tools and Python scripts.",
        "Certifications in Advanced Google Ads, GA4, or conversion rate optimization.",
        "Experience running cold outbound email and LinkedIn growth pipelines with clean deliverability hygiene.",
      ],
      deliverables90Days: [
        "Day 30: Conduct comprehensive growth and technical SEO audits for 3 key studio partner accounts, identifying quick-win revenue funnels.",
        "Day 60: Deploy structured GEO and semantic schema protocols across our ecosystem, increasing organic AI citation frequency by 40%.",
        "Day 90: Build and automate a predictable paid customer acquisition engine that achieves <$50 blended B2B demo booking costs.",
      ],
      applyEmail: "careers@ethisyn.in",
      priority: "Normal",
    },
    {
      id: "creative-director-video-producer",
      title: "Creative Director & Video Content Producer",
      pillar: "CREATE",
      pillarLabel: "04 / CREATE",
      department: "Brand Identity, Motion & Media",
      location: "Hyderabad, India (Studio / In-Person Jams)",
      type: "Full-Time",
      experience: "3+ years in visual direction, video production, or motion design",
      salaryRange: "₹18,00,000 - ₹32,00,000 + Creative Equipment Stipend",
      shortSummary:
        "Direct the cinematic visual language, high-retention video collateral, product reveal reels, and brand identity of ETHISYN and its portfolio.",
      overview:
        "In a digital world crowded with generic AI slop and boilerplate templates, supreme craft and taste stand out like a beacon. As our Creative Director & Video Content Producer, you will be the aesthetic compass of ETHISYN. You will direct cinematic brand films, high-octane 3D/2D motion teasers, dynamic product reveal videos, and viral social reels that cement our position as Hyderabad's most formidable product design and engineering studio.",
      stack: [
        "Adobe Premiere Pro",
        "DaVinci Resolve (Color Grading)",
        "Adobe After Effects",
        "Figma (Design Systems)",
        "Blender / Cinema 4D (3D Motion)",
        "Sony FX3 / Cinema Cameras",
        "Studio Lighting & Sound Design",
        "Runway / Midjourney (Generative Video Assist)",
      ],
      responsibilities: [
        "Direct, shoot, edit, and finish broadcast-quality video content: studio documentary shorts, founder interviews, product launch films, and short-form reels.",
        "Create striking 2D and 3D motion graphics showcasing UI interactions, architectural schematics, and product features.",
        "Establish visual guidelines, typography standards, color palettes, and cinematic aesthetics for ETHISYN and our venture partners.",
        "Conduct live-action shoots in our Hyderabad studio and on-location client environments using cinema-grade cameras and lighting setups.",
        "Collaborate with our software engineers and product designers to capture real-time software workflows and turn complex code into visually captivating stories.",
        "Oversee audio mastering, sound design, foley, and soundtrack curation that elevates our films to international standards.",
      ],
      requirements: [
        "3+ years directing or producing high-end video content, brand commercials, or product motion design.",
        "Exceptional showreel demonstrating mastery of pacing, composition, cinematic lighting, and modern typographic animation.",
        "Advanced proficiency with DaVinci Resolve or Adobe Premiere Pro, coupled with After Effects motion design fluency.",
        "Hands-on operational expertise with modern mirrorless/cinema camera rigs (Sony Alpha / FX series), gimbal stabilization, and studio audio.",
        "Unflinching taste: an intuitive eye for minimalist, luxury, and brutalist design aesthetics (Apple, Stripe, Teenage Engineering).",
        "Based in Hyderabad to lead studio shoots, lighting setups, and direct physical creative reviews.",
      ],
      bonusPoints: [
        "Experience with 3D product rendering and camera projection in Blender or Cinema 4D.",
        "Understanding of modern web design principles and Figma vector workflows.",
        "Experience building a recognizable personal brand or content channel on YouTube or Instagram.",
        "Familiarity with generative AI video and image tooling (ComfyUI, Midjourney, Runway Gen-3) as acceleration tools.",
      ],
      deliverables90Days: [
        "Day 30: Produce and publish a cinematic studio manifesto film celebrating the builders and engineering philosophy of ETHISYN.",
        "Day 60: Direct and edit high-velocity launch teasers for 2 upcoming proprietary AI software products.",
        "Day 90: Establish a turn-key studio production pipeline in Hyderabad producing weekly high-retention technical reels and builder dispatches.",
      ],
      applyEmail: "careers@ethisyn.in",
      priority: "Normal",
    },
  ],
};
