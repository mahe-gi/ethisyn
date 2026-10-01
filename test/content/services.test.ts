import { describe, it, expect } from "vitest";
import { servicesData } from "@/content/services";

describe("Services Content", () => {
  it("contains all 6 core services", () => {
    expect(servicesData).toHaveLength(6);
    const titles = servicesData.map((s) => s.title);
    expect(titles).toContain("Websites & Software");
    expect(titles).toContain("AI & Business Automation");
    expect(titles).toContain("Digital Growth & SEO");
    expect(titles).toContain("Creative, Design & Video");
    expect(titles).toContain("Business Systems & Cloud");
    expect(titles).toContain("Support & Fast Maintenance");
  });

  it("ensures each service has whatWeBuild items and tools", () => {
    servicesData.forEach((s) => {
      expect(s.whatWeBuild.length).toBeGreaterThanOrEqual(4);
      expect(s.tools.length).toBeGreaterThanOrEqual(3);
      expect(s.description.length).toBeGreaterThan(20);
    });
  });
});
