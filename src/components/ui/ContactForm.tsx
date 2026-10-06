"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Alert } from "./Alert";
import {
  contactFormSchema,
  ContactFormData,
} from "@/lib/validation";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/content/site";
import { Mail, Phone, Check, Copy, MessageSquare } from "lucide-react";

type FormState =
  | { type: "idle" }
  | { type: "submitting" }
  | {
      type: "success";
      message: string;
      mailtoUrl?: string;
      whatsappUrl?: string;
      summaryText?: string;
    }
  | { type: "error"; message: string; fieldErrors?: Record<string, string> }
  | { type: "offline"; message: string }
  | { type: "reconnected"; message: string }
  | { type: "timeout"; message: string };

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  services: [],
  budget: "",
  message: "",
  consent: true,
  honeypot: "",
};

export interface ContactFormProps {
  initialService?: string;
  submitLabel?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  showWhatsAppButton?: boolean;
}

export function ContactForm({
  initialService,
  submitLabel = "Send Project Inquiry",
  messageLabel = "Tell us about your project",
  messagePlaceholder = "What are you looking to build, automate, or scale? Any timeline or details...",
  showWhatsAppButton = false,
}: ContactFormProps = {}) {
  const [formData, setFormData] = useState<ContactFormData>(() => ({
    ...initialFormData,
    services: initialService ? [initialService] : [],
  }));
  const [state, setState] = useState<FormState>({ type: "idle" });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [copied, setCopied] = useState(false);

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
            message: "Your connection has been restored.",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (!hasInteracted) {
      setHasInteracted(true);
      trackEvent("contact_form_start");
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const buildInquirySummary = (data: ContactFormData) => {
    const lines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
    ];
    if (data.phone) lines.push(`Phone / WhatsApp: ${data.phone}`);
    if (data.company) lines.push(`Company: ${data.company}`);
    if (data.services && data.services.length > 0) {
      lines.push(`Interest: ${data.services.join(", ")}`);
    }
    lines.push("", "Project Details / Message:", data.message);
    return lines.join("\n");
  };

  const buildMailtoUrl = (data: ContactFormData) => {
    const subject = `Project Inquiry — ${data.name}${data.company ? ` (${data.company})` : ""}`;
    const body = `Hi Ethisyn Team,\n\nI would like to inquire about working together.\n\n--- INQUIRY DETAILS ---\n${buildInquirySummary(data)}\n\nLooking forward to hearing from you!`;
    return `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const buildWhatsAppUrl = (data: ContactFormData) => {
    const text = `Hi Ethisyn Team! My name is ${data.name}${data.company ? ` from ${data.company}` : ""}.\n\nMessage:\n${data.message}\n\nEmail: ${data.email}${data.phone ? ` | Phone: ${data.phone}` : ""}`;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
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

    const mailtoUrl = buildMailtoUrl(validationResult.data);
    const whatsappUrl = buildWhatsAppUrl(validationResult.data);
    const summaryText = buildInquirySummary(validationResult.data);

    // Fire-and-forget background log for server record
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validationResult.data),
    }).catch(() => {});

    // Open direct email client
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Guard
    }

    trackEvent("contact_form_submit", { success: true, method: "direct_email" });

    setState({
      type: "success",
      message: `Your inquiry has been formatted and opened in your email app addressed to ${siteConfig.contactEmail}. We will review your project and reply within 4 business hours.`,
      mailtoUrl,
      whatsappUrl,
      summaryText,
    });
  };

  const handleWhatsAppSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

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

    const mailtoUrl = buildMailtoUrl(validationResult.data);
    const whatsappUrl = buildWhatsAppUrl(validationResult.data);
    const summaryText = buildInquirySummary(validationResult.data);

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validationResult.data),
    }).catch(() => {});

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    trackEvent("contact_form_submit", { success: true, method: "direct_whatsapp" });

    setState({
      type: "success",
      message: `Your inquiry has been formatted and opened in WhatsApp. You can also send via email to ${siteConfig.contactEmail} below.`,
      mailtoUrl,
      whatsappUrl,
      summaryText,
    });
  };

  return (
    <div className="w-full">
      {/* Alert Banner */}
      {state.type !== "idle" && state.type !== "submitting" && (
        <div ref={errorSummaryRef} className="mb-6">
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
                ? "Inquiry Ready"
                : state.type === "offline"
                ? "You Are Offline"
                : state.type === "timeout"
                ? "Connection Timeout"
                : "Please Review Form"
            }
          >
            <p>{state.message}</p>
          </Alert>
        </div>
      )}

      {/* Success State View */}
      {state.type === "success" ? (
        <div className="p-6 sm:p-8 border border-emerald-500/20 rounded-2xl bg-[#080808] space-y-6 text-center sm:text-left animate-in fade-in duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">
                Inquiry Opened in Email
              </h4>
              <p className="text-xs text-emerald-400 uppercase tracking-widest font-medium">
                Direct to {siteConfig.contactEmail} • Response within 4 business hours
              </p>
            </div>
          </div>

          <p className="text-sm text-[#D4D4D8] leading-relaxed">
            {state.message}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {state.mailtoUrl && (
              <a
                href={state.mailtoUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Open Email App Again</span>
              </a>
            )}

            {state.whatsappUrl && (
              <a
                href={state.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-semibold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </a>
            )}

            {state.summaryText && (
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(state.summaryText || "");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2500);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.12] text-white text-xs uppercase tracking-wider hover:bg-white/[0.1] transition-colors"
              >
                <Copy className="w-4 h-4" />
                <span>{copied ? "Copied!" : "Copy Details"}</span>
              </button>
            )}
          </div>

          <div className="pt-4 border-t border-white/[0.08]">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setState({ type: "idle" });
                setFormData(initialFormData);
              }}
            >
              Start New Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
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

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              id="form-name"
              name="name"
              label="Your Name"
              isRequired
              autoComplete="name"
              value={formData.name}
              onChange={handleFieldChange}
              error={fieldErrors.name}
              placeholder="e.g. Alex Chen"
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
              placeholder="alex@company.com"
              leftIcon={<Mail className="w-4 h-4" />}
            />
          </div>

          {/* Phone / WhatsApp (Optional) */}
          <Input
            id="form-phone"
            name="phone"
            label="Phone or WhatsApp (Optional)"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleFieldChange}
            placeholder="+91 98765 43210"
            leftIcon={<Phone className="w-4 h-4" />}
          />

          {/* Project Details */}
          <Textarea
            id="form-message"
            name="message"
            label={messageLabel}
            isRequired
            rows={4}
            value={formData.message}
            onChange={handleFieldChange}
            error={fieldErrors.message}
            placeholder={messagePlaceholder}
          />

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              showArrow
              className={showWhatsAppButton ? "flex-1 justify-center" : "w-full justify-center"}
            >
              {submitLabel}
            </Button>

            {showWhatsAppButton && (
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50 text-emerald-400 font-medium text-xs uppercase tracking-widest transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
