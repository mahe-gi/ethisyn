import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string({ required_error: "Please enter your name." })
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name cannot exceed 100 characters."),
  email: z
    .string({ required_error: "Please enter your work email." })
    .trim()
    .email("Please enter a valid work email address.")
    .max(150, "Email cannot exceed 150 characters."),
  company: z
    .string()
    .trim()
    .max(100, "Company name cannot exceed 100 characters.")
    .optional()
    .or(z.literal("")),
  message: z
    .string({ required_error: "Please share what you would like to discuss." })
    .trim()
    .min(10, "Please provide at least 10 characters describing what you would like to discuss.")
    .max(2500, "Message cannot exceed 2500 characters."),
  consent: z.boolean().refine((val) => val === true, {
    message: "Please acknowledge the communication consent.",
  }),
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
  return input
    .replace(/[<>]/g, "")
    .trim();
}
