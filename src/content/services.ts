export interface ServiceMetric {
  value: string;
  label: string;
  descriptor: string;
}

export interface ServiceItem {
  id: string;
  index: string;
  pillar: "BUILD" | "AUTOMATE" | "GROW" | "CREATE";
  title: string;
  tagline: string;
  badge: string;
  description: string;
  features: string[];
  whatWeBuild: string[]; // Preserves backwards-compatibility with existing UI components
  deliverables: string[];
  metrics: ServiceMetric[];
  whyItMatters: string;
  schematicType: "code" | "agents" | "growth" | "creative";
  tools: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "build",
    index: "01",
    pillar: "BUILD",
    title: "Software & Digital Product Development",
    tagline: "High-velocity web applications, cross-platform mobile apps, custom business software, and enterprise SaaS platforms.",
    badge: "SOFTWARE & PRODUCT ENGINEERING",
    description:
      "We design and build digital products that help businesses operate, serve customers and scale. From business websites and mobile apps to SaaS products, custom business software, CRM systems, admin portals, and resilient database backends, we build reliable digital systems around your business needs.",
    features: [
      "Business Websites",
      "Web Applications",
      "Mobile Applications (iOS & Android)",
      "SaaS Products",
      "Custom Business Software",
      "CRM Systems",
      "Admin & Management Portals",
      "APIs & Third-Party Integrations",
      "E-commerce Solutions",
      "Custom Dashboards",
      "Database & Backend Systems",
      "Product Development",
    ],
    whatWeBuild: [
      "Business Websites & Brand Portals",
      "Full-Stack Web Applications (Next.js & React)",
      "Mobile Apps (iOS & Android React Native)",
      "B2B SaaS MVPs & Customer Portals",
      "Custom CRM Systems & Admin Dashboards",
      "APIs, Integrations & Cloud Backends",
    ],
    deliverables: [
      "Production-ready Next.js & React web applications with edge SSR/SSG",
      "App Store & Google Play Store native app deployment pipelines",
      "Role-based access control (RBAC) admin portals and operational dashboards",
      "Scalable Postgres / Supabase database architecture with zero-latency edge caching",
      "Comprehensive REST / GraphQL API documentation and third-party webhook integrations",
      "Automated CI/CD pipelines with zero-downtime deployment on AWS / Vercel",
    ],
    metrics: [
      { value: "< 500ms", label: "Global Edge Latency", descriptor: "Optimized time-to-interactive on global edge networks" },
      { value: "99.99%", label: "Platform Reliability", descriptor: "Zero single-point-of-failure cloud architectures" },
      { value: "100/100", label: "Lighthouse Performance", descriptor: "Perfect Core Web Vitals across mobile and desktop" },
      { value: "100%", label: "In-House Senior Engineers", descriptor: "Direct partner and lead engineering architecture" },
    ],
    whyItMatters:
      "Sub-second performance and rock-solid architecture convert visitors into high-LTV customers and eliminate technical debt before it starts.",
    schematicType: "code",
    tools: ["Next.js", "React", "TypeScript", "React Native", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS", "AWS / Vercel"],
  },
  {
    id: "automate",
    index: "02",
    pillar: "AUTOMATE",
    title: "AI & Business Automation",
    tagline: "Autonomous multi-agent workflows, conversational voice intelligence, and self-operating operational pipelines.",
    badge: "AI & INTELLIGENT SYSTEMS",
    description:
      "We use AI and automation to reduce repetitive work, improve workflows and help businesses operate more efficiently. We connect AI, software and business workflows to automate repetitive processes, qualify leads, and make operations seamless.",
    features: [
      "AI Agents",
      "AI Voice Agents",
      "AI Chatbots",
      "AI Workflow Automation",
      "Business Process Automation",
      "CRM Automation",
      "AI Integrations",
      "Document & Data Automation",
      "Customer Support Automation",
      "Lead Management Automation",
      "Internal Business Tools",
      "API-based Automation",
    ],
    whatWeBuild: [
      "Autonomous AI Voice Agents (Inbound / Outbound)",
      "Context-Aware AI Chatbots & Customer Support Bots",
      "AI Workflow Automation (Make, n8n, Custom Engines)",
      "Automated CRM Lead Routing & Instant Ingestion",
      "Intelligent Document Extraction & Data Automation",
      "Business Process Automation & Ops Tooling",
    ],
    deliverables: [
      "Low-latency voice calling bots integrated with Twilio / SIP infrastructure",
      "Multi-agent LangGraph orchestration pipelines with self-correcting state machines",
      "Enterprise semantic search and RAG knowledge-bases on proprietary company documents",
      "Bi-directional CRM sync pipelines across HubSpot, Salesforce, Zoho, and custom databases",
      "Automated multi-step document intake, data verification, and accounting exports",
      "Operational anomaly alerting, real-time fallback routing, and observability dashboards",
    ],
    metrics: [
      { value: "< 800ms", label: "Voice Latency", descriptor: "Natural, human-like voice response time on live phone calls" },
      { value: "24/7", label: "Autonomous Availability", descriptor: "Instant lead qualification and continuous process execution" },
      { value: "85%+", label: "Manual Time Saved", descriptor: "Elimination of repetitive administrative and data entry tasks" },
      { value: "0", label: "Dropped Inquiries", descriptor: "Instant multichannel capture across web, WhatsApp, and phone" },
    ],
    whyItMatters:
      "Eliminate hundreds of manual hours every month. Autonomous AI agents qualify leads, route tickets, and execute operations at machine speed.",
    schematicType: "agents",
    tools: ["LangGraph", "Python", "OpenAI / Claude", "Voice AI", "Make", "n8n", "FastAPI", "Pinecone / pgvector"],
  },
  {
    id: "grow",
    index: "03",
    pillar: "GROW",
    title: "Digital Marketing & Growth",
    tagline: "Search engine optimization, Google Business Profile rankings, Meta & Google ad campaigns, and social media growth.",
    badge: "REVENUE & MARKET ACQUISITION",
    description:
      "We help businesses build their online presence, reach customers and generate opportunities through digital channels. We help businesses become more visible online, reach the right audience and turn digital attention into real business opportunities.",
    features: [
      "Job Application & Reverse Recruiting Service",
      "Search Engine Optimization (SEO)",
      "Local SEO",
      "Google Business Profile Optimization",
      "Google Ads",
      "Meta Ads (Facebook & Instagram)",
      "Social Media Management",
      "Instagram Marketing",
      "LinkedIn Marketing",
      "Content Marketing",
      "Email Marketing",
      "SMS Campaigns",
      "Analytics & Reporting",
      "Lead Generation",
      "Online Brand Promotion",
    ],
    whatWeBuild: [
      "Job Application & Reverse Recruiting Service (Led by Patan Rabiya)",
      "Local SEO & Google Business 3-Pack Rankings",
      "Technical SEO & Generative Engine Optimization (GEO)",
      "High-Converting Google & Meta Paid Ad Campaigns",
      "Social Media Management (Instagram & LinkedIn)",
      "Email Marketing & SMS Lead Nurture Campaigns",
      "Analytics, Conversion Reporting & Lead Attribution",
    ],
    deliverables: [
      "Top-3 Local 3-Pack Map rankings and citation syndication network",
      "Full technical SEO audit, structured schema markup, and LLM generative optimization",
      "Audience-segmented Google Search, Performance Max, and Meta ad campaign builds",
      "Weekly editorial calendars, visual content distribution, and thought leadership publishing",
      "Automated lead capture landing pages with sub-second load times and A/B split testing",
      "Multi-touch revenue attribution models and PostHog / Google Analytics 4 dashboards",
    ],
    metrics: [
      { value: "3.4x - 6.2x", label: "Average Paid ROAS", descriptor: "Targeted return on ad spend across performance campaigns" },
      { value: "300%+", label: "Organic Search Growth", descriptor: "Consistent growth in high-intent non-branded organic impressions" },
      { value: "Top 3", label: "Map-Pack Placement", descriptor: "Dominant local search visibility for primary commercial queries" },
      { value: "< 4h", label: "Lead Response Time", descriptor: "Instant synchronization from ad lead forms straight to sales CRM" },
    ],
    whyItMatters:
      "World-class software and products are invisible without traffic. We build repeatable acquisition channels that turn clicks into measurable revenue.",
    schematicType: "growth",
    tools: ["Google Ads", "Meta Ads Manager", "Google Search Console", "PostHog", "Ahrefs", "Google Analytics 4", "Perplexity GEO"],
  },
  {
    id: "create",
    index: "04",
    pillar: "CREATE",
    title: "Creative & Content",
    tagline: "Video production, videography, video editing, social media content, and promotional brand campaigns.",
    badge: "CINEMATIC PRODUCTION & CREATIVE DIRECTION",
    description:
      "We create clear, engaging content that helps businesses communicate their value and stay visible across digital channels. From video production and editing to social media content and brand promotions, we craft the visual assets you need to stand out.",
    features: [
      "Video Production",
      "Videography",
      "Video Editing",
      "Social Media Content",
      "Instagram Content",
      "LinkedIn Content",
      "Promotional Videos",
      "Brand Promotions",
      "Creative Campaigns",
      "Marketing Creatives",
      "Digital Content",
    ],
    whatWeBuild: [
      "Cinematic Promotional & Brand Videos",
      "On-Location Videography & Video Editing",
      "Social Media Content (Instagram Reels & LinkedIn)",
      "High-Converting Marketing Creatives & Ad Assets",
      "Creative Campaigns & Brand Promotion",
      "Digital Visual Content & Graphic Systems",
    ],
    deliverables: [
      "Broadcast-grade 4K master video files with professional color grading and audio mastering",
      "Multi-ratio video exports optimized for widescreen (16:9), vertical (9:16), and square (1:1)",
      "Monthly batch-produced short-form content packages with dynamic captions and hooks",
      "High-converting static and animated ad creatives formatted for Meta, LinkedIn, and YouTube",
      "Comprehensive brand visual style guides, typography specs, and Figma design tokens",
      "Raw 4K footage vaults and reusable modular B-roll video libraries",
    ],
    metrics: [
      { value: "4K / 60fps", label: "Production Standard", descriptor: "Cinema-grade optics, lighting, and acoustic audio capture" },
      { value: "2.8x", label: "Higher Engagement", descriptor: "Increased social watch-through rates and click-through vs static assets" },
      { value: "100%", label: "Original Creative", descriptor: "No generic templates; tailored creative concepts built for your brand" },
      { value: "72h", label: "Rapid Turnaround", descriptor: "Expedited editorial cutdowns for fast-paced marketing sprints" },
    ],
    whyItMatters:
      "Market credibility is established in three seconds. High-production video and clear creative justify premium pricing and inspire buyer trust.",
    schematicType: "creative",
    tools: ["DaVinci Resolve", "Adobe Premiere Pro", "After Effects", "Figma", "Sony Cinema Line", "Adobe Photoshop", "Illustrator"],
  },
];
