export type ProductStatus = "In development" | "Exploration" | "Coming soon" | "To be announced";

export interface ProductItem {
  id: string;
  index: string;
  name: string;
  category: string;
  status: ProductStatus;
  release: string;
  description: string;
}

export const productsData: ProductItem[] = [
  {
    id: "product-01",
    index: "01",
    name: "Product 01",
    category: "Intelligent software",
    status: "In development",
    release: "To be announced",
    description: "More details will be shared when the product is ready.",
  },
  {
    id: "product-02",
    index: "02",
    name: "Product 02",
    category: "Digital platform",
    status: "Exploration",
    release: "To be announced",
    description: "More details will be shared as the concept develops.",
  },
];
