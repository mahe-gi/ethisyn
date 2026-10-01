import { describe, it, expect } from "vitest";
import { teamContent } from "@/content/team";

describe("Team Content", () => {
  it("contains team members including founder Mahesh Babu", () => {
    expect(teamContent.members.length).toBeGreaterThanOrEqual(4);
    const founder = teamContent.members.find((m) => m.id === "mahesh-babu");
    expect(founder).toBeDefined();
    expect(founder?.name).toBe("Mahesh Babu");
  });

  it("contains the 4 studio rules", () => {
    expect(teamContent.rules).toHaveLength(4);
  });
});
