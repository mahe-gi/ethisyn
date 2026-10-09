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
  emails: {
    general: string;
    careers: string;
    legal: string;
  };
  contactPhone: string;
  whatsappNumber: string;
  social: {
    linkedin: string;
    googleBusinessProfile: string;
    wellfound?: string;
    goodfirms?: string;
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
  tagline: "Build. Automate. Grow. Create. | Technology, AI and digital growth for ambitious businesses.",
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
  emails: {
    general: "hello@ethisyn.in",
    careers: "careers@ethisyn.in",
    legal: "legal@ethisyn.in",
  },
  contactPhone: "+91 80961 31202",
  whatsappNumber: "918096131202",
  social: {
    linkedin: "https://www.linkedin.com/company/ethisyn",
    googleBusinessProfile: "https://share.google/j8tMk3MPqJBnVg04U",
    wellfound: "https://wellfound.com/company/ethisyn",
    goodfirms: "https://www.goodfirms.co/company/ethisyn",
    github: "https://github.com/mahe-gi/ethisyn",
  },
  stats: [
    { value: "Sub-Second", label: "Target Latency", descriptor: "Edge-optimized delivery with sub-second time-to-interactive" },
    { value: "100%", label: "In-House Builders", descriptor: "Architected and built directly by domain leads, with zero junior outsourcing" },
    { value: "High-Availability", label: "Cloud Systems", descriptor: "Fault-tolerant infrastructure with automated health checks" },
    { value: "11", label: "Domain Partners", descriptor: "Senior domain leads directing client systems across global markets" },
  ],
};
