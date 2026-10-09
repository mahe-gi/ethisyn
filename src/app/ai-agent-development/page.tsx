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
  Bot,
  Cpu,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Database,
  Workflow,
  Sparkles,
  PhoneCall,
  Terminal,
  Clock,
  Layers,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Agent Development & Workflow Automation | Ethisyn",
  description:
    "We architect and deploy production autonomous AI agents with LangGraph, Python, LiveKit, and PostgreSQL. Multi-agent swarms, 24/7 conversational voice agents, and deterministic LLM pipelines.",
  alternates: {
    canonical: "/ai-agent-development",
  },
  openGraph: {
    title: "AI Agent Development & Workflow Automation | Ethisyn",
    description:
      "Production-ready autonomous AI agents and deterministic pipelines built in Hyderabad for high-growth businesses worldwide. 100% in-house engineering.",
    url: `${siteConfig.url}/ai-agent-development`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Development Services | Ethisyn",
    description:
      "Deterministic autonomous agents, stateful cyclic graphs, and voice bots engineered with multi-layer hallucination safeguards.",
  },
};

const agentCapabilities = [
  {
    icon: Bot,
    title: "Autonomous Multi-Agent Swarms",
    tagline: "Stateful orchestration with LangGraph & Python",
    description:
      "Complex business logic decomposed into specialized agent nodes (triage, researcher, validator, executor) with PostgreSQL state persistence and human-in-the-loop approval gates.",
    deliverables: [
      "LangGraph cyclic state machines",
      "PostgreSQL checkpoint persistence",
      "Human-in-the-loop review dashboards",
      "Sub-second fallback mechanisms",
    ],
  },
  {
    icon: PhoneCall,
    title: "24/7 Conversational Voice Agents",
    tagline: "Low-latency streaming voice pipelines",
    description:
      "Real-time voice assistants powered by LiveKit, Deepgram, and Cartesia that answer incoming customer inquiries, schedule appointments, and qualify inbound leads with minimal latency.",
    deliverables: [
      "WebRTC audio streaming infrastructure",
      "Smart interruption handling & VAD",
      "Direct telephony (Twilio / Exotel) hookups",
      "Automated CRM meeting scheduling",
    ],
  },
  {
    icon: Database,
    title: "Deterministic Enterprise RAG",
    tagline: "Citation-backed semantic knowledge retrieval",
    description:
      "Private semantic search and document reasoning pipelines utilizing pgvector, hybrid BM25 + dense vector reranking, and citation verification layers for internal knowledge bases.",
    deliverables: [
      "Hybrid dense + sparse semantic search",
      "Cohere / BGE cross-encoder rerankers",
      "Strict citation verification layers",
      "Automated document ingestion pipelines",
    ],
  },
  {
    icon: Workflow,
    title: "CRM & ERP Automated Integrations",
    tagline: "Bi-directional sync with your existing tech stack",
    description:
      "Autonomous agents that trigger actions directly across HubSpot, Salesforce, WhatsApp Business API, Slack, Stripe, and internal databases without manual human intervention.",
    deliverables: [
      "Custom REST / GraphQL tool-calling",
      "WhatsApp Business API event webhooks",
      "Automated lead scoring & routing",
      "Encrypted credential vaults & rate limiters",
    ],
  },
];

const faqs = [
  {
    question: "What makes Ethisyn's AI agents different from standard ChatGPT wrappers?",
    answer:
      "Standard wrappers rely on single naive prompt completions that hallucinate and break on edge cases. Ethisyn engineers deterministic multi-agent graphs using LangGraph and Python. Every agent task is isolated, validated by a separate verification node, persisted in PostgreSQL, and bounded by strict human-in-the-loop gates when high-risk actions occur.",
  },
  {
    question: "How do you prevent hallucinations in customer-facing voice and chat bots?",
    answer:
      "We implement three defense layers: (1) Hybrid retrieval-augmented generation (RAG) with exact citation verification, (2) Deterministic JSON schema constraints restricting output tokens, and (3) Automated rule-based guardrails that immediately trigger human handoffs if confidence drops below 95%.",
  },
  {
    question: "What technologies and frameworks do you build AI agents with?",
    answer:
      "Our core AI stack includes Python 3.12, LangGraph, FastAPI, PostgreSQL (pgvector), LiveKit, OpenAI / Anthropic / Groq models, n8n, and custom Next.js 15 management dashboards. We choose the optimal model per sub-task to minimize latency and token cost.",
  },
  {
    question: "How long does it take to design and deploy a custom AI agent into production?",
    answer:
      "A typical production-ready agent deployment takes 2 to 4 weeks. We execute in rapid sprints: Week 1 architecture and workflow mapping, Week 2 prototype and tool integration, Weeks 3-4 safety evaluation, staging tests, and production release with continuous telemetry.",
  },
  {
    question: "Can our data be kept strictly private without training public models?",
    answer:
      "Yes, 100%. We configure enterprise API agreements that prohibit provider data training, or deploy open-source models (Llama 3, Qwen) within your own private VPC (AWS, GCP, or Azure) with zero outbound data leakage.",
  },
];

