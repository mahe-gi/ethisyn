"use client";

import React, { useState, useEffect, useRef } from "react";
import { contactFormSchema, ContactFormData, ContactSubmissionResult } from "@/lib/validation";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { Button } from "./Button";
import { AlertCircle, CheckCircle2, WifiOff, Wifi } from "lucide-react";

type FormState =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "error"; message: string; fieldErrors?: Record<string, string> }
  | { type: "offline"; message: string }
  | { type: "reconnected"; message: string }
  | { type: "timeout"; message: string };

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
    consent: false,
    honeypot: "",
  });

  const [formState, setFormState] = useState<FormState>({ type: "idle" });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  // Monitor offline / online status
  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      // When back online after offline state, prompt the user manually without auto-submitting
      setFormState((prev) => {
        if (prev.type === "offline") {
          return {
            type: "reconnected",
            message: "You’re back online. Review your message and try again when you’re ready.",
          };
        }
        return prev;
      });
    };

    const handleOffline = () => {
      setIsOnline(false);
      setFormState({
        type: "offline",
        message: "You appear to be offline. Reconnect and try again; your message has been preserved.",
      });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("contact_form_start");

    // Check offline status first
    if (!navigator.onLine) {
      setFormState({
        type: "offline",
        message:
          "You appear to be offline. Reconnect and try again; your message has been preserved.",
      });
      return;
    }

    // Client-side Zod validation
    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      for (const issue of validationResult.error.issues) {
        const path = issue.path[0] as string;
        if (!errors[path]) {
          errors[path] = issue.message;
        }
      }
      setFieldErrors(errors);
      setFormState({
        type: "error",
        message: "We couldn’t send your message. Your information is still here—please try again.",
        fieldErrors: errors,
      });

      setTimeout(() => {
        errorSummaryRef.current?.focus();
      }, 50);
      return;
    }

    setFormState({ type: "submitting" });
    setFieldErrors({});

    // 10s timeout controller
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validationResult.data),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const result: ContactSubmissionResult = await response.json().catch(() => ({
        success: false,
        message: "We couldn’t send your message. Your information is still here—please try again.",
      }));

      if (response.ok && result.success) {
        setFormState({
          type: "success",
          message:
            "Thank you. Your message has been received. We’ll get back to you as soon as possible.",
        });
        trackEvent("contact_form_submit", { success: true });
      } else {
        setFormState({
          type: "error",
          message:
            result.message ||
            "We couldn’t send your message. Your information is still here—please try again.",
          fieldErrors: result.fieldErrors,
        });
        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors);
        }
      }
    } catch (err: unknown) {
      clearTimeout(timeoutId);
      if (err instanceof Error && err.name === "AbortError") {
        setFormState({
          type: "timeout",
          message:
            "This is taking longer than expected. Your message has not been lost.",
        });
      } else if (!navigator.onLine) {
        setFormState({
          type: "offline",
          message:
            "You appear to be offline. Reconnect and try again; your message has been preserved.",
        });
      } else {
        setFormState({
          type: "error",
          message:
            "We couldn’t send your message. Your information is still here—please try again.",
        });
      }
    }
  };

  if (formState.type === "success") {
    return (
      <div
        className="p-8 md:p-12 border border-brand-border bg-white/[0.02] text-left flex flex-col items-start space-y-6"
        role="status"
        aria-live="polite"
      >
        <div className="w-10 h-10 border border-brand-border-strong flex items-center justify-center bg-white/[0.04]">
          <CheckCircle2 className="w-5 h-5 text-brand-white" aria-hidden="true" />
        </div>
        <div className="space-y-2 max-w-lg">
          <h3 className="font-sans text-xl md:text-2xl font-medium text-brand-white">
            Message Received
          </h3>
          <p className="font-sans text-brand-muted text-base leading-relaxed">
            {formState.message}
          </p>
        </div>
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setFormData({
                name: "",
                email: "",
                company: "",
                message: "",
                consent: false,
                honeypot: "",
              });
              setFormState({ type: "idle" });
            }}
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 max-w-2xl text-left"
      aria-labelledby="contact-form-heading"
    >
      {/* Offline Banner */}
      {!isOnline && (
        <div
          className="p-4 border border-brand-border bg-white/[0.03] flex items-center gap-3 text-sm text-brand-muted"
          role="alert"
        >
          <WifiOff className="w-4 h-4 text-brand-white flex-shrink-0" aria-hidden="true" />
          <span>You appear to be offline. Reconnect and try again; your message has been preserved.</span>
        </div>
      )}

      {/* Reconnected Banner (Requires Manual Action) */}
      {isOnline && formState.type === "reconnected" && (
        <div
          className="p-4 border border-brand-border-strong bg-white/[0.04] flex items-center gap-3 text-sm text-brand-white"
          role="status"
        >
          <Wifi className="w-4 h-4 text-brand-white flex-shrink-0" aria-hidden="true" />
          <span>{formState.message}</span>
        </div>
      )}

      {/* Accessible Error / Timeout Summary */}
      {(formState.type === "error" ||
        formState.type === "timeout" ||
        formState.type === "offline") && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          className="p-4 border border-brand-border-strong bg-white/[0.04] flex items-start gap-3 text-sm text-brand-offwhite focus:outline-none"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="w-4 h-4 text-brand-white flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <p className="font-medium text-brand-white">{formState.message}</p>
            <p className="text-xs text-brand-muted">
              Direct email:{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-brand-white underline underline-offset-2 hover:opacity-80"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Honeypot hidden input for spam bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="form-honeypot">Leave this blank</label>
        <input
          id="form-honeypot"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Grid: Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="contact-name"
            className="block font-mono text-xs uppercase tracking-wider text-brand-muted"
          >
            Name <span className="text-brand-white">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            disabled={formState.type === "submitting"}
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            className={`w-full bg-white/[0.03] border px-4 py-3 text-sm text-brand-white placeholder-brand-muted/40 transition-colors focus:bg-white/[0.06] focus:border-brand-border-strong focus:outline-none ${
              fieldErrors.name ? "border-brand-white" : "border-brand-border"
            }`}
            placeholder="Ada Lovelace"
          />
          {fieldErrors.name && (
            <p id="name-error" className="font-mono text-xs text-brand-offwhite">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="block font-mono text-xs uppercase tracking-wider text-brand-muted"
          >
            Work Email <span className="text-brand-white">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            disabled={formState.type === "submitting"}
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className={`w-full bg-white/[0.03] border px-4 py-3 text-sm text-brand-white placeholder-brand-muted/40 transition-colors focus:bg-white/[0.06] focus:border-brand-border-strong focus:outline-none ${
              fieldErrors.email ? "border-brand-white" : "border-brand-border"
            }`}
            placeholder="ada@example.com"
          />
          {fieldErrors.email && (
            <p id="email-error" className="font-mono text-xs text-brand-offwhite">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      {/* Company or Organization (Optional) */}
      <div className="space-y-2">
        <label
          htmlFor="contact-company"
          className="block font-mono text-xs uppercase tracking-wider text-brand-muted"
        >
          Company or organization <span className="text-brand-faint font-normal">(Optional)</span>
        </label>
        <input
          id="contact-company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          autoComplete="organization"
          disabled={formState.type === "submitting"}
          className="w-full bg-white/[0.03] border border-brand-border px-4 py-3 text-sm text-brand-white placeholder-brand-muted/40 transition-colors focus:bg-white/[0.06] focus:border-brand-border-strong focus:outline-none"
          placeholder="Organization name"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="block font-mono text-xs uppercase tracking-wider text-brand-muted"
        >
          What would you like to discuss? <span className="text-brand-white">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={formState.type === "submitting"}
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className={`w-full bg-white/[0.03] border px-4 py-3 text-sm text-brand-white placeholder-brand-muted/40 transition-colors focus:bg-white/[0.06] focus:border-brand-border-strong focus:outline-none resize-y min-h-[120px] ${
            fieldErrors.message ? "border-brand-white" : "border-brand-border"
          }`}
          placeholder="Share your topic, inquiry or discussion points..."
        />
        {fieldErrors.message && (
          <p id="message-error" className="font-mono text-xs text-brand-offwhite">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="space-y-1">
        <div className="flex items-start gap-3">
          <input
            id="contact-consent"
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            disabled={formState.type === "submitting"}
            aria-invalid={!!fieldErrors.consent}
            className="mt-1 w-4 h-4 rounded-none bg-white/[0.05] border border-brand-border checked:bg-brand-white focus:ring-0 focus:outline-none accent-white cursor-pointer"
          />
          <label htmlFor="contact-consent" className="text-xs text-brand-muted leading-relaxed cursor-pointer select-none">
            I consent to Ethisyn processing these details to respond to this inquiry.
          </label>
        </div>
        {fieldErrors.consent && (
          <p className="font-mono text-xs text-brand-offwhite pl-7">
            {fieldErrors.consent}
          </p>
        )}
      </div>

      {/* Submit Button & Status */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={formState.type === "submitting"}
          disabled={formState.type === "submitting"}
          showArrow={formState.type !== "submitting"}
        >
          {formState.type === "submitting"
            ? "Sending your message…"
            : formState.type === "timeout" || formState.type === "error" || formState.type === "offline" || formState.type === "reconnected"
            ? "Try again"
            : "Start a conversation"}
        </Button>

        <p className="font-mono text-xs text-brand-faint">
          Direct email:{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-brand-muted hover:text-brand-white underline underline-offset-2"
          >
            {siteConfig.contactEmail}
          </a>
        </p>
      </div>
    </form>
  );
}
