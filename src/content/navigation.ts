import { siteConfig } from "./site";

export interface NavItem {
  label: string;
  href: string;
  index?: string;
  isExternal?: boolean;
}

export const mainNavItems: NavItem[] = [
  { label: "Services", href: "/#services", index: "01" },
  { label: "AI Systems", href: "/#ai", index: "02" },
  { label: "Process", href: "/#process", index: "03" },
  { label: "Founding Team", href: "/team", index: "04" },
  { label: "Blog", href: "/blog", index: "05" },
];

export const allSectionNavItems: NavItem[] = [
  { label: "Services", href: "/#services", index: "01" },
  { label: "AI Systems", href: "/#ai", index: "02" },
  { label: "Process", href: "/#process", index: "03" },
  { label: "Founding Team", href: "/team", index: "04" },
  { label: "Perspectives & Blog", href: "/blog", index: "05" },
  { label: "Start a Project", href: "/#contact", index: "06" },
];

export const footerNavLinks = {
  services: [
    { label: "Web & Software Engineering", href: "/#services" },
    { label: "AI & Automation", href: "/#ai" },
    { label: "Digital Growth & SEO", href: "/#services" },
    { label: "Creative Design & UI/UX", href: "/#services" },
    { label: "Business Systems & Cloud", href: "/#services" },
    { label: "Continuous SLA & Retainers", href: "/#services" },
  ],
  company: [
    { label: "Our Team", href: "/team" },
    { label: "Perspectives & Blog", href: "/blog" },
    { label: "Start a Project", href: "/#contact" },
    { label: "LinkedIn", href: siteConfig.social.linkedin, isExternal: true },
    { label: "Google Profile", href: siteConfig.social.googleBusinessProfile, isExternal: true },
    { label: siteConfig.contactEmail, href: `mailto:${siteConfig.contactEmail}`, isExternal: true },
  ],
  legal: [{ label: "Privacy Policy", href: "/privacy" }],
};
