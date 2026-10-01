export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  whatWeBuild: string[];
  whyItMatters: string;
  schematicType: "code" | "agents" | "growth" | "creative" | "systems" | "support";
  tools: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "software-engineering",
    index: "01",
    title: "Web & Software Engineering",
    tagline: "High-velocity web applications, multi-tenant SaaS platforms, and native mobile experiences.",
    description:
      "We architect and engineer sub-second web platforms, enterprise customer portals, iOS/Android apps, and transactional software. Built with clean TypeScript, edge infrastructure, and responsive precision that scales effortlessly.",
    whatWeBuild: [
      "Full-Stack Next.js & React Web Apps",
      "iOS & Android Mobile Apps (React Native)",
      "B2B SaaS MVPs & Customer Portals",
      "High-Conversion Headless E-Commerce",
      "Resilient REST & GraphQL APIs",
      "Database Architecture & Edge Caching",
    ],
    whyItMatters:
      "Sub-second latency and rock-solid architecture convert casual visitors into enterprise customers. We engineer software people love using.",
    schematicType: "code",
    tools: ["Next.js", "React", "TypeScript", "React Native", "Tailwind CSS", "Node.js"],
  },
  {
    id: "ai-automation",
    index: "02",
    title: "AI & Automation",
    tagline: "Autonomous multi-agent workflows, conversational voice intelligence, and self-operating pipelines.",
    description:
      "We build and deploy production-grade autonomous agent systems, low-latency AI voice agents for live client calls, document intelligence, and automated operational pipelines that replace repetitive manual overhead.",
    whatWeBuild: [
      "Autonomous Voice Agents (Sub-800ms Latency)",
      "Context-Aware AI Chatbots & Copilots",
      "Multi-Agent LangGraph Workflows",
      "Automated Lead Qualification & CRM Sync",
      "Internal Semantic Document Search & RAG",
      "Automated Invoicing & Operational Flows",
    ],
    whyItMatters:
      "Eliminate repetitive manual hours. Autonomous agents execute tasks 24/7 with zero latency and zero dropped leads.",
    schematicType: "agents",
    tools: ["LangGraph", "Python", "OpenAI / Claude", "Voice AI", "Make", "FastAPI"],
  },
  {
    id: "digital-growth",
    index: "03",
    title: "Digital Growth & SEO",
    tagline: "Search dominance, generative engine optimization (GEO), and revenue-focused acquisition.",
    description:
      "We position your business at the pinnacle of Google Search, local map packs, and emerging generative engines like ChatGPT and Perplexity. Driven by organic technical excellence and high-intent funnel architecture.",
    whatWeBuild: [
      "Technical SEO & Sub-Second Core Web Vitals",
      "Generative Engine Optimization (GEO for LLMs)",
      "Google Business Profile & Map-Pack Ranking",
      "High-Intent Editorial Content Architecture",
      "Conversion Rate Optimization (CRO) Audits",
      "Revenue Attribution & PostHog Analytics",
    ],
    whyItMatters:
      "A superior product is invisible without organic reach. We direct steady, qualified enterprise buyers straight to your door.",
    schematicType: "growth",
    tools: ["Search Console", "PostHog", "Perplexity GEO", "Google Analytics", "Ahrefs"],
  },
  {
    id: "creative-design",
    index: "04",
    title: "Creative Design & UI/UX",
    tagline: "Design systems, tactile product interfaces, and cinematic brand identities.",
    description:
      "We shape memorable brands and craft intuitive user interfaces that convert visitors into loyal advocates. From comprehensive Figma design tokens to high-retention video collateral, our design conveys instant institutional authority.",
    whatWeBuild: [
      "End-to-End Product UI/UX Architecture",
      "Figma Design Systems & Scalable Tokens",
      "Brand Identity, Typography & Guidelines",
      "Interactive Clickable Prototypes & Motion",
      "Cinematic Product Demos & Social Video",
      "High-Impact Investor Decks & Collateral",
    ],
    whyItMatters:
      "Buyers determine institutional credibility in 3 seconds. Flawless craft and typography justify premium market positioning.",
    schematicType: "creative",
    tools: ["Figma", "Premiere Pro", "DaVinci Resolve", "After Effects", "Photoshop"],
  },
  {
    id: "business-systems",
    index: "05",
    title: "Business Systems & Cloud",
    tagline: "Bulletproof cloud architecture, custom internal operations hubs, and data reliability.",
    description:
      "We build the underlying digital infrastructure that allows scaling companies to run flawlessly. From multi-cloud hosting with automated failovers to internal Retool apps and consolidated CRM data flows.",
    whatWeBuild: [
      "AWS & Vercel Enterprise Cloud Infrastructure",
      "Custom Internal Admin Portals & Retool Apps",
      "Unified CRM & Data Synchronization Hubs",
      "Automated CI/CD & Zero-Downtime Deploys",
      "Enterprise Cloudflare Security, SSL & WAF",
      "Encrypted Daily Backups & Disaster Recovery",
    ],
    whyItMatters:
      "Running scaling operations on fragmented spreadsheets leads to chaos. We engineer clean systems that unlock effortless scale.",
    schematicType: "systems",
    tools: ["AWS", "Vercel", "Supabase", "Retool", "Cloudflare", "PostgreSQL"],
  },
  {
    id: "sla-retainers",
    index: "06",
    title: "Continuous SLA & Retainers",
    tagline: "Direct founding engineer access, proactive 24/7 monitoring, and ongoing feature sprints.",
    description:
      "An on-demand engineering extension to your company. We monitor uptime 24/7, deploy zero-day security patches, optimize real-world performance, and continuously ship product enhancements under strict guaranteed SLAs.",
    whatWeBuild: [
      "Proactive 24/7 Uptime & Anomaly Monitoring",
      "Sub-4-Hour Critical Incident Response SLA",
      "Continuous Performance & Core Web Vitals Tuning",
      "Zero-Day Security Patching & Upgrades",
      "Bi-Weekly Feature Sprints & Roadmapping",
      "Direct Slack/WhatsApp with Founding Engineers",
    ],
    whyItMatters:
      "When software or checkouts stall, revenue evaporates. Our retainer guarantees your critical platforms stay online and evolving.",
    schematicType: "support",
    tools: ["BetterUptime", "Sentry", "Cloudflare", "Lighthouse", "GitHub"],
  },
];
