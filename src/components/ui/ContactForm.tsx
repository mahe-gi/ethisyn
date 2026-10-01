"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "./Button";
import {
  contactFormSchema,
  availableServices,
  ContactFormData,
  ContactSubmissionResult,
} from "@/lib/validation";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/content/site";

type FormState =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "error"; message: string; fieldErrors?: Record<string, string> }
  | { type: "offline"; message: string }
  | { type: "reconnected"; message: string }
  | { type: "timeout"; message: string };

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  services: ["Websites & Software"],
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
  const submitButtonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  // Monitor network connectivity
  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      setState((prev) => {
        if (prev.type === "offline") {
          return {
            type: "reconnected",
            message: "Your connection has been restored. You can submit now.",
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
        message: "Please correct the highlighted fields below before submitting.",
        fieldErrors: formattedErrors,
      });

      // Shift programmatic focus to error summary for screen readers
      setTimeout(() => {
        errorSummaryRef.current?.focus();
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
          message: result.message || "We were unable to process your request. Please try again or email us directly.",
          fieldErrors: result.fieldErrors,
        });
        errorSummaryRef.current?.focus();
        return;
      }

      // Success
      setState({
        type: "success",
        message: "Thank you for reaching out. We received your message and will reply within 24 hours.",
      });

      trackEvent("contact_form_submit", { success: true });
      setFormData(initialFormData);
    } catch (err: unknown) {
      clearTimeout(timeoutId);

      if (err instanceof Error && err.name === "AbortError") {
        setState({
          type: "timeout",
          message: "Request timed out. Please check your connection or reach out directly at " + siteConfig.contactEmail,
        });
      } else {
        setState({
          type: "error",
          message: "A network error occurred. Please email us directly at " + siteConfig.contactEmail,
        });
      }
      errorSummaryRef.current?.focus();
    }
  };

  return (
    <div className="w-full">
      {/* Accessible Notifications / Error Summary */}
      {state.type !== "idle" && state.type !== "submitting" && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role={state.type === "success" ? "status" : "alert"}
          aria-live="polite"
          className={`p-4 md:p-5 mb-8 border font-sans text-sm focus:outline-none transition-all ${
            state.type === "success"
              ? "bg-white/[0.04] border-brand-white text-brand-white"
              : state.type === "reconnected"
              ? "bg-white/[0.03] border-brand-border text-brand-white"
              : "bg-white/[0.02] border-brand-border-strong text-brand-white"
          }`}
        >
          <div className="flex items-start gap-3">
            <span
              className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                state.type === "success" ? "bg-brand-white" : "bg-brand-muted"
              }`}
              aria-hidden="true"
            />
            <div className="space-y-1">
              <p className="font-medium text-brand-white tracking-wide">
                {state.type === "success"
                  ? "Message Sent"
                  : state.type === "offline"
                  ? "Offline"
                  : state.type === "timeout"
                  ? "Connection Timeout"
                  : "We couldn’t send your message"}
              </p>
              <p className="text-brand-muted text-xs leading-relaxed">{state.message}</p>
            </div>
          </div>
        </div>
      )}

      {/* Success State View */}
      {state.type === "success" ? (
        <div className="p-8 border border-brand-border bg-white/[0.01] space-y-6">
          <div className="space-y-2">
            <h4 className="font-sans text-xl font-medium text-brand-white">
              We have received your project details.
            </h4>
            <p className="font-sans text-sm text-brand-muted font-light leading-relaxed">
              One of our architects will review your requirements and respond within 24 hours with an honest estimate and next steps.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={() => setState({ type: "idle" })}
          >
            Send another message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Honeypot field (hidden from real users, traps bots) */}
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
            <label className="block font-mono text-xs uppercase tracking-wider text-brand-faint">
              What do you need help with? <span className="text-brand-white">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {availableServices.map((service) => {
                const isSelected = formData.services.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceToggle(service)}
                    className={`flex items-center gap-3 p-3 text-left border text-xs font-sans transition-all duration-150 ${
                      isSelected
                        ? "bg-white/[0.08] border-brand-white text-brand-white font-medium"
                        : "bg-white/[0.01] border-brand-border text-brand-muted hover:border-brand-border-strong hover:text-brand-white"
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 border flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected
                          ? "border-brand-white bg-brand-white text-brand-black"
                          : "border-brand-border bg-transparent"
                      }`}
                      aria-hidden="true"
                    >
                      {isSelected && (
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span>{service}</span>
                  </button>
                );
              })}
            </div>
            {fieldErrors.services && (
              <p id="services-error" className="font-mono text-xs text-brand-white/90">
                {fieldErrors.services}
              </p>
            )}
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <label htmlFor="form-name" className="block font-mono text-xs uppercase tracking-wider text-brand-faint">
                Your Name <span className="text-brand-white">*</span>
              </label>
              <input
                id="form-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleFieldChange}
                aria-invalid={!!fieldErrors.name}
                aria-describedby={fieldErrors.name ? "name-error" : undefined}
                placeholder="Jane Doe"
                className={`w-full bg-white/[0.02] border px-4 py-3 text-sm text-brand-white placeholder-brand-muted/30 transition-colors focus:bg-white/[0.05] focus:border-brand-white focus:outline-none ${
                  fieldErrors.name ? "border-brand-white" : "border-brand-border hover:border-brand-border-strong"
                }`}
              />
              {fieldErrors.name && (
                <p id="name-error" className="font-mono text-xs text-brand-white/90">
                  {fieldErrors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="form-email" className="block font-mono text-xs uppercase tracking-wider text-brand-faint">
                Work Email <span className="text-brand-white">*</span>
              </label>
              <input
                id="form-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleFieldChange}
                aria-invalid={!!fieldErrors.email}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
                placeholder="jane@company.com"
                className={`w-full bg-white/[0.02] border px-4 py-3 text-sm text-brand-white placeholder-brand-muted/30 transition-colors focus:bg-white/[0.05] focus:border-brand-white focus:outline-none ${
                  fieldErrors.email ? "border-brand-white" : "border-brand-border hover:border-brand-border-strong"
                }`}
              />
              {fieldErrors.email && (
                <p id="email-error" className="font-mono text-xs text-brand-white/90">
                  {fieldErrors.email}
                </p>
              )}
            </div>
          </div>

          {/* Phone & Company Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="form-phone" className="block font-mono text-xs uppercase tracking-wider text-brand-faint">
                WhatsApp or Phone <span className="text-brand-muted/60 lowercase">(optional)</span>
              </label>
              <input
                id="form-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleFieldChange}
                placeholder="+91 98765 43210"
                className="w-full bg-white/[0.02] border border-brand-border hover:border-brand-border-strong px-4 py-3 text-sm text-brand-white placeholder-brand-muted/30 transition-colors focus:bg-white/[0.05] focus:border-brand-white focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="form-company" className="block font-mono text-xs uppercase tracking-wider text-brand-faint">
                Company or Project Name <span className="text-brand-muted/60 lowercase">(optional)</span>
              </label>
              <input
                id="form-company"
                name="company"
                type="text"
                autoComplete="organization"
                value={formData.company}
                onChange={handleFieldChange}
                placeholder="Acme Corp or My Startup"
                className="w-full bg-white/[0.02] border border-brand-border hover:border-brand-border-strong px-4 py-3 text-sm text-brand-white placeholder-brand-muted/30 transition-colors focus:bg-white/[0.05] focus:border-brand-white focus:outline-none"
              />
            </div>
          </div>

          {/* Budget Estimate */}
          <div className="space-y-2">
            <label htmlFor="form-budget" className="block font-mono text-xs uppercase tracking-wider text-brand-faint">
              Estimated Budget <span className="text-brand-muted/60 lowercase">(optional)</span>
            </label>
            <select
              id="form-budget"
              name="budget"
              value={formData.budget}
              onChange={handleFieldChange}
              className="w-full bg-[#0A0A0A] border border-brand-border hover:border-brand-border-strong px-4 py-3 text-sm text-brand-white transition-colors focus:border-brand-white focus:outline-none"
            >
              <option value="">Select budget range...</option>
              <option value="Under ₹50,000 / $600">Under ₹50,000 / $600 (Small fix or mini site)</option>
              <option value="₹50,000 – ₹1,50,000 / $600 – $1,800">₹50,000 – ₹1,50,000 / $600 – $1,800 (Full website or MVP)</option>
              <option value="₹1,50,000 – ₹5,00,000 / $1,800 – $6,000">₹1,50,000 – ₹5,00,000 / $1,800 – $6,000 (Complete app / AI automation)</option>
              <option value="₹5,00,000+ / $6,000+">₹5,00,000+ / $6,000+ (Enterprise product or custom system)</option>
              <option value="Undecided">Not sure yet / Need consultation</option>
            </select>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <label htmlFor="form-message" className="block font-mono text-xs uppercase tracking-wider text-brand-faint">
              What are you looking to build? <span className="text-brand-white">*</span>
            </label>
            <textarea
              id="form-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleFieldChange}
              aria-invalid={!!fieldErrors.message}
              aria-describedby={fieldErrors.message ? "message-error" : undefined}
              placeholder="Tell us what you want to achieve, any deadline you have in mind, or tools you currently use..."
              className={`w-full bg-white/[0.02] border px-4 py-3 text-sm text-brand-white placeholder-brand-muted/30 transition-colors focus:bg-white/[0.05] focus:border-brand-white focus:outline-none resize-y ${
                fieldErrors.message ? "border-brand-white" : "border-brand-border hover:border-brand-border-strong"
              }`}
            />
            {fieldErrors.message && (
              <p id="message-error" className="font-mono text-xs text-brand-white/90">
                {fieldErrors.message}
              </p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="space-y-2 pt-1">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                id="form-consent"
                name="consent"
                type="checkbox"
                required
                checked={formData.consent}
                onChange={handleFieldChange}
                aria-invalid={!!fieldErrors.consent}
                aria-describedby={fieldErrors.consent ? "consent-error" : undefined}
                className="mt-1 w-4 h-4 rounded-none border-brand-border bg-white/[0.02] accent-brand-white cursor-pointer"
              />
              <span className="font-sans text-xs text-brand-muted leading-relaxed font-light">
                I agree to be contacted by Ethisyn regarding this inquiry. We respect your privacy and never spam or share your contact info.
              </span>
            </label>
            {fieldErrors.consent && (
              <p id="consent-error" className="font-mono text-xs text-brand-white/90 pl-7">
                {fieldErrors.consent}
              </p>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <Button
              ref={submitButtonRef}
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
