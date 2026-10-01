export interface TeamMember {
  id: string;
  name: string;
  role: string;
  discipline: string;
  bio: string;
  image?: string;
  skills: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface TeamPageContent {
  title: string;
  subtitle: string;
  manifesto: string;
  rules: Array<{ title: string; explanation: string }>;
  members: TeamMember[];
}

export const teamContent: TeamPageContent = {
  title: "The people building your software.",
  subtitle:
    "We are an independent team of engineers, designers, and growth experts based in Hyderabad. We build clean software that works, without the corporate runaround.",
  manifesto:
    "We don't use sales middlemen or outsource your project to mystery freelancers. When you work with Ethisyn, you talk directly with the people who design your screens, write your code, and scale your brand.",
  rules: [
    {
      title: "Direct Access to Builders",
      explanation:
        "No account managers playing telephone. You communicate directly with the engineer, designer, or growth partner working on your project.",
    },
    {
      title: "Zero Junk Code",
      explanation:
        "We test everything on real phones and slow connections before we hand it over. If it's slow or glitchy, we don't ship it.",
    },
    {
      title: "We Dogfood Our Own Tools",
      explanation:
        "We run our own company using the exact same AI agents, automations, and growth systems we build for our clients.",
    },
    {
      title: "Honest Advice Always",
      explanation:
        "If a simple website solves your problem, we won't try to sell you a complex app you don't need.",
    },
  ],
  members: [
    {
      id: "mahesh-babu",
      name: "Mahesh Babu",
      role: "Founder & Lead Architect",
      discipline: "Leadership & Engineering",
      bio: "Leads technical architecture and product engineering at Ethisyn. Specializes in building high-speed web apps, autonomous AI agent pipelines, and clean cloud systems.",
      skills: ["Full-Stack Architecture", "Next.js & React", "AI Agent Workflows", "Cloud Infrastructure", "System Design"],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
        github: "https://github.com/mahe-gi",
      },
    },
    {
      id: "cmo-lead",
      name: "Ananya Reddy",
      role: "Co-Founder & Chief Marketing Officer (CMO)",
      discipline: "Leadership & Growth",
      bio: "Leads global marketing, brand strategy, and client acquisition at Ethisyn. Specializes in multi-channel organic growth, high-retention video storytelling, and positioning modern tech products to dominate their market.",
      image: "/team/cmo.png",
      skills: ["Brand Strategy", "Digital Growth & SEO", "Client Acquisition", "Content Direction", "Performance Marketing"],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
      },
    },
    {
      id: "automation-lead",
      name: "AI & Automation Lead",
      role: "Lead Systems & Automation Engineer",
      discipline: "AI & Systems",
      bio: "Builds intelligent voice agents that answer phone calls, automated WhatsApp chat systems, and integrations that connect CRMs and payment tools.",
      skills: ["AI Voice Agents", "Python & LangGraph", "Workflow Automations", "CRM Integrations", "Database Syncing"],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
      },
    },
    {
      id: "design-lead",
      name: "Creative & Brand Lead",
      role: "Head of UI/UX & Video Media",
      discipline: "Design & Media",
      bio: "Designs user-friendly screens in Figma, crafts brand identities, and edits short-form videos and reels that look sharp and capture attention.",
      skills: ["Figma UI/UX", "Brand Identity", "Video Editing", "Reels & Shorts", "Motion Graphics"],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
      },
    },
    {
      id: "fullstack-lead",
      name: "Senior Full-Stack Developer",
      role: "Full-Stack & Mobile Developer",
      discipline: "Web & Mobile",
      bio: "Turns designs into pixel-perfect web pages and mobile apps for iPhone and Android. Obsessed with fast load speeds and zero bugs.",
      skills: ["TypeScript", "Next.js", "React Native", "Tailwind CSS", "API Integrations"],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
      },
    },
    {
      id: "growth-lead",
      name: "Growth & SEO Specialist",
      role: "Head of Search & Digital Growth",
      discipline: "Marketing & Growth",
      bio: "Helps businesses climb to the top of Google Search and local Google Maps, and tracks analytics so you know exactly which campaigns bring revenue.",
      skills: ["Google Search SEO", "Local Google Maps", "AI Search (GEO)", "Content Strategy", "Analytics & Conversion"],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
      },
    },
  ],
};
