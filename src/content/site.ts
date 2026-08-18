export interface SiteConfig {
  name: string;
  pronunciation: string;
  tagline: string;
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
  type: string;
  focus: string[];
  contactEmail: string;
  googleBusinessProfile: string;
  social: {
    linkedin: string;
    googleBusinessProfile: string;
  };
  status: {
    state: string;
    focus: string;
    motto: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Ethisyn",
  pronunciation: "ETH-ih-sin",
  tagline: "Building technology with purpose.",
  description:
    "Ethisyn is an independent product technology company developing thoughtful digital products across software, artificial intelligence, cloud and emerging technologies.",
  url: "https://ethisyn.in",
  founded: 2025,
  location: {
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    code: "HYD / IND",
    formatted: "Hyderabad, Telangana, India",
  },
  type: "Independent product technology company",
  focus: [
    "Software",
    "Artificial Intelligence",
    "Cloud Systems",
    "Emerging Technology",
  ],
  contactEmail: "hello@ethisyn.in",
  googleBusinessProfile: "https://share.google/r2HXy33z6VSWRdJ2J",
  social: {
    linkedin: "https://www.linkedin.com/company/ethisyn",
    googleBusinessProfile: "https://share.google/r2HXy33z6VSWRdJ2J",
  },
  status: {
    state: "STATUS / BUILDING",
    focus: "FOCUS / PRODUCTS + SYSTEMS",
    motto: "INDEPENDENT / PRODUCT-LED / PURPOSE-BUILT",
  },
};