export default function AIAgentDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/ai-agent-development#service`,
    name: "AI Agent Development & Workflow Automation",
    serviceType: "Autonomous AI Agents & Enterprise LLM Engineering",
    description:
      "Custom autonomous AI agent engineering, conversational voice bots, and deterministic workflow pipelines built with LangGraph, Python, and PostgreSQL.",
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Agent Capabilities",
      itemListElement: agentCapabilities.map((cap, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: cap.title,
          description: cap.description,
        },
      })),
    },
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
    { label: "AI Agent Development", href: "/ai-agent-development" },
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
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-500/20 via-white/10 to-transparent blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AUTOMATE // Domain Engineering
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-white max-w-5xl leading-[1.08] mb-8">
            Autonomous AI Agents &{" "}
            <span className="italic font-serif text-white/90">Deterministic</span> Pipelines.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed font-sans mb-10">
            We architect production-grade AI agents with multi-layer hallucination safeguards, LangGraph cyclic state machines, low-latency conversational voice pipelines, and citation-backed knowledge retrieval.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary" size="lg">
              Scope Your AI Agent
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              href="https://wa.me/918096131202?text=Hi%20Ethisyn,%20I'm%20interested%20in%20building%20an%20AI%20agent%20for%20my%20business."
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
              <div className="text-2xl sm:text-3xl font-mono text-white">Sub-Second</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Target Voice Latency</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">100%</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Code & Prompt Ownership</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">Multi-Step</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Automated Workflows</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">Strict Privacy</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Zero Training on Enterprise Data</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Capabilities // Systems Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-white">
              What We Actually Build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agentCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="p-8 rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-white/[0.18] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-sans text-white mb-2">{cap.title}</h3>
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4">
                    {cap.tagline}
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                    {cap.description}
                  </p>
                  <div className="space-y-2 border-t border-white/[0.06] pt-5">
                    {cap.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Stage Delivery Sprints */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08] bg-zinc-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Process // Predictable Execution
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-white">
              From Concept to Shipped Agent in 3 Weeks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-white/[0.08] bg-black">
              <div className="text-xs font-mono text-zinc-500 mb-2">WEEK 01</div>
              <h4 className="text-lg font-sans text-white mb-2">Architecture & Scoping</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Task decomposition, model selection, schema specifications, and security permission boundary mapping.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-white/[0.08] bg-black">
              <div className="text-xs font-mono text-zinc-500 mb-2">WEEK 02</div>
              <h4 className="text-lg font-sans text-white mb-2">Graph Engineering</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                LangGraph cyclic graphs, tool integration (Postgres, CRM, APIs), vector indexes, and checkpoint persistence.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-white/[0.08] bg-black">
              <div className="text-xs font-mono text-zinc-500 mb-2">WEEK 03</div>
              <h4 className="text-lg font-sans text-white mb-2">Safety & Guardrails</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Adversarial jailbreak testing, latency profiling, human review gates, and live staging sandbox validation.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-white/[0.08] bg-black">
              <div className="text-xs font-mono text-zinc-500 mb-2">DEPLOYMENT</div>
              <h4 className="text-lg font-sans text-white mb-2">Edge Production</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Release to production with real-time telemetry, token spend controls, and direct engineer SLA support.
              </p>
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
            <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-tight text-white">
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
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Direct Senior Builder Access
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-light text-white leading-tight">
              Let&apos;s architect your autonomous agent pipeline.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Speak directly with our founding AI & distributed systems engineers. We provide an architectural feasibility review within 4 business hours.
            </p>
            <div className="p-5 rounded-xl border border-white/[0.08] bg-zinc-950/60 space-y-3">
              <div className="text-xs font-mono text-zinc-400">STUDIO GUARANTEES</div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Guaranteed &lt; 4 business hours response time
              </div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                100% full IP and prompt template ownership
              </div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
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
