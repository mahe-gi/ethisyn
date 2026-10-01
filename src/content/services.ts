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
    id: "software-development",
    index: "01",
    title: "Websites & Software",
    tagline: "Fast, modern websites and apps that look great on any device.",
    description:
      "We build clean business websites, web applications, iPhone/Android apps, and online stores. Everything loads in under a second, works on every screen size, and is easy for you to manage.",
    whatWeBuild: [
      "Fast, high-converting business websites",
      "Web apps & custom customer portals",
      "iOS and Android mobile apps (React Native)",
      "SaaS product MVPs ready for paying users",
      "E-commerce stores with smooth checkout",
      "Custom APIs & reliable database setups",
    ],
    whyItMatters:
      "A slow, outdated website loses customers before they even read your first line. We build software people actually enjoy using.",
    schematicType: "code",
    tools: ["Next.js", "React", "TypeScript", "React Native", "Tailwind CSS", "Node.js"],
  },
  {
    id: "ai-automation",
    index: "02",
    title: "AI & Business Automation",
    tagline: "Put your everyday repetitive tasks on autopilot.",
    description:
      "We set up smart AI voice agents that speak like humans, customer support chatbots, and background automations that handle your routine work 24 hours a day.",
    whatWeBuild: [
      "AI Voice Agents that answer phone calls and book clients",
      "WhatsApp & Website Chatbots trained on your business",
      "Automated lead follow-ups and CRM syncing",
      "Instant invoice generation and payment alerts",
      "Multi-agent workflows connecting your apps together",
      "Internal AI search tools for company documents",
    ],
    whyItMatters:
      "Stop paying team members to do 4 hours of copy-pasting every day. Automation saves hundreds of hours and ensures zero leads are lost.",
    schematicType: "agents",
    tools: ["LangGraph", "Python", "OpenAI / Claude", "Voice AI", "Make / Zapier", "FastAPI"],
  },
  {
    id: "digital-growth",
    index: "03",
    title: "Digital Growth & SEO",
    tagline: "Get found by people searching for what you sell.",
    description:
      "We help your business rank at the top of Google Search, dominate local Google Maps in your city, and get recommended inside AI search engines like ChatGPT and Perplexity.",
    whatWeBuild: [
      "Google Search Optimization (SEO) for high-intent keywords",
      "Google Business Profile setup & local map-pack ranking",
      "AI Search Optimization (GEO for ChatGPT and Perplexity)",
      "Clean social media posting on LinkedIn & Instagram",
      "Automated email marketing sequences for new leads",
      "Clear analytics dashboards showing real customer leads",
    ],
    whyItMatters:
      "A great product is useless if nobody can find it. We bring steady, qualified buyers directly to your website.",
    schematicType: "growth",
    tools: ["Google Search Console", "Google Analytics", "Local SEO Tools", "Loops / Email", "PostHog"],
  },
  {
    id: "creative-brand",
    index: "04",
    title: "Creative, Design & Video",
    tagline: "Make your business look like the industry leader.",
    description:
      "We design clean user interfaces in Figma, create memorable logos, and produce high-retention short videos and reels that capture attention on social media.",
    whatWeBuild: [
      "UI/UX screen design and clickable prototypes in Figma",
      "Memorable logos, color palettes, and brand guidelines",
      "Engaging Instagram Reels, YouTube Shorts & TikTok edits",
      "Customer interview videos and product walkthroughs",
      "Professional sales decks, pitch decks & brochures",
      "Clean social media graphics and marketing banners",
    ],
    whyItMatters:
      "People judge your credibility in 3 seconds based on your design. Polished branding lets you charge premium prices.",
    schematicType: "creative",
    tools: ["Figma", "Premiere Pro", "DaVinci Resolve", "After Effects", "Photoshop"],
  },
  {
    id: "business-systems",
    index: "05",
    title: "Business Systems & Cloud",
    tagline: "The digital backbone your company needs to run smoothly.",
    description:
      "We set up organized CRM software, live sales dashboards, private employee portals, and secure cloud servers so your business operates without chaos.",
    whatWeBuild: [
      "Custom CRM setups keeping all customer chats in one screen",
      "Live business dashboards showing sales, leads & team tasks",
      "Private internal tools for staff, inventory, or orders",
      "Fast, secure cloud hosting on AWS and Vercel",
      "Custom business emails, secure SSL locks & DNS setups",
      "Automated daily backups protecting your customer data",
    ],
    whyItMatters:
      "Running a growing business on random WhatsApp chats and messy spreadsheets leads to lost orders and chaos. We give you a solid system.",
    schematicType: "systems",
    tools: ["AWS", "Vercel", "Supabase", "Retool", "Cloudflare", "PostgreSQL"],
  },
  {
    id: "support-maintenance",
    index: "06",
    title: "Support & Fast Maintenance",
    tagline: "We keep your digital tools fast, secure, and glitch-free.",
    description:
      "You get a dedicated engineering team on speed-dial. We monitor your site 24/7, optimize load speed, install security updates, and fix issues immediately.",
    whatWeBuild: [
      "Monthly website updates, security patches & testing",
      "Speed tune-ups ensuring sub-second page loads",
      "Automated spam prevention & hacker defense",
      "Daily backups with one-click restore protection",
      "Fast technical support when you want to add features",
      "Domain and server renewal management",
    ],
    whyItMatters:
      "When your website or payment form breaks, you lose money every minute. We keep watch so you never have to worry.",
    schematicType: "support",
    tools: ["BetterUptime", "Sentry", "Cloudflare", "Lighthouse", "GitHub"],
  },
];
