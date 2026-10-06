export type ProductStatus =
  | "Live"
  | "In Active Development"
  | "Private Beta"
  | "Coming Soon";

export interface ProprietaryProduct {
  id: string;
  index: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  features: string[];
  status: ProductStatus;
  statusDetail?: string;
  url?: string;
  category: string;
  stack: string[];
}

export const proprietaryProducts: ProprietaryProduct[] = [
  {
    id: "rental-circle",
    index: "01",
    name: "The Rental Circle",
    badge: "RENTAL MARKETPLACE PLATFORM",
    tagline: "Modern online rental platform for seamless, secure equipment and item sharing.",
    description:
      "A comprehensive multi-category digital rental marketplace connecting lenders and borrowers. Designed for frictionless booking, verified item listings, automated security deposits, digital identity verification, and scheduled pickup and return workflows.",
    features: [
      "Multi-category rental catalog with real-time availability calendars",
      "Automated security deposit calculations and digital escrow release",
      "Instant online booking with flexible daily, weekly, and monthly rates",
      "Integrated digital identity verification and damage protection policies",
      "Automated return reminders, extension requests, and pickup scheduling",
      "Direct owner-to-renter messaging and instant WhatsApp notifications",
    ],
    status: "Live",
    statusDetail: "Live in Production at therentalcircle.in",
    url: "https://therentalcircle.in/",
    category: "Rental & Marketplace Software",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Razorpay"],
  },
  {
    id: "gowider",
    index: "02",
    name: "GoWider",
    badge: "CREATOR ECONOMY / PORTFOLIO SAAS",
    tagline: "Broadcast-grade portfolio platform for video editors, documentary filmmakers, and colorists.",
    description:
      "An Awwwards-grade, ultra-minimalist portfolio platform that gives video creators a unified broadcast showcase (gowider.in/username) in under 60 seconds. Engineered with a zero-binary poster-first streaming engine that slashes video hosting costs to $0 while delivering sub-300ms page load times globally.",
    features: [
      "Zero-binary streaming engine ingesting YouTube, Reels, and Drive with zero hosting fees",
      "Sub-300ms page shell loads powered by React cache() and Neon Serverless pooling",
      "3 bespoke editorial themes: Cinema (OLED black), Editorial (magazine grid), and Studio",
      "Native 9:16 vertical reel integration and technical camera package/timecode displays",
      "Strict data sanitization, privacy IP hashing, and zero public UUID exposure",
      "151/151 automated tests passing across authentication, themes, and security bounds",
    ],
    status: "Live",
    statusDetail: "Live in Production at gowider.in",
    url: "https://gowider.in",
    category: "Creator Economy & Post-Production SaaS",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Neon PostgreSQL",
      "Drizzle ORM",
      "Better Auth",
      "Tailwind CSS v4",
      "Vitest",
    ],
  },
];
