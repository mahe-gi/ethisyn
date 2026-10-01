import { describe, it, expect } from "vitest";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateWebPageSchema,
  generateProfessionalServiceSchema,
  generateCoreServicesSchema,
  generateCareersPageSchema,
} from "@/lib/schema";

describe("JSON-LD Schema Generators", () => {
  it("generates Organization schema with Hyderabad address and social profiles", () => {
    const org = generateOrganizationSchema();
    expect(org["@type"]).toBe("Organization");
    expect(org.name).toBe("Ethisyn");
    expect(org.address.addressLocality).toBe("Hyderabad");
    expect(org.sameAs.length).toBeGreaterThanOrEqual(2);
    expect(org.slogan).toContain("Build. Automate. Grow. Create.");
  });

  it("generates WebSite schema", () => {
    const site = generateWebSiteSchema();
    expect(site["@type"]).toBe("WebSite");
    expect(site.name).toBe("Ethisyn");
  });

  it("generates ProfessionalService schema with 4 Core Pillars in OfferCatalog", () => {
    const service = generateProfessionalServiceSchema();
    expect(service["@type"]).toBe("ProfessionalService");
    expect(service.hasOfferCatalog).toBeDefined();
    expect(service.hasOfferCatalog.itemListElement).toHaveLength(4);
    expect(service.hasOfferCatalog.itemListElement[0].name).toContain("BUILD");
    expect(service.hasOfferCatalog.itemListElement[1].name).toContain("AUTOMATE");
    expect(service.hasOfferCatalog.itemListElement[2].name).toContain("GROW");
    expect(service.hasOfferCatalog.itemListElement[3].name).toContain("CREATE");
  });

  it("generates Core Services schema for BUILD, AUTOMATE, GROW, CREATE", () => {
    const services = generateCoreServicesSchema();
    expect(services).toHaveLength(4);
    const categories = services.map((s) => s.category);
    expect(categories).toEqual(["BUILD", "AUTOMATE", "GROW", "CREATE"]);
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

  it("generates Careers page schema for /careers", () => {
    const careersSchema = generateCareersPageSchema();
    expect(careersSchema["@type"]).toBe("WebPage");
    expect(careersSchema.url).toBe("https://ethisyn.in/careers");
    expect(careersSchema.mainEntity.itemListElement).toHaveLength(4);
  });
});
