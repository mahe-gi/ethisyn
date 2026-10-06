import { describe, it, expect } from "vitest";
import { proprietaryProducts } from "@/content/products";

describe("Studio Proprietary Products Configuration", () => {
  it("contains the active proprietary products: The Rental Circle and GoWider", () => {
    expect(proprietaryProducts).toHaveLength(2);

    const rentalCircle = proprietaryProducts.find((p) => p.id === "rental-circle");
    expect(rentalCircle).toBeDefined();
    expect(rentalCircle?.name).toBe("The Rental Circle");
    expect(rentalCircle?.url).toBe("https://therentalcircle.in/");
    expect(rentalCircle?.status).toBe("Live");
    expect(rentalCircle?.features.length).toBeGreaterThanOrEqual(4);

    const gowider = proprietaryProducts.find((p) => p.id === "gowider");
    expect(gowider).toBeDefined();
    expect(gowider?.name).toBe("GoWider");
    expect(gowider?.badge).toContain("PORTFOLIO");
    expect(gowider?.url).toBe("https://gowider.in");
    expect(gowider?.status).toBe("Live");
    expect(gowider?.features.length).toBeGreaterThanOrEqual(4);
  });
});
