export interface DomainItem {
  id: string;
  index: string;
  title: string;
  description: string;
  schematicType: "nodes" | "matrix" | "pipeline" | "vectors";
}

export const domainsData: DomainItem[] = [
  {
    id: "intelligent-systems",
    index: "01",
    title: "Intelligent Systems",
    description:
      "Useful intelligence embedded into real tools, decisions and workflows.",
    schematicType: "nodes",
  },
  {
    id: "digital-products",
    index: "02",
    title: "Digital Products",
    description:
      "Thoughtful web and mobile products designed around real human needs.",
    schematicType: "matrix",
  },
  {
    id: "cloud-and-automation",
    index: "03",
    title: "Cloud and Automation",
    description:
      "Reliable foundations connecting data, infrastructure and operations.",
    schematicType: "pipeline",
  },
  {
    id: "emerging-technology",
    index: "04",
    title: "Emerging Technology",
    description:
      "Careful exploration of technologies with the potential to create lasting value.",
    schematicType: "vectors",
  },
];
