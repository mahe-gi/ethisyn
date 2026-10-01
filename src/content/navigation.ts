import { siteConfig } from "./site";

export interface NavItem {
  label: string;
  href: string;
  index?: string;
  isExternal?: boolean;
}

export const mainNavItems: NavItem[] = [
  { label: "Services", href: "/#services", index: "01" },
  { label: "AI Solutions", href: "/#ai", index: "02" },
  { label: "Our Products", href: "/#products", index: "03" },
  { label: "Our Team", href: "/team", index: "04" },
  { label: "How We Work", href: "/#process", index: "05" },
];

export const allSectionNavItems: NavItem[] = [
  { label: "Services", href: "/#services", index: "01" },
  { label: "AI & Automation", href: "/#ai", index: "02" },
  { label: "Our Products", href: "/#products", index: "03" },
  { label: "How We Work", href: "/#process", index: "04" },
  { label: "Our Team", href: "/team", index: "05" },
  { label: "Company", href: "/#company", index: "06" },
  { label: "Start a Project", href: "/#contact", index: "07" },
];

export const footerNavLinks = {
  services: [
    { label: "Websites & Software", href: "/#services" },
    { label: "AI & Automation", href: "/#ai" },
    { label: "Digital Growth & SEO", href: "/#services" },
    { label: "Creative, Design & Video", href: "/#services" },
    { label: "Business Systems & Cloud", href: "/#services" },
    { label: "Support & Maintenance", href: "/#services" },
  ],
  company: [
    { label: "Our Team", href: "/team" },
    { label: "Our Products", href: "/#products" },
    { label: "Start a Project", href: "/#contact" },
    { label: "LinkedIn", href: siteConfig.social.linkedin, isExternal: true },
    { label: "Google Profile", href: siteConfig.social.googleBusinessProfile, isExternal: true },
    { label: siteConfig.contactEmail, href: `mailto:${siteConfig.contactEmail}`, isExternal: true },
  ],
  legal: [{ label: "Privacy Policy", href: "/privacy" }],
};
