import { describe, it, expect } from "vitest";
import { productsData } from "@/content/products";

describe("Product Data Integrity", () => {
  it("contains honest exploratory product entries without fabricated statistics or specs", () => {
    expect(productsData.length).toBe(2);

    const [p1, p2] = productsData;
    expect(p1.name).toBe("Product 01");
    expect(p1.status).toBe("In development");
    expect(p1.category).toBe("Intelligent software");
    expect(p1.description).toBe("More details will be shared when the product is ready.");
    expect(p1.release).toBe("To be announced");

    expect(p2.name).toBe("Product 02");
    expect(p2.status).toBe("Exploration");
    expect(p2.category).toBe("Digital platform");
    expect(p2.description).toBe("More details will be shared as the concept develops.");
    expect(p2.release).toBe("To be announced");
  });
});
