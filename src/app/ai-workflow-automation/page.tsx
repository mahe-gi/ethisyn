import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/ui/ContactForm";
import { siteConfig } from "@/content/site";
import {
  Workflow,
  Cpu,
  FileCheck2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Database,
  Repeat,
  Sparkles,
  Zap,
  HelpCircle,
  FileSpreadsheet,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Process & AI Workflow Automation | Ethisyn",
  description:
    "Automate repetitive enterprise operations with custom AI workflow pipelines, intelligent document parsing, CRM sync, and n8n orchestration. Save 15-25+ hours weekly per team.",
  alternates: {
    canonical: "/ai-workflow-automation",
  },
  openGraph: {
    title: "Business Process & AI Workflow Automation | Ethisyn",
    description:
      "Eliminate manual data entry and sluggish operations with deterministic AI automation workflows built by founding engineers in Hyderabad.",
    url: `${siteConfig.url}/ai-workflow-automation`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Process & AI Workflow Automation | Ethisyn",
    description:
      "Enterprise workflow automation with zero data leakage. Custom Python pipelines, document extraction, and seamless CRM integrations.",
  },
};

const automationPillars = [
  {
    icon: FileCheck2,
    title: "Intelligent Document & Invoice Parsing",
    tagline: "Extract structured JSON from PDFs, bills & forms",
    description:
      "Autonomous optical character recognition and multi-modal LLM extraction pipelines that parse invoices, legal contracts, receipts, and medical records directly into your accounting or ERP database with 99.8% field accuracy.",
    benefits: [
      "Sub-2s processing per complex document",
      "Automated line-item validation against purchase orders",
      "Direct webhook sync to QuickBooks, Xero & SAP",
      "Confidence thresholds with human escalation queues",
    ],
  },
  {
    icon: Repeat,
    title: "Cross-Platform CRM & ERP Synchronization",
    tagline: "Keep customer records updated across every tool",
    description:
      "Bi-directional event streams linking HubSpot, Salesforce, WhatsApp Business API, Google Sheets, Slack, and internal PostgreSQL databases. Eliminate manual CSV exports and repetitive data entry forever.",
    benefits: [
      "Instant lead enrichment from public data",
      "Automated deal stage transitions & reminders",
      "Real-time WhatsApp notifications to sales reps",
      "Zero sync collision with idempotency keys",
    ],
  },
  {
    icon: Workflow,
    title: "Self-Hosted n8n & Python Orchestration",
    tagline: "Zero per-task licensing extortion",
    description:
      "We build robust, self-hosted automation infrastructure using n8n and customized Python FastAPI workers. Run millions of background workflow operations on dedicated cloud servers without paying exorbitant Zapier fees.",
    benefits: [
      "100% self-hosted on your AWS / Hetzner cloud",
      "Zero task-run pricing caps or rate limits",
      "Full source code ownership & Git version control",
      "Deterministic retry logic with exponential backoff",
    ],
  },
  {
    icon: Clock,
    title: "Automated Customer Support Triage",
    tagline: "Resolve 60%+ of routine inquiries instantly",
    description:
      "Intelligent classification pipelines that read incoming support tickets or email inquiries, detect intent and urgency, draft accurate responses using company docs, or escalate to on-duty specialists with pre-filled context.",
    benefits: [
      "Under 30-second ticket first-response time",
      "Automatic sentiment analysis & priority tagging",
      "Knowledge base lookup with strict guardrails",
      "Seamless Zendesk, Intercom, and Freshdesk hooks",
    ],
  },
];

const faqs = [
  {
    question: "How much time and cost does AI workflow automation actually save?",
    answer:
      "Our clients routinely save 15 to 25+ hours per team member every week by eliminating manual data entry, PDF parsing, and multi-tool copy-pasting. In operational cost, companies typically reduce repetitive operational expenditure by 40% to 65% within the first 60 days of deployment.",
  },
  {
    question: "Why should we build self-hosted automation instead of using Zapier or Make?",
    answer:
      "Zapier and Make charge steep monthly fees that scale aggressively with task volume, create vendor lock-in, and present privacy risks for sensitive data. We build modular, self-hosted workflows on n8n or Python microservices running in your own cloud, giving you unlimited execution capacity, full data sovereignty, and zero ongoing per-task licensing fees.",
  },
  {
    question: "Is our proprietary customer and company data kept private?",
    answer:
      "Strictly yes. All workflows run in private cloud environments (AWS, GCP, or your preferred host) with end-to-end encryption. When using language models, we use enterprise APIs with zero data retention clauses or host local open-source models inside your VPC.",
  },
  {
    question: "What happens if a third-party API goes down or changes format?",
    answer:
      "All automated pipelines are engineered with deterministic error handling, exponential backoff retries, dead-letter queues, and automated Slack/email alerting. If an anomaly occurs, the task is safely queued and your team is notified with an exact diagnostic trace.",
  },
];

