export type ProductStatus =
  | "Undergoing"
  | "Active Architecture"
  | "In Production"
  | "Client Stealth"
  | "Live"
  | "In Development"
  | "Coming Soon";

export interface ProprietaryProduct {
  id: string;
  index: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  benefits: string[];
  status: ProductStatus;
  statusDetail?: string;
  deliverables?: string[];
  stack?: string[];
  scope?: string;
}

export const proprietaryProducts: ProprietaryProduct[] = [];
