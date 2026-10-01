"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Select } from "./Select";
import { Checkbox } from "./Checkbox";
import { Alert } from "./Alert";
import {
  contactFormSchema,
  availableServices,
  ContactFormData,
  ContactSubmissionResult,
} from "@/lib/validation";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/content/site";
import { User, Mail, Phone, Building, Check } from "lucide-react";

type FormState =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "error"; message: string; fieldErrors?: Record<string, string> }
  | { type: "offline"; message: string }
  | { type: "reconnected"; message: string }
  | { type: "timeout"; message: string };

const budgetOptions = [
  { value: "Under ₹50,000 / $600", label: "Under ₹50,000 / $600 (Small fix or mini site)" },
  { value: "₹50,000 – ₹1,50,000 / $600 – $1,800", label: "₹50,000 – ₹1,50,000 / $600 – $1,800 (Full website or MVP)" },
  { value: "₹1,50,000 – ₹5,00,000 / $1,800 – $6,000", label: "₹1,50,000 – ₹5,00,000 / $1,800 – $6,000 (Complete app / AI automation)" },
  { value: "₹5,00,000+ / $6,000+", label: "₹5,00,000+ / $6,000+ (Enterprise product or custom system)" },
  { value: "Undecided", label: "Not sure yet / Need consultation" },
];

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  services: ["Web & Software Engineering"],
  budget: "",
  message: "",
  consent: false,
  honeypot: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [state, setState] = useState<FormState>({ type: "idle" });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const errorSummaryRef = useRef<HTMLDivElement>(null);

  // Monitor network connectivity
  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      setState((prev) => {
        if (prev.type === "offline") {
          return {
            type: "reconnected",
            message: "Your connection has been restored. You can submit your inquiry now.",
          };
        }
        return prev;
      });
    };

    const handleOffline = () => {
      setIsOnline(false);
      setState({
        type: "offline",
        message: "You appear to be offline. Please check your internet connection.",
      });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (!hasInteracted) {
      setHasInteracted(true);
      trackEvent("contact_form_start");
    }

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear field-specific error as user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleServiceToggle = (service: string) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      trackEvent("contact_form_start");
    }

    setFormData((prev) => {
      const exists = prev.services.includes(service);
      const nextServices = exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: nextServices };
    });

    if (fieldErrors.services) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next.services;
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isOnline) {
      setState({
        type: "offline",
        message: "Unable to submit while offline. Please connect to the internet.",
      });
      return;
    }

    // Validate client-side with Zod
    const validationResult = contactFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const formattedErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        const fieldName = err.path[0] as string;
        if (!formattedErrors[fieldName]) {
          formattedErrors[fieldName] = err.message;
        }
      });

      setFieldErrors(formattedErrors);
      setState({
        type: "error",
        message: "We couldn’t send your message. Please correct the highlighted fields below.",
        fieldErrors: formattedErrors,
      });

      setTimeout(() => {
        if (typeof errorSummaryRef.current?.scrollIntoView === "function") {
          errorSummaryRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 50);
      return;
    }

    setFieldErrors({});
    setState({ type: "submitting" });

    // 10-second timeout guard
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validationResult.data),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const result: ContactSubmissionResult = await response.json();

      if (!response.ok || !result.success) {
        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors);
        }
        setState({
          type: "error",
          message:
            result.message ||
            `We were unable to process your request. Please email us directly at ${siteConfig.contactEmail}.`,
          fieldErrors: result.fieldErrors,
        });
        return;
      }

      // Success
      setState({
        type: "success",
        message:
          "Thank you for reaching out! We received your project details and will respond within 4 business hours with an honest estimate and roadmap.",
      });

      trackEvent("contact_form_submit", { success: true });
      setFormData(initialFormData);
    } catch (err: unknown) {
      clearTimeout(timeoutId);

      if (err instanceof Error && err.name === "AbortError") {
        setState({
          type: "timeout",
          message: `Request timed out. Please check your connection or reach out directly at ${siteConfig.contactEmail}.`,
        });
      } else {
        setState({
          type: "error",
          message: `A network error occurred. Please email us directly at ${siteConfig.contactEmail}.`,
        });
      }
    }
  };

  return (
    <div className="w-full">
      {/* Accessible Notifications / Error Summary */}
      {state.type !== "idle" && state.type !== "submitting" && (
        <div ref={errorSummaryRef} className="mb-8">
          <Alert
            variant={
              state.type === "success"
                ? "success"
                : state.type === "reconnected"
                ? "info"
                : state.type === "offline"
                ? "warning"
                : "error"
            }
            title={
              state.type === "success"
                ? "Inquiry Received"
                : state.type === "offline"
                ? "You Are Offline"
                : state.type === "timeout"
                ? "Connection Timeout"
                : "Please Review Form"
            }
          >
            {state.message}
          </Alert>
        </div>
      )}

      {/* Success State View */}
      {state.type === "success" ? (
        <div className="p-8 border border-white/[0.08] rounded-2xl bg-[#080808] space-y-6 text-center sm:text-left animate-in fade-in duration-300">
          <div className="space-y-2">
            <h4 className="font-sans text-2xl font-medium text-white">
              We have received your project scope.
            </h4>
            <p className="font-sans text-sm text-[#A1A1AA] font-light leading-relaxed max-w-xl">
              One of our founding engineers in Hyderabad will review your requirements and respond within 4 business hours.
            </p>
          </div>
          <div className="pt-2">
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={() => setState({ type: "idle" })}
            >
              Submit another inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Honeypot field (hidden from real users, traps spam bots) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="form-honeypot">Leave this blank</label>
            <input
              id="form-honeypot"
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleFieldChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Service Multi-Select Checkboxes */}
          <div className="space-y-3">
            <label className="block font-mono text-xs uppercase tracking-wider text-brand-faint select-none">
              Services Needed <span className="text-emerald-400">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {availableServices.map((service) => {
                const isSelected = formData.services.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceToggle(service)}
                    className={`flex items-center gap-3 p-3.5 text-left border rounded-xl text-xs font-sans transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? "bg-white/[0.08] border-white text-white font-medium shadow-sm"
                        : "bg-[#080808] border-white/[0.06] text-[#A1A1AA] hover:border-white/[0.15] hover:text-white"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected
                          ? "border-white bg-white text-black"
                          : "border-white/[0.12] bg-transparent"
                      }`}
                      aria-hidden="true"
                    >
                      {isSelected && <Check className="w-3 h-3 text-black" strokeWidth={3} />}
                    </span>
                    <span>{service}</span>
                  </button>
                );
              })}
            </div>
            {fieldErrors.services && (
              <p className="font-mono text-xs text-rose-400" role="alert">
                {fieldErrors.services}
              </p>
            )}
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <Input
              id="form-name"
              name="name"
              label="Your Name"
              isRequired
              autoComplete="name"
              value={formData.name}
              onChange={handleFieldChange}
              error={fieldErrors.name}
              placeholder="Jane Doe"
              leftIcon={<User className="w-4 h-4" />}
            />

            <Input
              id="form-email"
              name="email"
              label="Work Email"
              type="email"
              isRequired
              autoComplete="email"
              value={formData.email}
              onChange={handleFieldChange}
              error={fieldErrors.email}
              placeholder="jane@company.com"
              leftIcon={<Mail className="w-4 h-4" />}
            />
          </div>

          {/* Phone & Company Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              id="form-phone"
              name="phone"
              label="WhatsApp or Phone (Optional)"
              type="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleFieldChange}
              placeholder="+91 98765 43210"
              leftIcon={<Phone className="w-4 h-4" />}
            />

            <Input
              id="form-company"
              name="company"
              label="Company or Startup (Optional)"
              autoComplete="organization"
              value={formData.company}
              onChange={handleFieldChange}
              placeholder="Acme Corp"
              leftIcon={<Building className="w-4 h-4" />}
            />
          </div>

          {/* Budget Estimate */}
          <Select
            id="form-budget"
            name="budget"
            label="Estimated Budget (Optional)"
            placeholder="Select budget range..."
            options={budgetOptions}
            value={formData.budget}
            onChange={handleFieldChange}
          />

          {/* Project Details */}
          <Textarea
            id="form-message"
            name="message"
            label="What are you looking to build?"
            isRequired
            rows={4}
            value={formData.message}
            onChange={handleFieldChange}
            error={fieldErrors.message}
            placeholder="Describe what you want to build, any technical preferences, target timeline, or existing systems you want to automate..."
          />

          {/* Consent Checkbox */}
          <div className="pt-1">
            <Checkbox
              id="form-consent"
              name="consent"
              checked={formData.consent}
              onChange={handleFieldChange}
              error={fieldErrors.consent}
              label="I agree to be contacted by Ethisyn regarding this project inquiry. We respect your privacy and never spam or share your contact information."
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={state.type === "submitting"}
              disabled={state.type === "submitting"}
              showArrow
            >
              {state.type === "submitting" ? "Sending inquiry..." : "Send Project Inquiry"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
