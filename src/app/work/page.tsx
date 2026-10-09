import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
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
  title: "Proof of Work & Case Studies | Ethisyn",
  description:
    "Explore case studies and proof of work by Ethisyn: Custom SaaS platforms (GoWider), Autonomous AI CRM voice agents, and high-intent local growth architectures.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Proof of Work & Case Studies | Ethisyn",
    description:
      "Agency-grade proof of work: GoWider (broadcast portfolio SaaS), Autonomous AI Voice Agents, and High-Intent Local SEO engines built in Hyderabad.",
    url: `${siteConfig.url}/work`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proof of Work & Case Studies | Ethisyn",
    description:
      "Sub-second platforms, autonomous AI workflows, and data-driven growth delivered by founding domain builders.",
  },
};

const categoryIcons = {
  "Custom SaaS Build": Layers,
  "AI Automation Pipeline": Cpu,
  "Local Growth Campaign": TrendingUp,
};

export default function WorkPage() {
  const workSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/work#webpage`,
    name: "Proof of Work & Case Studies | Ethisyn",
    headline: "Real Systems. Measurable Impact. Shipped to Production.",
    description:
      "In-depth case studies covering custom SaaS builds (GoWider), AI automation pipelines, and high-intent local growth systems engineered by Ethisyn.",
    url: `${siteConfig.url}/work`,
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
        url: `${siteConfig.url}/work#${study.id}`,
      })),
    },
  };

  return (
    <div className="pt-28 md:pt-36 pb-28 px-5 sm:px-8 md:px-12 bg-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
      />

      <div className="max-w-[1520px] mx-auto space-y-16 md:space-y-24">
        {/* Header Hero Section */}
        <div className="space-y-6 max-w-4xl">
          <Breadcrumbs items={[{ label: "Proof of Work" }]} />

          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#71717A] font-medium">
              PROOF OF WORK // CASE STUDIES & IMPACT
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.05]">
            Real systems. Measurable impact. Shipped to production.
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-normal text-[#A1A1AA] leading-relaxed max-w-3xl">
            We don&apos;t build speculative mockups. Every platform, AI workflow, and growth engine we craft is deployed into real-world production with verifiable performance benchmarks, rigorous security, and zero bloat.
          </p>
        </div>

        {/* Quick Summary Table */}
        <div className="border border-white/[0.08] rounded-2xl bg-[#080808] overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#71717A] font-medium">
                AT-A-GLANCE BENCHMARKS
              </p>
              <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight mt-1">
                Selected Deployments Overview
              </h2>
            </div>
            <Badge variant="neutral" size="sm">
              3 VERIFIED CASE STUDIES
            </Badge>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.02] border-b border-white/[0.06] text-xs uppercase tracking-wider text-[#71717A]">
                <tr>
                  <th className="py-4 px-6 font-medium">Project</th>
                  <th className="py-4 px-6 font-medium">Category</th>
                  <th className="py-4 px-6 font-medium">Key Metric / Result</th>
                  <th className="py-4 px-6 font-medium">Live / Scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-[#D4D4D8]">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>GoWider</span>
                  </td>
                  <td className="py-4 px-6 text-[#A1A1AA]">Custom SaaS Platform</td>
                  <td className="py-4 px-6 text-white font-medium">
                    Sub-second performance • Launched in 4 weeks
                  </td>
                  <td className="py-4 px-6">
                    <a
                      href="https://gowider.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-400 hover:underline"
                    >
                      <span>Production SaaS (gowider.in)</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>AI Inbound Agent</span>
                  </td>
                  <td className="py-4 px-6 text-[#A1A1AA]">AI Automation Pipeline</td>
                  <td className="py-4 px-6 text-white font-medium">
                    Saved 18 hours/week • 15s lead response
                  </td>
                  <td className="py-4 px-6 text-[#A1A1AA]">Enterprise CRM & Voice</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Local Growth Engine</span>
                  </td>
                  <td className="py-4 px-6 text-[#A1A1AA]">Local SEO & Conversion</td>
                  <td className="py-4 px-6 text-white font-medium">
                    40+ monthly inbound leads • Top 3 Map Pack
                  </td>
                  <td className="py-4 px-6 text-[#A1A1AA]">Organic Search & Funnels</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Case Study Deep Dives */}
        <div className="space-y-16 sm:space-y-20">
          {caseStudies.map((study, idx) => {
            const Icon = categoryIcons[study.category as keyof typeof categoryIcons] || Layers;

            return (
              <Card
                key={study.id}
                id={study.id}
                variant="interactive"
                className="p-8 sm:p-10 md:p-12 lg:p-14 border-white/[0.08] hover:border-white/[0.2] bg-[#080808] transition-all duration-300 rounded-3xl space-y-10 scroll-mt-32"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-white/[0.06]">
                  <div className="space-y-3 flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-sm text-emerald-400 font-medium">
                        [CASE 0{idx + 1}]
                      </span>
                      <Badge variant="neutral" size="sm">
                        {study.badge}
                      </Badge>
                      <span className="text-xs text-[#71717A] uppercase tracking-wider">
                        Timeline: {study.timeline}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
                      {study.title}
                    </h2>

                    <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-3xl">
                      {study.tagline}
                    </p>
                  </div>

                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs uppercase tracking-wider text-white font-medium transition-colors shrink-0"
                    >
                      <Globe className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Visit Live Platform</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Specs Strip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-xs">
                  <div>
                    <span className="text-[#71717A] uppercase tracking-wider block font-medium">
                      Client / Industry
                    </span>
                    <span className="text-white font-medium text-sm mt-1 block">
                      {study.clientIndustry}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#71717A] uppercase tracking-wider block font-medium">
                      Key Deliverables
                    </span>
                    <span className="text-[#D4D4D8] text-xs mt-1 block leading-relaxed">
                      {study.deliverables.join(" • ")}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#71717A] uppercase tracking-wider block font-medium">
                      Core Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {study.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-white/[0.04] text-[11px] text-[#A1A1AA] border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2-Column Core Architecture Breakdown */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left Column: The Challenge & Client Goal */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#71717A] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>1. The Challenge</span>
                      </div>
                      <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                        {study.challenge.description}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-amber-500/[0.03] border border-amber-500/20 space-y-2">
                      <span className="text-xs uppercase tracking-wider text-amber-400 font-medium block">
                        Target Client Goal:
                      </span>
                      <p className="text-xs sm:text-sm text-[#E4E4E7] leading-relaxed">
                        {study.challenge.clientGoal}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: The Architectural Strategy */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#71717A] font-medium mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>2. Architectural Strategy (Engineered by Ethisyn)</span>
                    </div>

                    <div className="space-y-3.5">
                      {study.strategy.points.map((point, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5"
                        >
                          <h3 className="text-sm font-medium text-white flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{point.title}</span>
                          </h3>
                          <p className="text-xs sm:text-[13px] text-[#A1A1AA] leading-relaxed pl-5.5">
                            {point.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Concrete Results & Impact Stats */}
                <div className="pt-8 border-t border-white/[0.06] space-y-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#71717A] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>3. Concrete Results & Production Impact</span>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {study.results.map((res, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-5 rounded-2xl bg-[#0e0e0e] border border-white/[0.06] space-y-1.5"
                      >
                        <div className="text-2xl sm:text-3xl font-medium text-emerald-400 tracking-tight">
                          {res.metric}
                        </div>
                        <div className="text-xs font-medium uppercase tracking-wider text-white">
                          {res.label}
                        </div>
                        <div className="text-xs text-[#71717A] leading-relaxed">
                          {res.descriptor}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Contact Callout */}
        <div className="p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0c0c0c] to-black flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="neutral" size="sm">
              DIRECT BUILDER COLLABORATION
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight">
              Have a high-stakes product or automation pipeline to build?
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Work directly with our founding domain partners in Hyderabad. Zero junior handoffs, sub-second performance standards, and rapid concept-to-production turnaround.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <Button href="/#contact" variant="primary" size="lg" showArrow className="w-full sm:w-auto">
              Start Scoping Project
            </Button>
            <Button
              href={`mailto:${siteConfig.emails.general}`}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Direct Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
