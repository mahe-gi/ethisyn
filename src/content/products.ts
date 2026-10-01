export interface ProprietaryProduct {
  id: string;
  index: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  benefits: string[];
  status: "In Development" | "Private Beta" | "Live";
}

export const proprietaryProducts: ProprietaryProduct[] = [
  {
    id: "career-ai",
    index: "01",
    name: "Student & Job Career Suite",
    badge: "AI Product",
    tagline: "Helping students and job hunters land real interviews faster.",
    description:
      "An AI-powered career assistant that rewrites your resume for each job description, practices real voice interviews with you, and tracks every application in one dashboard.",
    benefits: [
      "Customizes your resume to pass company ATS screening software",
      "Real-time voice AI mock interviews that ask real technical & HR questions",
      "One dashboard to organize and track every company you applied to",
      "Automatic portfolio generator that proves your real project skills",
    ],
    status: "In Development",
  },
  {
    id: "synapse-ops",
    index: "02",
    name: "Synapse Operations Hub",
    badge: "Business Tool",
    tagline: "One simple screen to manage your leads, invoices, and client chats.",
    description:
      "A lightweight internal workspace for business owners. Collects leads from your website and WhatsApp, creates GST invoices in 10 seconds, and reminds clients when payments are due.",
    benefits: [
      "Brings all website and WhatsApp leads into one easy list",
      "Create and send professional GST invoices in 1 click",
      "Automatic WhatsApp and email payment reminders for unpaid bills",
      "Live daily profit, revenue, and team task overview",
    ],
    status: "Private Beta",
  },
  {
    id: "pulse-engine",
    index: "03",
    name: "PulseEngine (Local SEO Copilot)",
    badge: "Growth Tool",
    tagline: "Dominate Google Maps and get more local foot traffic.",
    description:
      "An automated assistant for local clinics, stores, and businesses. Posts regular updates to your Google Business Profile, writes smart review replies, and keeps you at the top of local maps.",
    benefits: [
      "Schedules regular local updates and photos to Google Maps automatically",
      "Uses AI to write friendly, professional replies to customer reviews",
      "Monitors your Google Maps ranking compared to nearby competitors",
      "Ensures your business name, phone, and address are consistent everywhere",
    ],
    status: "In Development",
  },
];
