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
  founded: 2022,
  location: {
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    code: "HYD / IND",
    formatted: "Hyderabad, Telangana, India",
  },
  contactEmail: "hello@ethisyn.in",
  social: {
    linkedin: "https://www.linkedin.com/company/ethisyn",
    googleBusinessProfile: "https://share.google/r2HXy33z6VSWRdJ2J",
    github: "https://github.com/mahe-gi",
  },
  stats: [
    { value: "Sub-500ms", label: "Global Latency", descriptor: "Edge-optimized delivery with sub-second time-to-interactive" },
    { value: "100%", label: "In-House Builders", descriptor: "Architected and built directly by domain leads—zero junior outsourcing" },
    { value: "99.99%", label: "Cloud Reliability", descriptor: "Zero single-point-of-failure infrastructure with continuous SLAs" },
    { value: "11", label: "Domain Partners", descriptor: "Ambitious startups and enterprises scaled across global markets" },
  ],
};