export default function AIWorkflowAutomationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/ai-workflow-automation#service`,
    name: "Business Process & AI Workflow Automation",
    serviceType: "Enterprise Workflow Automation & Document Intelligence",
    description:
      "Custom business process automation, document parsing, CRM synchronization, and self-hosted n8n pipelines engineered by Ethisyn.",
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "AI Workflow Automation", href: "/ai-workflow-automation" },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-white/10 to-transparent blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            AUTOMATE // Operations Engineering
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-white max-w-5xl leading-[1.08] mb-8">
            Business Process &{" "}
            <span className="italic font-serif text-white/90">AI Workflow</span> Automation.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed font-sans mb-10">
            Eliminate repetitive operational drudgery, manual document extraction, and cross-tool copy-pasting. We engineer self-hosted, deterministic automation pipelines that save 15-25+ hours per team weekly.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary" size="lg">
              Automate Your Workflows
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              href="https://wa.me/918096131202?text=Hi%20Ethisyn,%20I'd%20like%20to%20discuss%20automating%20our%20business%20workflows."
              variant="secondary"
              size="lg"
              isExternal
            >
              Discuss on WhatsApp
            </Button>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-white/[0.08]">
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">15-25+ hrs</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Saved Per Week / Team</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">99.8%</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Extraction Field Accuracy</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">$0</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Per-Task Licensing Fees</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">100%</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Private Cloud Data Sovereignty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Automation Areas */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Solutions // Operational Efficiency
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-white">
              Core Automation Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationPillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-white/[0.18] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-sans text-white mb-2">{item.title}</h3>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
                    {item.tagline}
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                    {item.description}
                  </p>
                  <div className="space-y-2 border-t border-white/[0.06] pt-5">
                    {item.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison: Legacy Manual vs Ethisyn Automated */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08] bg-zinc-950/40">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Operational Shift // Before vs After
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-light text-white">
              The True Impact of Engineering-Grade Automation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-rose-500/20 bg-rose-950/10">
              <div className="text-xs font-mono text-rose-400 uppercase tracking-widest mb-4">
                Manual / Legacy Operations
              </div>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-mono">✕</span>
                  <span>Hours lost manually transcribing invoice data into accounting software</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-mono">✕</span>
                  <span>High error rates leading to invoicing discrepancies and lost revenue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-mono">✕</span>
                  <span>Escalating monthly fees for Zapier/Make tasks that frequently fail silently</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-mono">✕</span>
                  <span>Leads waiting 4+ hours for manual qualification and outreach</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-emerald-500/20 bg-emerald-950/10">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">
                With Ethisyn Automation Pipelines
              </div>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Sub-2 second document ingestion with automated ERP reconciliation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Deterministic validation gates catching anomalies before database write</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Self-hosted pipelines with unlimited execution volume and zero task fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Instant sub-minute lead triage and automated WhatsApp engagement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 text-center">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              FAQ // Common Inquiries
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-light text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/[0.08]"
              >
                <h3 className="text-lg font-sans text-white mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Funnel */}
      <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Operations Consultation
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-light text-white leading-tight">
              Tell us where your team spends too much manual time.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Our automation architects will map out an end-to-end operational blueprint that cuts busywork and scales your capacity effortlessly.
            </p>
            <div className="p-5 rounded-xl border border-white/[0.08] bg-zinc-950/60 space-y-3">
              <div className="text-xs font-mono text-zinc-400">STUDIO STANDARDS</div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Guaranteed &lt; 4 business hours response time
              </div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Self-hosted, vendor-independent automation code
              </div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Mutual Non-Disclosure Agreement (NDA) on request
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm initialService="AUTOMATE: AI & Automation Systems" />
          </div>
        </div>
      </section>
    </div>
  );
}
