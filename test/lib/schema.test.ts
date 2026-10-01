import { describe, it, expect } from "vitest";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateWebPageSchema,
} from "@/lib/schema";

describe("JSON-LD Schema Generators", () => {
  it("generates Organization schema with Hyderabad address and social profiles", () => {
    const org = generateOrganizationSchema();
    expect(org["@type"]).toBe("Organization");
    expect(org.name).toBe("Ethisyn");
    expect(org.address.addressLocality).toBe("Hyderabad");
    expect(org.sameAs.length).toBeGreaterThanOrEqual(2);
  });

  it("generates WebSite schema", () => {
    const site = generateWebSiteSchema();
    expect(site["@type"]).toBe("WebSite");
    expect(site.name).toBe("Ethisyn");
  });

  it("generates WebPage schema for /team", () => {
    const page = generateWebPageSchema({
      title: "Our Team",
      description: "Meet the team building Ethisyn",
      url: "https://ethisyn.in/team",
    });
    expect(page["@type"]).toBe("WebPage");
    expect(page.name).toBe("Our Team");
    expect(page.url).toBe("https://ethisyn.in/team");
  });
});
