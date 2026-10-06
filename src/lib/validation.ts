import { z } from "zod";

export const availableServices = [
  "BUILD: Software & Digital Products",
  "AUTOMATE: AI & Business Automation",
  "GROW: Digital Marketing & Growth",
  "CREATE: Creative & Video Content",
  "Job Application & Reverse Recruiting Service",
  "Full Multi-Pillar Studio Engagement",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string({ required_error: "Please enter your name." })
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be less than 100 characters."),
  email: z
    .string({ required_error: "Please enter your email." })
    .trim()
    .email("Please provide a valid email address.")
    .max(150, "Email must be less than 150 characters."),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  services: z.array(z.string()).optional().default([]),
  budget: z.string().trim().optional().or(z.literal("")),
  message: z
    .string({ required_error: "Please tell us about your project." })
    .trim()
    .min(5, "Please share a few details about what you need (at least 5 characters).")
    .max(2500, "Message must be less than 2500 characters."),
  consent: z.boolean().optional().default(true),
  honeypot: z.string().max(0, "Bot detected.").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
  configured?: boolean;
}

export function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, "").trim();
}
