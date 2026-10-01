import { describe, it, expect } from "vitest";
import { proprietaryProducts } from "@/content/products";

describe("Studio Products / Projects Configuration", () => {
  it("has no active project cards to ensure a clean services and team focus", () => {
    expect(proprietaryProducts).toHaveLength(0);
  });
});
