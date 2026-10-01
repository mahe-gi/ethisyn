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
    badge: "RESTAURANT MANAGEMENT SOFTWARE",
    tagline: "All-in-one cloud POS, contactless QR ordering, and kitchen operations software.",
    description:
      "An end-to-end restaurant management and floor operating system built for modern dining, cloud kitchens, and cafes. Centralizes tableside QR ordering, multi-counter cloud billing, real-time Kitchen Order Ticketing (KOT), inventory management, and revenue analytics.",
    features: [
      "Sub-second cloud POS with offline capability and instant bill printing",
      "Contactless digital QR menus with tableside ordering and split payments",
      "Real-time Kitchen Display System (KDS) and automated KOT printer routing",
      "Ingredient-level recipe costing, stock deduction, and live wastage audits",
      "Table status grid, waiter order routing, and real-time floor occupancy",
      "Comprehensive daily sales analytics, tax compliance, and revenue reporting",
    ],
    status: "In Active Development",
    statusDetail: "Active Architecture & Private Testing",
    category: "Restaurant & Hospitality Operations",
    stack: ["Next.js", "Node.js", "FastAPI", "PostgreSQL", "WebSockets", "Cloud PRN"],
  },
];
