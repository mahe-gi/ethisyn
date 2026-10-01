export interface SiteConfig {
  name: string;
  pronunciation: string;
  tagline: string;
  subheadline: string;
  description: string;
  url: string;
  founded: number;
  location: {
    city: string;
    state: string;
    country: string;
    code: string;
    formatted: string;
    coordinates: string;
  };
  contactEmail: string;
  social: {
    linkedin: string;
    googleBusinessProfile: string;
    github?: string;
  };
  stats: Array<{
    value: string;
    label: string;
    descriptor: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "Ethisyn",
  pronunciation: "ETH-ih-sin",
  tagline: "We build software, automate your operations, and help your business grow online.",
  subheadline: "An independent product engineering and digital systems studio in Hyderabad.",
  description:
    "Ethisyn builds fast websites, mobile apps, smart AI automation tools, and marketing systems for businesses that want real results without the corporate fluff.",
  url: "https://ethisyn.in",
  founded: 2025,
  location: {
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    code: "HYD / IND",
    formatted: "Hyderabad, Telangana, India",
    coordinates: "17.3850° N, 78.4867° E",
  },
  contactEmail: "hello@ethisyn.in",
  social: {
    linkedin: "https://www.linkedin.com/company/ethisyn",
    googleBusinessProfile: "https://share.google/r2HXy33z6VSWRdJ2J",
    github: "https://github.com/mahe-gi",
  },
  stats: [
    { value: "06", label: "Core Services", descriptor: "Software, AI, Growth, Design, Systems & Support" },
    { value: "100%", label: "In-House Work", descriptor: "Built directly by our team with zero outsourcing" },
    { value: "24/7", label: "AI Operations", descriptor: "Smart agents handling calls, leads, and workflows" },
    { value: "< 1s", label: "Load Times", descriptor: "Clean, lightweight code built for speed on any device" },
  ],
};
