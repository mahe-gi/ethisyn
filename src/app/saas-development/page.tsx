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
  Layers,
  Rocket,
  CreditCard,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Database,
  Cpu,
  Sparkles,
  Zap,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS Product Engineering & MVP Development | Ethisyn",
  description:
    "We architect, build, and scale multi-tenant SaaS products in rapid 4-week MVP sprints. Scalable authentication, billing, serverless Postgres, and sub-300ms shells. As seen in GoWider.",
  alternates: {
    canonical: "/saas-development",
  },
  openGraph: {
    title: "SaaS Product Engineering & MVP Development | Ethisyn",
    description:
      "From zero to live production SaaS in 4 weeks. Multi-tenant architecture, billing systems, and serverless Postgres engineered in Hyderabad.",
    url: `${siteConfig.url}/saas-development`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Product Engineering & MVP Development | Ethisyn",
    description:
      "Rapid SaaS engineering by founding domain architects. 100% full IP ownership, modern tech stack, and predictable execution.",
  },
};

const saasCapabilities = [
  {
    icon: Rocket,
    title: "4-Week Rapid SaaS MVP Sprints",
    tagline: "From concept to live paying users in 30 days",
    description:
      "We strip out low-value distraction and engineer the core high-converting product features required for market validation. Production-ready on day 30 with 0 technical debt.",
    highlights: [
      "Sprint 1: System architecture, schema & Figma tokens",
      "Sprint 2: Auth, multi-tenancy & core workflows",
      "Sprint 3: Payment gateway & customer onboarding",
      "Sprint 4: Regression testing, security audit & deployment",
    ],
  },
  {
    icon: CreditCard,
    title: "Subscription Billing & Tier Management",
    tagline: "Stripe, Razorpay, Lemon Squeezy & Paddle",
    description:
      "Flawless billing systems handling recurring subscriptions, metered usage, trials, team seats, coupon codes, tax compliance, and automated webhook reconciliation.",
    highlights: [
      "Stripe Customer Portal & invoice generation",
      "Prorated upgrade/downgrade logic",
      "Automated dunning & failed payment recovery",
      "Seat-based and usage-metered licensing",
    ],
  },
  {
    icon: Users,
    title: "Multi-Tenant Architecture & Auth",
    tagline: "Enterprise security with row-level data isolation",
    description:
      "Scalable workspace multi-tenancy with Better Auth, Supabase Auth, or Clerk. Enforce tenant isolation via PostgreSQL Row Level Security (RLS) or schema-per-tenant patterns.",
    highlights: [
      "Role-Based Access Control (Owner, Admin, Member, Guest)",
      "Single Sign-On (SAML, Google, GitHub, Okta)",
      "Strict data isolation preventing cross-tenant leakage",
      "Workspace invite tokens & team management",
    ],
  },
  {
    icon: Database,
    title: "Serverless Database & Edge Caching",
    tagline: "Scale from 10 to 100,000 users without refactoring",
    description:
      "Engineered on Neon Serverless Postgres, Cloudflare Edge, and Drizzle ORM. Cold starts eliminated, instant branching for staging tests, and sub-300ms shell loads.",
    highlights: [
      "Database branching per pull request",
      "Edge-cached read replicas with global distribution",
      "Automated automated backups and point-in-time recovery",
      "Zero server maintenance overhead",
    ],
  },
];

const faqs = [
  {
    question: "Can an enterprise-grade SaaS MVP genuinely be built in 4 weeks?",
    answer:
      "Yes, when built by senior architects who reuse proven foundational architectures for authentication, database pooling, and subscription billing. We proved this with our own proprietary product GoWider (gowider.in), which was architected, coded, and launched in 4 weeks with 151/151 automated tests passing.",
  },
  {
    question: "What tech stack do you recommend for modern SaaS platforms?",
    answer:
      "Our battle-tested stack is Next.js 15 (App Router, Server Components), React 19, TypeScript, Tailwind CSS, Neon PostgreSQL or Supabase, Drizzle ORM, Stripe / Razorpay, and Vitest / Playwright for automated quality assurance.",
  },
  {
    question: "How do you handle ongoing maintenance after launch?",
    answer:
      "We offer flexible post-launch engineering pods for continuous feature sprints, uptime monitoring, and infrastructure scaling, or we cleanly hand over complete documentation, Git repos, and deployment credentials to your internal team.",
  },
];

