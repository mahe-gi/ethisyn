import { describe, it, expect } from "vitest";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateWebPageSchema,
  generateProfessionalServiceSchema,
  generateCoreServicesSchema,
  generateCareersPageSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateLocalizedServiceSchema,
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

  it("generates FAQPage schema correctly", () => {
    const faq = generateFAQSchema([
      { question: "Where are you located in Hyderabad?", answer: "HITEC City corridor, Hyderabad." },
    ]);
    expect(faq["@type"]).toBe("FAQPage");
    expect(faq.mainEntity).toHaveLength(1);
    expect(faq.mainEntity[0].name).toBe("Where are you located in Hyderabad?");
  });

  it("generates BreadcrumbList schema correctly", () => {
    const breadcrumb = generateBreadcrumbSchema([
      { name: "Home", url: "https://ethisyn.in" },
      { name: "Software Development Hyderabad", url: "https://ethisyn.in/software-development-company-hyderabad" },
    ]);
    expect(breadcrumb["@type"]).toBe("BreadcrumbList");
    expect(breadcrumb.itemListElement).toHaveLength(2);
    expect(breadcrumb.itemListElement[1].position).toBe(2);
  });

  it("generates Localized Service Schema graph with LocalBusiness and Service", () => {
    const schema = generateLocalizedServiceSchema({
      pagePath: "/software-development-company-hyderabad",
      serviceName: "Custom Software Development Hyderabad",
      serviceType: "Software Engineering & Web Development",
      description: "Premier software development studio in Hyderabad.",
      serviceCategory: "BUILD",
      offers: [
        { name: "MVP Sprint", description: "2-4 week build", price: "150000" },
      ],
    });
    expect(schema["@graph"]).toBeDefined();
    expect(schema["@graph"]).toHaveLength(2);
    expect(schema["@graph"][0]["@type"]).toContain("LocalBusiness");
    const serviceNode = schema["@graph"][1] as {
      "@type": string;
      areaServed: { "@type": string; name: string };
    };
    expect(serviceNode["@type"]).toBe("Service");
    expect(serviceNode.areaServed.name).toBe("Hyderabad");
  });
});


