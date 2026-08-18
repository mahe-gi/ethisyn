import { describe, it, expect } from "vitest";
import { contactFormSchema, sanitizeInput } from "@/lib/validation";

describe("Contact Form Validation & Sanitization", () => {
  it("validates a correct submission payload with 'What would you like to discuss?' message", () => {
    const validData = {
      name: "Ada Lovelace",
      email: "ada@example.com",
      company: "Analytical Engine Co",
      message: "We would like to discuss engineering collaboration and product direction.",
      consent: true,
      honeypot: "",
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("fails when consent is false", () => {
    const data = {
      name: "Ada Lovelace",
      email: "ada@example.com",
      company: "",
      message: "We would like to discuss product systems.",
      consent: false,
      honeypot: "",
    };

    const result = contactFormSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.some((i) => i.path.includes("consent"))).toBe(true);
    }
  });

  it("fails when honeypot field is populated by bots", () => {
    const data = {
      name: "Spam Bot",
      email: "bot@spam.com",
      company: "",
      message: "Spam inquiry message exceeding 10 characters.",
      consent: true,
      honeypot: "http://spam-link.com",
    };

    const result = contactFormSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  it("fails when email is invalid", () => {
    const data = {
      name: "Ada Lovelace",
      email: "not-an-email",
      company: "",
      message: "Discussing software systems.",
      consent: true,
      honeypot: "",
    };

    const result = contactFormSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.some((i) => i.path.includes("email"))).toBe(true);
    }
  });

  it("fails when message is too short (< 10 chars)", () => {
    const data = {
      name: "Ada Lovelace",
      email: "ada@example.com",
      company: "",
      message: "Hello",
      consent: true,
      honeypot: "",
    };

    const result = contactFormSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  it("sanitizes HTML tags from inputs", () => {
    const dangerousInput = "<script>alert('xss')</script>Ada Lovelace";
    const cleaned = sanitizeInput(dangerousInput);
    expect(cleaned).toBe("scriptalert('xss')/scriptAda Lovelace");
    expect(cleaned).not.toContain("<");
    expect(cleaned).not.toContain(">");
  });
});
