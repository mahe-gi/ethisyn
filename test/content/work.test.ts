import { describe, it, expect } from "vitest";
import { caseStudies } from "@/content/work";

describe("Proof of Work & Case Studies Configuration", () => {
  it("contains all 3 agency-grade case studies with complete sections", () => {
    expect(caseStudies).toHaveLength(3);

    const [gowider, aiAgent, localSeo] = caseStudies;

    // 1. GoWider SaaS
    expect(gowider.id).toBe("gowider");
    expect(gowider.title).toContain("GoWider");
    expect(gowider.liveUrl).toBe("https://gowider.in");
    expect(gowider.results.length).toBe(4);
    expect(gowider.strategy.points.length).toBeGreaterThanOrEqual(3);

    // 2. AI Inbound Agent
    expect(aiAgent.id).toBe("ai-inbound-crm");
    expect(aiAgent.category).toBe("AI Automation Pipeline");
    expect(aiAgent.results.some((r) => r.metric.includes("18"))).toBe(true);

    // 3. Local SEO Engine
    expect(localSeo.id).toBe("local-seo-engine");
    expect(localSeo.category).toBe("Local Growth Campaign");
    expect(localSeo.results.some((r) => r.metric.includes("40+"))).toBe(true);
  });
});
