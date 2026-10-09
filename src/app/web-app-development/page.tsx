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
  Globe,
  Zap,
  Gauge,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Layers,
  Smartphone,
  Sparkles,
  HelpCircle,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "High-Performance Web Application Development | Ethisyn",
  description:
    "We engineer sub-second web applications with Next.js 15, React 19, TypeScript, and Tailwind CSS. 100/100 Google Lighthouse benchmarks, edge caching, and WCAG accessibility.",
  alternates: {
    canonical: "/web-app-development",
  },
  openGraph: {
    title: "High-Performance Web Application Development | Ethisyn",
    description:
      "Sub-second web platforms engineered in Hyderabad for global scale. Next.js 15 App Router, React Server Components, and zero client bloat.",
    url: `${siteConfig.url}/web-app-development`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Application Development | Ethisyn",
    description:
      "Sub-500ms global TTFB, 100/100 Core Web Vitals, and resilient TypeScript architectures built by founding engineers.",
  },
};

const webAppPillars = [
  {
    icon: Gauge,
    title: "Sub-500ms Global TTFB & Speed Optimization",
    tagline: "Edge CDN distribution with React Server Components",
    description:
      "By leveraging Next.js 15 App Router and React Server Components, we eliminate unnecessary client JavaScript bundles. Pages render in under 500ms globally with zero layout shift.",
    points: [
      "Target 100/100 Google Lighthouse Core Web Vitals",
      "Static Site Generation (SSG) with ISR where dynamic",
      "Streaming SSR with Suspense boundaries for instant perception",
      "Zero Cumulative Layout Shift (CLS < 0.01)",
    ],
  },
  {
    icon: Code2,
    title: "Type-Safe Full-Stack TypeScript Architecture",
    tagline: "End-to-end type safety from database to browser DOM",
    description:
      "Eliminate runtime bugs and broken APIs. We architect complete type safety using strict TypeScript, Zod schema validation, and typed ORMs (Drizzle / Prisma).",
    points: [
      "Strict TypeScript compiler settings with zero `any`",
      "Automatic schema validation on all inputs",
      "Typed RPC or REST contracts for frontend/backend cohesion",
      "High developer velocity and painless refactoring",
    ],
  },
  {
    icon: Smartphone,
    title: "Responsive, Accessible & Tactile UI Systems",
    tagline: "WCAG 2.1 AA compliant design system primitives",
    description:
      "Pixel-perfect interfaces designed with Tailwind CSS and accessible WAI-ARIA standards. Keyboard-navigable, screen-reader friendly, and tested down to 320px mobile viewports.",
    points: [
      "Zero mobile horizontal scroll blowout down to 320px",
      "Full keyboard navigation & roving tabindex",
      "Automated Axe-Core accessibility audits in CI/CD",
      "Smooth hardware-accelerated animations & reduced motion support",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security & Edge Protection",
    tagline: "Zero-vulnerability engineering standards",
    description:
      "Engineered with strict Content Security Policies (CSP), sanitized inputs preventing XSS, multi-tiered rate limiting, and automated bot honeypots.",
    points: [
      "Automated XSS sanitization & SQL injection prevention",
      "Sliding window rate limiters (Upstash Redis + in-memory)",
      "Automated bot traps with honeypot fields",
      "HTTPS everywhere with HSTS and strict origin headers",
    ],
  },
];

const faqs = [
  {
    question: "Why does Ethisyn emphasize sub-second web speed so heavily?",
    answer:
      "Every 100ms of latency reduction directly increases user conversion rates by up to 8% and significantly boosts Google search rankings. Fast websites retain users, reduce bounce rates, and project an immediate impression of institutional credibility.",
  },
  {
    question: "What is the difference between a traditional website and a web application?",
    answer:
      "A traditional website displays static brochure content. A web application includes rich interactive client state, user authentication, persistent databases, transactional workflows, payment gateways, and real-time data synchronization.",
  },
  {
    question: "How do you test and verify web applications before launch?",
    answer:
      "We run automated three-tier test suites on every build: unit and schema tests with Vitest, cross-browser journey tests with Playwright (Desktop + Mobile viewports), and automated WCAG 2.1 AA accessibility auditing via Axe-Core.",
  },
];

export default function WebAppDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/web-app-development#service`,
    name: "High-Performance Web Application Development",
    serviceType: "Full-Stack Web Engineering & Next.js Architecture",
    description:
      "High-speed web application development, Next.js 15 App Router, React 19, and sub-500ms edge platforms built by Ethisyn.",
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
    { label: "Web App Development", href: "/web-app-development" },
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
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-500/20 via-white/10 to-transparent blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            BUILD // Web Engineering Architecture
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-white max-w-5xl leading-[1.08] mb-8">
            High-Performance Web Applications.{" "}
            <span className="italic font-serif text-white/90">Sub-500ms</span> Standard.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed font-sans mb-10">
            We build ultra-fast, accessible web applications using Next.js 15, React 19, and TypeScript. Zero bloated templates, 100/100 Core Web Vitals targets, and uncompromising engineering craft.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary" size="lg">
              Start Web App Scoping
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              href="https://wa.me/918096131202?text=Hi%20Ethisyn,%20I'd%20like%20to%20discuss%20a%20high-performance%20web%20application."
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
              <div className="text-2xl sm:text-3xl font-mono text-white">100/100</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Lighthouse Performance Target</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">WCAG 2.1 AA</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Accessibility Compliance</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">100%</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Code & Infrastructure Ownership</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Standards // Technical Rigor
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-white">
              Engineering Principles for Web Apps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webAppPillars.map((item) => {
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
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-4">
                    {item.tagline}
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                    {item.description}
                  </p>
                  <div className="space-y-2 border-t border-white/[0.06] pt-5">
                    {item.points.map((p) => (
                      <div key={p} className="flex items-center gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{p}</span>
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
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400">
              Web Architecture Consultation
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-light text-white leading-tight">
              Build your web application on a modern, sub-second foundation.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Connect with Sandhya Chirumamilla (Head of Web Engineering) and our senior engineering partners. Guaranteed 4-hour SLA response.
            </p>
            <div className="p-5 rounded-xl border border-white/[0.08] bg-zinc-950/60 space-y-3">
              <div className="text-xs font-mono text-zinc-400">STUDIO STANDARDS</div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Guaranteed &lt; 4 business hours response time
              </div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                100% full IP and Git repository ownership
              </div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Automated Vitest & Playwright regression suites
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
