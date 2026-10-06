import { siteConfig } from "./site";

export interface NavItem {
  label: string;
  href: string;
  index?: string;
  isExternal?: boolean;
}

export const mainNavItems: NavItem[] = [
  { label: "Services", href: "/#services", index: "01" },
  { label: "Products", href: "/#products", index: "02" },
  { label: "Work", href: "/work", index: "03" },
  { label: "Team", href: "/team", index: "04" },
  { label: "Blog", href: "/blog", index: "05" },
  { label: "Careers", href: "/careers", index: "06" },
  { label: "Contact", href: "/#contact", index: "07" },
];

export const allSectionNavItems: NavItem[] = [
  { label: "Services", href: "/#services", index: "01" },
  { label: "Products", href: "/#products", index: "02" },
  { label: "Work", href: "/work", index: "03" },
  { label: "Team", href: "/team", index: "04" },
  { label: "Blog", href: "/blog", index: "05" },
  { label: "Careers", href: "/careers", index: "06" },
  { label: "Contact", href: "/#contact", index: "07" },
];

export const footerNavLinks = {
  services: [
    { label: "BUILD // Software & Web", href: "/#services" },
    { label: "Software Development Hyderabad", href: "/software-development-company-hyderabad" },
    { label: "AUTOMATE // AI & Automation", href: "/#ai" },
    { label: "GROW // Digital Growth & SEO", href: "/#services" },
    { label: "Digital Marketing Hyderabad", href: "/digital-marketing-company-hyderabad" },
    { label: "CREATE // Creative & Content", href: "/#services" },
    { label: "Job Application Service (Reverse Recruiting)", href: "/job-application-service" },
    { label: "Proprietary Products", href: "/#products" },
  ],
  company: [
    { label: "Proof of Work / Case Studies", href: "/work" },
    { label: "Our Team", href: "/team" },
    { label: "Perspectives & Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Start a Project", href: "/#contact" },
    { label: "LinkedIn", href: siteConfig.social.linkedin, isExternal: true },
    { label: "Google Business Profile", href: siteConfig.social.googleBusinessProfile, isExternal: true },
    { label: "Wellfound Profile", href: siteConfig.social.wellfound || "https://wellfound.com/company/ethisyn", isExternal: true },
    { label: "GoodFirms Listing", href: siteConfig.social.goodfirms || "https://www.goodfirms.co/company/ethisyn", isExternal: true },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Inquiries: hello@ethisyn.in", href: "mailto:hello@ethisyn.in", isExternal: true },
    { label: "Careers: careers@ethisyn.in", href: "mailto:careers@ethisyn.in", isExternal: true },
    { label: "Legal: legal@ethisyn.in", href: "mailto:legal@ethisyn.in", isExternal: true },
  ],
};
