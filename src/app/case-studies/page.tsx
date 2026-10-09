import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/ui/ContactForm";
import { siteConfig } from "@/content/site";
import { caseStudies } from "@/content/work";
import {
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies & Proof of Work | Ethisyn",
  description:
    "Explore case studies and verified production evidence by Ethisyn: Custom SaaS platforms (GoWider), Autonomous AI CRM voice agents, and high-intent local growth architectures.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies & Proof of Work | Ethisyn",
    description:
      "Agency-grade proof of work: GoWider (broadcast portfolio SaaS), Autonomous AI Voice Agents, and High-Intent Local SEO engines built in Hyderabad.",
    url: `${siteConfig.url}/case-studies`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Proof of Work | Ethisyn",
    description:
      "Sub-second platforms, autonomous AI workflows, and data-driven growth delivered by founding domain builders.",
  },
};

const categoryIcons = {
  "Custom SaaS Build": Layers,
  "AI Automation Pipeline": Cpu,
  "Local Growth Campaign": TrendingUp,
};

export default function CaseStudiesPage() {
  const workSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/case-studies#webpage`,
    name: "Case Studies & Proof of Work | Ethisyn",
    headline: "Real Systems. Measurable Impact. Shipped to Production.",
    description:
      "In-depth case studies covering custom SaaS builds (GoWider), AI automation pipelines, and high-intent local growth systems engineered by Ethisyn.",
    url: `${siteConfig.url}/case-studies`,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Ethisyn Case Studies",
      itemListElement: caseStudies.map((study, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: study.title,
        description: study.tagline,
        url: `${siteConfig.url}/case-studies#${study.id}`,
      })),
    },
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
      />

      {/* Hero Header */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-white/20 via-zinc-500/10 to-transparent blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-white text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            PROOF OF WORK // PRODUCTION BENCHMARKS
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-white max-w-5xl leading-[1.08] mb-8">
            Real Systems.{" "}
            <span className="italic font-serif text-white/90">Measurable</span> Results.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed font-sans mb-10">
            We don&apos;t deal in theoretical slide decks. Here are production case studies of custom SaaS platforms, autonomous AI voice swarms, and search growth engines engineered and shipped by Ethisyn.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary" size="lg">
              Start Your Project
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              href="https://wa.me/918096131202?text=Hi%20Ethisyn,%20I'd%20like%20to%20discuss%20a%20project%20similar%20to%20your%20case%20studies."
              variant="secondary"
              size="lg"
              isExternal
            >
              Discuss on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Deep Dive */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-24">
          {caseStudies.map((study, index) => {
            const CategoryIcon =
              categoryIcons[study.category as keyof typeof categoryIcons] || Layers;

            return (
              <article
                key={study.id}
                id={study.id}
                className="p-8 sm:p-12 rounded-3xl bg-zinc-950/80 border border-white/[0.08] relative overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                      CASE STUDY 0{index + 1}
                    </span>
                    <Badge variant="neutral">{study.category}</Badge>
                  </div>
                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>{study.liveUrl.replace("https://", "")}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <h2 className="text-3xl sm:text-4xl font-sans text-white mb-3">
                  {study.title}
                </h2>
                <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed mb-8 max-w-4xl">
                  {study.tagline}
                </p>

                {/* Challenge & Strategy Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-white/[0.08]">
                  <div className="space-y-4">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      The Challenge & Goal
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                      {study.challenge.description}
                    </p>
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-zinc-400">
                      <span className="text-white font-medium">Target: </span>
                      {study.challenge.clientGoal}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      {study.strategy.heading}
                    </h3>
                    <div className="space-y-3">
                      {study.strategy.points.map((pt) => (
                        <div key={pt.title} className="text-xs text-zinc-300 space-y-1">
                          <div className="font-medium text-white flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            {pt.title}
                          </div>
                          <div className="text-zinc-400 pl-5.5 leading-relaxed">
                            {pt.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quantitative Results Strip */}
                <div className="mt-8 pt-8 border-t border-white/[0.08]">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6">
                    Production Benchmarks
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {study.results.map((res) => (
                      <div key={res.label}>
                        <div className="text-2xl sm:text-3xl font-mono text-emerald-400">
                          {res.metric}
                        </div>
                        <div className="text-xs font-sans text-white font-medium mt-1">
                          {res.label}
                        </div>
                        <div className="text-[11px] text-zinc-400 mt-0.5">
                          {res.descriptor}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Contact Funnel */}
      <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Start Your Build
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-light text-white leading-tight">
              Let&apos;s build your next production benchmark.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Speak directly with our founding architects in Hyderabad. We review your requirements and provide an exact fixed-scope sprint roadmap within 4 business hours.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ContactForm initialService="BUILD: Web & Software Engineering" />
          </div>
        </div>
      </section>
    </div>
  );
}
