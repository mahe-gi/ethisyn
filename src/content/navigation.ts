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
  { label: "Team", href: "/team", index: "03" },
  { label: "Blog", href: "/blog", index: "04" },
  { label: "Careers", href: "/careers", index: "05" },
  { label: "Contact", href: "/#contact", index: "06" },
];

export const allSectionNavItems: NavItem[] = [
  { label: "Services", href: "/#services", index: "01" },
  { label: "Products", href: "/#products", index: "02" },
  { label: "Team", href: "/team", index: "03" },
  { label: "Blog", href: "/blog", index: "04" },
  { label: "Careers", href: "/careers", index: "05" },
  { label: "Contact", href: "/#contact", index: "06" },
];

export const footerNavLinks = {
  services: [
    { label: "BUILD // Software & Web", href: "/#services" },
    { label: "AUTOMATE // AI & Automation", href: "/#ai" },
    { label: "GROW // Digital Growth & SEO", href: "/#services" },
    { label: "CREATE // Creative & Content", href: "/#services" },
    { label: "Job Application Service (Reverse Recruiting)", href: "/job-application-service" },
    { label: "Proprietary Products", href: "/#products" },
  ],
  company: [
    { label: "Our Team", href: "/team" },
    { label: "Perspectives & Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Start a Project", href: "/#contact" },
    { label: "LinkedIn", href: siteConfig.social.linkedin, isExternal: true },
    { label: "Google Profile", href: siteConfig.social.googleBusinessProfile, isExternal: true },
    { label: siteConfig.contactEmail, href: `mailto:${siteConfig.contactEmail}`, isExternal: true },
  ],
  legal: [{ label: "Privacy Policy", href: "/privacy" }],
};
