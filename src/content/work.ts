export interface CaseStudy {
  id: string;
  category: string;
  badge: string;
  title: string;
  tagline: string;
  clientIndustry: string;
  deliverables: string[];
  timeline: string;
  techStack: string[];
  challenge: {
    description: string;
    clientGoal: string;
  };
  strategy: {
    heading: string;
    points: Array<{
      title: string;
      description: string;
    }>;
  };
  results: Array<{
    metric: string;
    label: string;
    descriptor: string;
  }>;
  liveUrl?: string;
  statsSummary: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "gowider",
    category: "Custom SaaS Build",
    badge: "POST-PRODUCTION SAAS // MVP TO PRODUCTION",
    title: "GoWider (gowider.in) — Broadcast-Grade Portfolio Platform for Video Editors",
    tagline: "How an MVP launched in 4 weeks with sub-second performance and zero video hosting costs.",
    clientIndustry: "Creator Economy / Post-Production SaaS",
    deliverables: [
      "Full-Stack SaaS Architecture",
      "UI/UX Design System",
      "Database Engine & Drizzle Schema",
      "CI/CD Pipeline & Automated Testing",
    ],
    timeline: "4 Weeks (Concept to Live Production on gowider.in)",
    techStack: [
      "Next.js 15 (App Router)",
      "React 19",
      "TypeScript",
      "Neon Serverless PostgreSQL",
      "Drizzle ORM",
      "Better Auth",
      "Tailwind CSS v4",
      "Vitest",
    ],
    challenge: {
      description:
        "Commercial video editors, documentary filmmakers, and colorists were losing high-ticket agency contracts because their work was scattered across chaotic WhatsApp threads, unlisted YouTube links, and expired Google Drive folders with permission walls. Existing portfolio builders were either sluggish, lacked native 9:16 vertical reel support, or charged exorbitant monthly fees for video binary uploads.",
      clientGoal:
        "Build an Awwwards-grade, ultra-minimalist portfolio platform that gives video creators a unified broadcast stage (gowider.in/username) in under 60 seconds — without incurring thousands of dollars in video bandwidth and storage costs.",
    },
    strategy: {
      heading: "Architectural Strategy Engineered by Ethisyn",
      points: [
        {
          title: "Zero-Binary Poster-First Streaming Engine",
          description:
            "Instead of storing expensive multi-gigabyte video files, Ethisyn engineered a proprietary metadata resolver that ingests links from YouTube, Instagram Reels, and Google Drive. It auto-generates high-resolution typographic and image posters on the initial server render. Zero iframes or heavy video players are mounted on initial page load, resulting in instantaneous page loads.",
        },
        {
          title: "Sub-Second Performance Optimization",
          description:
            "Configured Neon Serverless PostgreSQL with connection pooling; memoized layout and data queries via React cache(), slashing server response times from 6s down to 88–340ms; optimized cursor tracking using requestAnimationFrame and direct DOM transforms, eliminating 120+ unnecessary React re-renders per second; trimmed shared JavaScript bundle to just 100 kB.",
        },
        {
          title: "3 Bespoke Editorial Themes",
          description:
            "Cinema (Deep OLED pitch-black canvas with cinematic letterboxing), Editorial (Asymmetric magazine grid with vermillion accent typography), and Studio (Precision multi-column layouts displaying camera packages and technical timecodes).",
        },
        {
          title: "Security & Data Sanitization",
          description:
            "Strict ownership enforcement, zero internal UUIDs or user emails exposed on public routes, and privacy-preserving IP hashing for moderation.",
        },
        {
          title: "Rigorous Quality Assurance",
          description:
            "Pushed through 151/151 automated tests across authentication, security boundaries, and theme rendering.",
        },
      ],
    },
    results: [
      {
        metric: "4 Weeks",
        label: "Concept to Live",
        descriptor: "Shipped full MVP from database schema to live production deployment at gowider.in.",
      },
      {
        metric: "< 300ms",
        label: "Sub-Second Shell",
        descriptor: "Average page shell loads in under 300ms globally across all edge regions.",
      },
      {
        metric: "$0 / mo",
        label: "Bandwidth Fees",
        descriptor: "Zero video storage fees by leveraging native poster-first streaming pipes.",
      },
      {
        metric: "151/151",
        label: "Tests Passing",
        descriptor: "100% test coverage across authentication, security boundaries, and rendering.",
      },
    ],
    liveUrl: "https://gowider.in",
    statsSummary: "Sub-second performance • Launched in 4 weeks • Live on gowider.in",
  },
  {
    id: "ai-inbound-crm",
    category: "AI Automation Pipeline",
    badge: "ENTERPRISE WORKFLOW AUTOMATION // VOICE AI",
    title: "Autonomous Inbound CRM & Conversational Voice Agent",
    tagline: "How an automated CRM & voice agent saved 18 hours/week in manual qualification and scheduling.",
    clientIndustry: "B2B Consulting & Professional Services",
    deliverables: [
      "AI Voice Agent (Sub-800ms Latency)",
      "Omnichannel Lead Router",
      "CRM Webhook Pipeline",
      "Auto-Calendar Sync & Transcriptions",
    ],
    timeline: "2 Weeks",
    techStack: [
      "OpenAI Realtime / ElevenLabs",
      "Vapi",
      "Make.com / n8n",
      "HubSpot CRM",
      "Google Calendar API",
    ],
    challenge: {
      description:
        "The client's sales and executive team were losing up to 18 hours each week manually answering inbound inquiries, verifying prospect budgets, sending back-and-forth scheduling emails, and entering prospect notes into their CRM. Inbound leads arriving outside business hours frequently cooled off before the team could reply.",
      clientGoal:
        "Automate inbound lead triage, eliminate manual calendar coordination, and instantly route high-value accounts directly to senior leadership without human friction.",
    },
    strategy: {
      heading: "Architectural Strategy Engineered by Ethisyn",
      points: [
        {
          title: "Real-Time Voice AI Agent",
          description:
            "Deployed an ultra-low latency conversational AI voice agent capable of answering inbound calls 24/7. The agent introduces the firm, answers complex qualification questions, checks prospect fit against dynamic criteria (budget, timeline, scope), and books meetings directly on team calendars.",
        },
        {
          title: "Instant Multi-Channel Pipeline",
          description:
            "Synchronized voice, email, and website form submissions through a central event-driven automation engine (n8n/Make).",
        },
        {
          title: "Automated CRM Enrichment",
          description:
            "Automatically transcribed calls, summarized pain points into executive bullets, and updated deal stages in HubSpot with zero human touch.",
        },
      ],
    },
    results: [
      {
        metric: "18 Hrs/Wk",
        label: "Saved Weekly",
        descriptor: "Completely eliminated manual meeting scheduling and data entry for senior partners.",
      },
      {
        metric: "< 15s",
        label: "Lead Response",
        descriptor: "Inbound response time dropped from 4.2 hours to under 15 seconds.",
      },
      {
        metric: "+34%",
        label: "Qualified Bookings",
        descriptor: "Significant reduction in lead leakage by immediately scheduling prospects while their intent is peak.",
      },
      {
        metric: "100%",
        label: "After-Hours Coverage",
        descriptor: "Zero missed after-hours calls with immediate qualification and calendar booking.",
      },
    ],
    statsSummary: "Saved 18 hours/week • 15s lead response • +34% qualified bookings",
  },
  {
    id: "local-seo-engine",
    category: "Local Growth Campaign",
    badge: "LOCAL SEO & HIGH-INTENT CONVERSION",
    title: "High-Intent Local SEO & Conversion Architecture",
    tagline: "How data-driven local SEO generated 40+ monthly inbound qualified leads from zero.",
    clientIndustry: "Multi-Location High-Ticket Service Provider",
    deliverables: [
      "Local SEO Optimization & Audit",
      "Programmatic City Landing Pages",
      "Google Business Profile Strategy",
      "Conversion-First Funnel & Quote Calculator",
    ],
    timeline: "8 Weeks to Peak Trajectory",
    techStack: [
      "Next.js Static Generation",
      "Schema.org LocalBusiness Markup",
      "Google Business Profile API",
      "GA4 & CallRail",
    ],
    challenge: {
      description:
        "The client had great offline reputation but an invisible local digital footprint. Despite high search volumes in their metropolitan area for high-ticket commercial services, their competitors were capturing 85%+ of local search traffic. Paid Google Ads costs were becoming unsustainable at $65+ per click.",
      clientGoal:
        "Dominate organic local search map packs, slash dependence on expensive paid ads, and create a frictionless quote calculator that drives direct inbound phone calls and qualified bookings.",
    },
    strategy: {
      heading: "Architectural Strategy Engineered by Ethisyn",
      points: [
        {
          title: "Programmatic Hyper-Local Landing Pages",
          description:
            "Engineered lightweight, static city and neighborhood landing pages with localized keyword clusters, rich review snippets, and dynamic service areas.",
        },
        {
          title: "Google Business Profile (GBP) Overhaul",
          description:
            "Optimized service categories, geo-tagged photo media, weekly cadence posts, and an automated review acquisition workflow.",
        },
        {
          title: "Structured Data & Citation Architecture",
          description:
            "Implemented advanced JSON-LD LocalBusiness schema markup across all service pages and synchronized citations across high-authority local directories.",
        },
        {
          title: "Frictionless Conversion Funnel",
          description:
            "Replaced confusing inquiry forms with a high-converting 3-step quote calculator and click-to-call mobile triggers.",
        },
      ],
    },
    results: [
      {
        metric: "40+ / Mo",
        label: "Inbound Leads",
        descriptor: "Scaled organic monthly inbound leads from 3 to over 42 qualified calls/forms per month.",
      },
      {
        metric: "Top 3",
        label: "Map Pack Rankings",
        descriptor: "Achieved #1 to #3 rankings across 18 core high-intent search terms within 60 days.",
      },
      {
        metric: "-70%",
        label: "Acquisition Cost",
        descriptor: "Decreased reliance on paid Google Ads, saving thousands in monthly ad spend.",
      },
      {
        metric: "62%",
        label: "Mobile Conversion",
        descriptor: "Direct phone call clicks jumped by 3.8x following the mobile conversion revamp.",
      },
    ],
    statsSummary: "40+ monthly inbound leads • Top 3 Map Pack • -70% acquisition cost",
  },
];
