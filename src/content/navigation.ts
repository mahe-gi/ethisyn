export interface NavItem {
  label: string;
  href: string;
  index?: string;
  isExternal?: boolean;
}

export const mainNavItems: NavItem[] = [
  { label: "Thesis", href: "/#thesis", index: "01" },
  { label: "Domains", href: "/#domains", index: "02" },
  { label: "Products", href: "/#products", index: "03" },
  { label: "Company", href: "/#company", index: "06" },
];

export const allSectionNavItems: NavItem[] = [
  { label: "Thesis", href: "/#thesis", index: "01" },
  { label: "Domains", href: "/#domains", index: "02" },
  { label: "Products", href: "/#products", index: "03" },
  { label: "Principles", href: "/#principles", index: "04" },
  { label: "Process", href: "/#process", index: "05" },
  { label: "Company", href: "/#company", index: "06" },
  { label: "Contact", href: "/#contact", index: "07" },
];

export const footerNavLinks: {
  navigation: NavItem[];
  company: NavItem[];
  legal: NavItem[];
} = {
  navigation: [
    { label: "01 / Thesis", href: "/#thesis" },
    { label: "02 / Domains", href: "/#domains" },
    { label: "03 / Products", href: "/#products" },
    { label: "04 / Principles", href: "/#principles" },
    { label: "05 / Process", href: "/#process" },
    { label: "06 / Company", href: "/#company" },
  ],
  company: [
    { label: "Start a Conversation", href: "/#contact" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/ethisyn",
      isExternal: true,
    },
    {
      label: "hello@ethisyn.in",
      href: "mailto:hello@ethisyn.in",
      isExternal: true,
    },
  ],
  legal: [{ label: "Privacy Policy", href: "/privacy" }],
};
