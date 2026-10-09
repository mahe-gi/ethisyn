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
  { label: "Case Studies", href: "/case-studies", index: "03" },
  { label: "Team", href: "/team", index: "04" },
  { label: "Blog", href: "/blog", index: "05" },
  { label: "Careers", href: "/careers", index: "06" },
  { label: "Contact", href: "/#contact", index: "07" },
];

export const allSectionNavItems: NavItem[] = [
  { label: "Services", href: "/#services", index: "01" },
  { label: "Products", href: "/#products", index: "02" },
  { label: "Case Studies", href: "/case-studies", index: "03" },
  { label: "Team", href: "/team", index: "04" },
  { label: "Blog", href: "/blog", index: "05" },
  { label: "Careers", href: "/careers", index: "06" },
  { label: "Contact", href: "/#contact", index: "07" },
];

export const footerNavLinks = {
  services: [
    { label: "AI Agent Development", href: "/ai-agent-development" },
    { label: "AI Workflow Automation", href: "/ai-workflow-automation" },
    { label: "Custom Software Development", href: "/custom-software-development" },
    { label: "SaaS Product Engineering", href: "/saas-development" },
    { label: "Web App Development", href: "/web-app-development" },
    { label: "Hyderabad Studio (AI & Software)", href: "/hyderabad" },
    { label: "Reverse Recruiting & Job Service", href: "/job-application-service" },
    { label: "Proprietary Products (GoWider)", href: "/#products" },
  ],
  company: [
    { label: "Case Studies & Proof of Work", href: "/case-studies" },
    { label: "Founding Team & Leadership", href: "/team" },
    { label: "Perspectives & Engineering Blog", href: "/blog" },
    { label: "Careers & Open Positions", href: "/careers" },
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