export default function SaaSDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/saas-development#service`,
    name: "SaaS Product Engineering & MVP Development",
    serviceType: "SaaS MVP Development & Cloud Architecture",
    description:
      "Rapid multi-tenant SaaS engineering, subscription billing, and cloud architectures built by Ethisyn.",
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
    { label: "SaaS Development", href: "/saas-development" },
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
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-500/20 via-white/10 to-transparent blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            BUILD // SaaS Product Engineering
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-white max-w-5xl leading-[1.08] mb-8">
            SaaS Product Engineering &{" "}
            <span className="italic font-serif text-white/90">Rapid MVP</span> Sprints.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed font-sans mb-10">
            From architecture to paying customers in 4 weeks. Multi-tenant security, Stripe subscriptions, serverless PostgreSQL, and sub-300ms shell loads engineered by senior product builders.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary" size="lg">
              Launch Your SaaS Sprint
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              href="https://wa.me/918096131202?text=Hi%20Ethisyn,%20I'd%20like%20to%20discuss%20building%20a%20SaaS%20MVP."
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
              <div className="text-2xl sm:text-3xl font-mono text-white">4 Weeks</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Average MVP Delivery</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">&lt; 300ms</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Shell Load Benchmark</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">100%</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">IP & Repository Ownership</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">150+ Tests</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Automated QA Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Evidence: GoWider */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08] bg-zinc-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl border border-white/[0.12] bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
                Verified Production Proof
              </div>
              <h2 className="text-3xl sm:text-4xl font-sans text-white mb-4">
                GoWider: Shipped in 4 Weeks with $0 Video Hosting Fees
              </h2>
              <p className="text-zinc-300 font-sans leading-relaxed mb-6">
                We engineered GoWider (<a href="https://gowider.in" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-emerald-400">gowider.in</a>) as an Awwwards-grade portfolio SaaS for filmmakers. Built on Next.js 15, Neon Serverless Postgres, and a zero-binary streaming engine that eliminated thousands in video hosting fees.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/[0.08] pt-6">
                <div>
                  <div className="text-xl font-mono text-white">Sub-300ms</div>
                  <div className="text-xs text-zinc-400">Shell Load Time</div>
                </div>
                <div>
                  <div className="text-xl font-mono text-white">151/151</div>
                  <div className="text-xs text-zinc-400">Vitest Tests Passing</div>
                </div>
                <div>
                  <div className="text-xl font-mono text-white">$0 / month</div>
                  <div className="text-xs text-zinc-400">Video Storage Fees</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Architecture // SaaS Foundations
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-white">
              SaaS Architectural Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {saasCapabilities.map((item) => {
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
                  <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-4">
                    {item.tagline}
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                    {item.description}
                  </p>
                  <div className="space-y-2 border-t border-white/[0.06] pt-5">
                    {item.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{h}</span>
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
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400">
              SaaS Architectural Scoping
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-light text-white leading-tight">
              Turn your software vision into a production SaaS product.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Schedule a technical scoping session with our founding engineers. We will review your data schemas, user workflows, and provide a fixed-scope 4-week roadmap.
            </p>
            <div className="p-5 rounded-xl border border-white/[0.08] bg-zinc-950/60 space-y-3">
              <div className="text-xs font-mono text-zinc-400">STUDIO GUARANTEES</div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                Guaranteed &lt; 4 business hours response time
              </div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                100% full IP and code repository ownership
              </div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
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
