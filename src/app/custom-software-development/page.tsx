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
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Database,
  Smartphone,
  Globe,
  Zap,
  Terminal,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development Company | Ethisyn",
  description:
    "We engineer high-performance web applications, mobile apps, enterprise portals, and distributed backends. 100% in-house senior architects, sub-second latency, zero bloated templates.",
  alternates: {
    canonical: "/custom-software-development",
  },
  openGraph: {
    title: "Custom Software Development Company | Ethisyn",
    description:
      "Enterprise software engineering, Next.js web applications, and mobile apps built by founding domain architects in Hyderabad. 100% full IP ownership.",
    url: `${siteConfig.url}/custom-software-development`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company | Ethisyn",
    description:
      "Architecture-first custom software development. Sub-second performance, clean TypeScript, and production resilience.",
  },
};

const softwareOfferings = [
  {
    icon: Globe,
    title: "Enterprise Web Applications & Portals",
    tagline: "Sub-500ms Next.js 15 & React 19 architecture",
    description:
      "High-speed internal dashboards, customer portals, and mission-critical web applications built with Next.js App Router, strict TypeScript, Tailwind CSS, and edge CDN distribution.",
    features: [
      "Sub-second global Time-to-First-Byte (TTFB)",
      "Role-based access control (RBAC) & OAuth",
      "Real-time event sync via WebSockets / SSE",
      "Strict WAI-ARIA WCAG accessibility compliance",
    ],
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile Applications",
    tagline: "Native iOS & Android performance with React Native & Flutter",
    description:
      "Fluid, offline-first mobile apps for consumer and enterprise use. Pixel-perfect 60fps animations, biometric authentication, push notifications, and background syncing.",
    features: [
      "Offline-first local SQLite / WatermelonDB sync",
      "Native push notifications (APNs & FCM)",
      "Camera, location & Bluetooth hardware access",
      "Direct Apple App Store & Google Play submission",
    ],
  },
  {
    icon: Database,
    title: "Scalable Distributed Backends & APIs",
    tagline: "Resilient microservices in Go, Node.js & Python",
    description:
      "High-concurrency RESTful and GraphQL APIs engineered for high uptime. PostgreSQL, Redis caching, Kafka message brokers, and automated CI/CD deployment pipelines.",
    features: [
      "Relational schema design with Prisma / Drizzle",
      "Rate limiting, idempotency & DDoS protection",
      "Microservice event streaming with Kafka / RabbitMQ",
      "Automated Docker containerization & Kubernetes",
    ],
  },
  {
    icon: Layers,
    title: "Legacy Modernization & Codebase Refactoring",
    tagline: "Extract clean modern services from monoliths",
    description:
      "Gradual migration from sluggish legacy architectures (PHP, old Rails, outdated Java) to modern, decoupled TypeScript and serverless microservices with zero operational downtime.",
    features: [
      "Strangler fig migration pattern with 0 downtime",
      "Automated regression test coverage (Vitest / Playwright)",
      "Comprehensive TypeScript type-safety layers",
      "Immediate 3x-10x page load speed enhancements",
    ],
  },
];

const faqs = [
  {
    question: "How does Ethisyn ensure high-speed software performance?",
    answer:
      "We design software with strict performance budgets from day one. That means sub-second TTFB, code-splitting, zero bloated third-party dependencies, server-side caching (Redis, edge CDN), and automated Core Web Vitals profiling on every production build.",
  },
  {
    question: "Do you outsource development or use offshore contractors?",
    answer:
      "Never. All software is architected, written, and deployed directly by our 11 in-house senior domain leads in Hyderabad. You communicate directly with the engineers building your platform in private Slack or WhatsApp channels.",
  },
  {
    question: "Who owns the intellectual property and code when the project finishes?",
    answer:
      "You do, 100%. Upon milestone completion, full source code ownership, Git repositories, deployment configurations, and IP rights transfer unconditionally to your company.",
  },
  {
    question: "What is your typical software development sprint model?",
    answer:
      "We execute in rapid 2-week technical sprints. Every Friday includes a live staging environment demo and progress report. You have continuous visibility into the codebase with zero black-box delays.",
  },
];

export default function CustomSoftwareDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/custom-software-development#service`,
    name: "Custom Software Development",
    serviceType: "Full-Stack Web & Mobile Software Engineering",
    description:
      "Enterprise custom software development, Next.js web applications, mobile apps, and distributed backends built by Ethisyn.",
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
    { label: "Custom Software Development", href: "/custom-software-development" },
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
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-white/20 via-zinc-500/10 to-transparent blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-white text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            BUILD // Full-Stack Software Engineering
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-white max-w-5xl leading-[1.08] mb-8">
            Custom Software.{" "}
            <span className="italic font-serif text-white/90">Sub-Second</span> Latency.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed font-sans mb-10">
            We engineer high-performance web applications, cross-platform mobile apps, and distributed backends. Built from first principles by senior domain leads in Hyderabad with 100% full code ownership.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary" size="lg">
              Start Software Scoping
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              href="https://wa.me/918096131202?text=Hi%20Ethisyn,%20I'd%20like%20to%20discuss%20a%20custom%20software%20project."
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
              <div className="text-2xl sm:text-3xl font-mono text-white">&lt; 500ms</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Global TTFB Standard</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">100%</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Full IP & Code Ownership</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">0</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Outsourced Contractors</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">2-Week</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Rapid Production Sprints</div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Capabilities // Engineering Arsenal
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-white">
              Software Disciplines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softwareOfferings.map((item) => {
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
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
                    {item.tagline}
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                    {item.description}
                  </p>
                  <div className="space-y-2 border-t border-white/[0.06] pt-5">
                    {item.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
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
            <div className="text-xs font-mono uppercase tracking-widest text-white/80">
              Senior Engineering Scoping
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-light text-white leading-tight">
              Scope your next software application with our CTO.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Connect directly with Mahesh Ch (CTO) and our software engineering leads. We provide an exact architectural review and sprint roadmap within 4 business hours.
            </p>
            <div className="p-5 rounded-xl border border-white/[0.08] bg-zinc-950/60 space-y-3">
              <div className="text-xs font-mono text-zinc-400">STUDIO GUARANTEES</div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                Guaranteed &lt; 4 business hours response time
              </div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                100% full IP and Git repository ownership
              </div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                Mutual Non-Disclosure Agreement (NDA) on request
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm initialService="BUILD: Web & Software Engineering" />
          </div>
        </div>
      </section>
    </div>
  );
}
