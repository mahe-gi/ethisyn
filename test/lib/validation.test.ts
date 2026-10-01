import { describe, it, expect } from "vitest";
import { contactFormSchema, sanitizeInput } from "@/lib/validation";

describe("Validation and Sanitization", () => {
  it("validates a complete, correct form payload", () => {
    const validData = {
      name: "Alex Smith",
      email: "alex@company.com",
      phone: "+91 98765 43210",
      company: "Acme Studios",
      services: ["Websites & Software", "AI & Automation"],
      budget: "₹1,50,000 – ₹5,00,000",
      message: "We need a modern website and automated lead intake workflows.",
      consent: true,
      honeypot: "",
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("rejects when no services are selected", () => {
    const invalidData = {
      name: "Alex Smith",
      email: "alex@company.com",
      services: [],
      message: "Looking for consultation.",
      consent: true,
      honeypot: "",
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("detects bot honeypot injection", () => {
    const botData = {
      name: "SpamBot",
      email: "bot@spam.com",
      services: ["Websites & Software"],
      message: "Buy cheap backlinks now!",
      consent: true,
      honeypot: "http://spam.link",
    };

    const result = contactFormSchema.safeParse(botData);
    expect(result.success).toBe(false);
  });

  it("sanitizes HTML tags from inputs", () => {
    const dirty = "<script>alert('hack')</script>Hello World";
    const cleaned = sanitizeInput(dirty);
    expect(cleaned).not.toContain("<");
    expect(cleaned).not.toContain(">");
    expect(cleaned).toBe("scriptalert('hack')/scriptHello World");
  });
});
