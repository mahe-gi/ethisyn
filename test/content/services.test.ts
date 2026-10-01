import { describe, it, expect } from "vitest";
import { servicesData } from "@/content/services";

describe("Services Content", () => {
  it("contains all 4 core pillars: BUILD, AUTOMATE, GROW, CREATE", () => {
    expect(servicesData).toHaveLength(4);
    const pillars = servicesData.map((s) => s.pillar);
    expect(pillars).toEqual(["BUILD", "AUTOMATE", "GROW", "CREATE"]);

    const titles = servicesData.map((s) => s.title);
    expect(titles).toContain("Software & Digital Product Development");
    expect(titles).toContain("AI & Business Automation");
    expect(titles).toContain("Digital Marketing & Growth");
    expect(titles).toContain("Creative & Content");
  });

  it("ensures each service has comprehensive features, deliverables, metrics, and tools", () => {
    servicesData.forEach((s) => {
      expect(s.features.length).toBeGreaterThanOrEqual(8);
      expect(s.whatWeBuild.length).toBeGreaterThanOrEqual(4);
      expect(s.deliverables.length).toBeGreaterThanOrEqual(5);
      expect(s.metrics.length).toBeGreaterThanOrEqual(3);
      expect(s.tools.length).toBeGreaterThanOrEqual(4);
      expect(s.description.length).toBeGreaterThan(50);
      expect(s.whyItMatters.length).toBeGreaterThan(20);
    });
  });
});
