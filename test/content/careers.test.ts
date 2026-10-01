import { describe, it, expect } from "vitest";
import { careersData, PillarType } from "@/content/careers";
import { generateJobPostingSchemas, generateCareersPageSchema } from "@/lib/schema";

describe("Careers Content & Data Integrity", () => {
  it("defines the 4 required pillar roles", () => {
    const pillars: PillarType[] = ["BUILD", "AUTOMATE", "GROW", "CREATE"];
    const activePillars = careersData.roles.map((r) => r.pillar);

    pillars.forEach((p) => {
      expect(activePillars).toContain(p);
    });

    expect(careersData.roles.length).toBe(4);
  });

  it("includes Senior Full-Stack Engineer role under BUILD pillar", () => {
    const role = careersData.roles.find((r) => r.pillar === "BUILD");
    expect(role).toBeDefined();
    expect(role?.title).toBe("Senior Full-Stack Engineer");
    expect(role?.stack).toContain("Next.js 15 (App Router)");
    expect(role?.stack).toContain("TypeScript");
    expect(role?.responsibilities.length).toBeGreaterThanOrEqual(4);
    expect(role?.requirements.length).toBeGreaterThanOrEqual(4);
    expect(role?.location).toContain("Hyderabad");
  });

  it("includes AI & Automation Systems Architect role under AUTOMATE pillar", () => {
    const role = careersData.roles.find((r) => r.pillar === "AUTOMATE");
    expect(role).toBeDefined();
    expect(role?.title).toBe("AI & Automation Systems Architect");
    expect(role?.stack).toContain("LangGraph / LangChain");
    expect(role?.stack).toContain("Python 3.12+");
    expect(role?.responsibilities.length).toBeGreaterThanOrEqual(4);
    expect(role?.location).toContain("Hyderabad");
  });

  it("includes Growth & Performance Marketing Specialist role under GROW pillar", () => {
    const role = careersData.roles.find((r) => r.pillar === "GROW");
    expect(role).toBeDefined();
    expect(role?.title).toBe("Growth & Performance Marketing Specialist");
    expect(role?.stack.some((s) => s.toLowerCase().includes("seo"))).toBe(true);
    expect(role?.stack.some((s) => s.toLowerCase().includes("meta") || s.toLowerCase().includes("google"))).toBe(true);
    expect(role?.location).toContain("Hyderabad");
  });

  it("includes Creative Director & Video Content Producer role under CREATE pillar", () => {
    const role = careersData.roles.find((r) => r.pillar === "CREATE");
    expect(role).toBeDefined();
    expect(role?.title).toBe("Creative Director & Video Content Producer");
    expect(role?.stack).toContain("Adobe Premiere Pro");
    expect(role?.stack).toContain("DaVinci Resolve (Color Grading)");
    expect(role?.location).toContain("Hyderabad");
  });

  it("enforces valid application emails and 90-day deliverables for all roles", () => {
    careersData.roles.forEach((role) => {
      expect(role.applyEmail).toBe("careers@ethisyn.in");
      expect(role.deliverables90Days.length).toBe(3);
      expect(role.salaryRange).toBeDefined();
      expect(role.shortSummary.length).toBeGreaterThan(20);
      expect(role.overview.length).toBeGreaterThan(50);
    });
  });

  it("defines comprehensive perks including pay, ownership, and equipment", () => {
    expect(careersData.perks.length).toBeGreaterThanOrEqual(5);

    const perkTitles = careersData.perks.map((p) => p.title.toLowerCase());
    expect(perkTitles.some((t) => t.includes("compensation") || t.includes("pay"))).toBe(true);
    expect(perkTitles.some((t) => t.includes("hardware") || t.includes("rig"))).toBe(true);
    expect(perkTitles.some((t) => t.includes("bureaucracy") || t.includes("agency"))).toBe(true);
    expect(perkTitles.some((t) => t.includes("ai") || t.includes("tooling"))).toBe(true);
  });

  it("defines a transparent multi-step hiring process", () => {
    expect(careersData.hiringProcess.length).toBe(4);
    careersData.hiringProcess.forEach((step) => {
      expect(step.step).toBeDefined();
      expect(step.title).toBeDefined();
      expect(step.timeframe).toBeDefined();
      expect(step.output).toBeDefined();
    });
  });

  it("has complete direct application guide with contact emails", () => {
    expect(careersData.applicationGuide.primaryEmail).toBe("careers@ethisyn.in");
    expect(careersData.applicationGuide.backupEmail).toBe("hello@ethisyn.in");
    expect(careersData.applicationGuide.instructions.length).toBeGreaterThanOrEqual(3);
  });

  it("generates valid JobPosting and CareersPage schemas", () => {
    const jobSchemas = generateJobPostingSchemas();
    expect(jobSchemas.length).toBe(4);
    jobSchemas.forEach((schema) => {
      expect(schema["@type"]).toBe("JobPosting");
      expect(schema.title).toBeDefined();
      expect(schema.jobLocation.address.addressLocality).toBe("Hyderabad");
      expect(schema.directApply).toBe(true);
    });

    const pageSchema = generateCareersPageSchema();
    expect(pageSchema["@type"]).toBe("WebPage");
    expect(pageSchema.name).toContain("Careers");
  });
});
