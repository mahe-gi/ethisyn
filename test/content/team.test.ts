import { describe, it, expect } from "vitest";
import { teamContent } from "@/content/team";

describe("Team Content", () => {
  it("contains team members including founder Mahesh Babu and CMO", () => {
    expect(teamContent.members.length).toBeGreaterThanOrEqual(5);
    const founder = teamContent.members.find((m) => m.id === "mahesh-babu");
    expect(founder).toBeDefined();
    expect(founder?.name).toBe("Mahesh Babu");

    const cmo = teamContent.members.find((m) => m.id === "cmo-lead");
    expect(cmo).toBeDefined();
    expect(cmo?.role).toContain("Chief Marketing Officer");
    expect(cmo?.image).toBe("/team/cmo.png");
  });

  it("contains the 4 studio rules", () => {
    expect(teamContent.rules).toHaveLength(4);
  });
});
