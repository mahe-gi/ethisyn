import { describe, it, expect } from "vitest";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateWebPageSchema,
} from "@/lib/schema";

describe("JSON-LD Structured Data Generators", () => {
  it("generates valid Organization schema with PostalAddress and Hyderabad locality", () => {
    const org = generateOrganizationSchema();
    expect(org["@type"]).toBe("Organization");
    expect(org.name).toBe("Ethisyn");
    expect(org.url).toBe("https://ethisyn.in");
    expect(org.foundingDate).toBe("2025");
    expect(org.address).toEqual({
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    });
    expect(org.sameAs).toContain("https://www.linkedin.com/company/ethisyn");
  });

  it("generates valid WebSite schema", () => {
    const webSite = generateWebSiteSchema();
    expect(webSite["@type"]).toBe("WebSite");
    expect(webSite.name).toBe("Ethisyn");
    expect(webSite.url).toBe("https://ethisyn.in");
  });

  it("generates valid WebPage schema for canonical routes", () => {
    const webPage = generateWebPageSchema({
      title: "About | Ethisyn",
      description: "About Ethisyn",
      url: "https://ethisyn.in/about",
    });
    expect(webPage["@type"]).toBe("WebPage");
    expect(webPage.url).toBe("https://ethisyn.in/about");
  });
});
