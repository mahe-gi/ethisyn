import { describe, it, expect } from "vitest";
import { proprietaryProducts } from "@/content/products";

describe("Proprietary Products Data", () => {
  it("contains all 3 in-house specialized products", () => {
    expect(proprietaryProducts).toHaveLength(3);
    const ids = proprietaryProducts.map((p) => p.id);
    expect(ids).toContain("career-ai");
    expect(ids).toContain("synapse-ops");
    expect(ids).toContain("pulse-engine");
  });

  it("verifies product statuses are valid", () => {
    proprietaryProducts.forEach((p) => {
      expect(["In Development", "Private Beta", "Live"]).toContain(p.status);
      expect(p.benefits.length).toBeGreaterThanOrEqual(3);
    });
  });
});
