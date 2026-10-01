"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Bot,
  TrendingUp,
  Video,
  Plus,
  Minus,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/content/services";

interface PillarEditorialConfig {
  leadPitch: string;
  scopeSummary: string;
  categoryTags: string[];
  visualType: "build" | "automate" | "grow" | "create";
  metrics: { value: string; label: string }[];
}

const editorialConfig: Record<string, PillarEditorialConfig> = {
  BUILD: {
    leadPitch:
      "From websites to complete software products, we build reliable digital systems around your business needs.",
    scopeSummary: "Websites, applications, SaaS products, and custom business software.",
    categoryTags: [
      "Business Websites",
      "Web Applications",
      "Mobile Apps (iOS & Android)",
      "SaaS Products",
      "Custom Business Software",
      "CRM Systems",
      "Admin Portals",
      "APIs & Integrations",
      "E-Commerce Solutions",
      "Backend Architecture",
    ],
    visualType: "build",
    metrics: [
      { value: "< 500ms", label: "Edge Response Time" },
      { value: "100/100", label: "Core Web Vitals" },
    ],
  },
  AUTOMATE: {
    leadPitch:
      "We connect AI, software, and business workflows to automate repetitive processes and make operations more efficient.",
    scopeSummary: "AI agents, voice AI, workflows, integrations, and business automation.",
    categoryTags: [
      "AI Agents",
      "AI Voice Agents",
      "AI Chatbots",
      "Workflow Automation",
      "Business Process Automation",
      "CRM Automation",
      "Document Intelligence",
      "Customer Support Automation",
      "Lead Management Automation",
      "API-based Automation",
    ],
    visualType: "automate",
    metrics: [
      { value: "< 800ms", label: "Conversational Voice SLA" },
      { value: "24/7", label: "Zero-Latency Triage" },
    ],
  },
  GROW: {
    leadPitch:
      "We help businesses become more visible online, reach the right audience, and turn digital attention into business opportunities.",
    scopeSummary: "SEO, Google Ads, Meta Ads, social media marketing, and lead generation.",
    categoryTags: [
      "Search Engine Optimization (SEO)",
      "Local SEO & Google Maps",
      "Google Business Profile",
      "Google Search Ads",
      "Meta & Instagram Ads",
      "Social Media Management",
      "Content Marketing",
      "Email & SMS Journeys",
      "Analytics & Reporting",
      "Lead Generation",
    ],
    visualType: "grow",
    metrics: [
      { value: "3x", label: "Qualified Pipeline Growth" },
      { value: "Top 3", label: "Local Search Dominance" },
    ],
  },
  CREATE: {
    leadPitch:
      "We create clear, engaging content that helps businesses communicate their value and stay visible across digital channels.",
    scopeSummary: "Video production, social content, promotional campaigns, and brand creatives.",
    categoryTags: [
      "Video Production",
      "Commercial Videography",
      "Cinematic Video Editing",
      "Social Media Content",
      "Instagram Reels & Formats",
      "LinkedIn Authority Posts",
      "Promotional Campaigns",
      "Marketing Creatives",
      "Brand Identities",
      "Digital Storytelling",
    ],
    visualType: "create",
    metrics: [
      { value: "4K 60fps", label: "Cinematic Capture Standard" },
      { value: "3x", label: "Audience Retention Uplift" },
    ],
  },
};

const pillarIcons = {
  BUILD: Code2,
  AUTOMATE: Bot,
  GROW: TrendingUp,
  CREATE: Video,
};

export function CorePillars() {
  // 01 BUILD open by default, accordion drawer behavior like reference
  const [expandedPillar, setExpandedPillar] = useState<string>("BUILD");

  const togglePillar = (pillar: string) => {
    setExpandedPillar((prev) => (prev === pillar ? "" : pillar));
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 md:py-40 px-5 sm:px-8 md:px-12 bg-black border-t border-white/[0.08] relative"
      aria-label="Core Capabilities: Build, Automate, Grow, Create"
    >
      <div className="max-w-[1520px] mx-auto space-y-14 sm:space-y-20">
        {/* Section Header: Precision Typography */}
        <div className="space-y-5 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs uppercase tracking-widest font-medium text-emerald-400">
              04 CORE PILLARS // WHAT WE DO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.08]">
            Technology that moves your business forward.
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#A1A1AA] leading-relaxed max-w-3xl">
            We help businesses build digital products, automate operations, grow their online presence, and create content that connects with customers.
          </p>
        </div>

        {/* Editorial Architectural Index (Léo Parpeix / Locomotive Style) */}
        <div className="border-t border-white/[0.12] divide-y divide-white/[0.08]">
          {servicesData.map((service) => {
            const isExpanded = expandedPillar === service.pillar;
            const config = editorialConfig[service.pillar];
            const Icon = pillarIcons[service.pillar] || Code2;

            return (
              <article
                key={service.id}
                className={`transition-colors duration-300 ${
                  isExpanded ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                }`}
              >
                {/* Collapsed Table Header Row */}
                <button
                  type="button"
                  onClick={() => togglePillar(service.pillar)}
                  className="w-full py-7 sm:py-9 flex items-center justify-between text-left group cursor-pointer transition-all"
                  aria-expanded={isExpanded}
                >
                  <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center flex-1 pr-4 sm:pr-8">
                    {/* Index Number */}
                    <div className="col-span-2 sm:col-span-1">
                      <span
                        className={`text-sm sm:text-base font-medium transition-colors ${
                          isExpanded ? "text-emerald-400" : "text-[#71717A] group-hover:text-white"
                        }`}
                      >
                        {service.index}
                      </span>
                    </div>

                    {/* Pillar Name & Title */}
                    <div className="col-span-10 sm:col-span-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-white tracking-tight">
                        {service.pillar}
                      </span>
                      <span className="text-xs sm:text-sm text-[#A1A1AA] font-normal truncate">
                        {service.title}
                      </span>
                    </div>

                    {/* Scope Summary (Visible on tablet & desktop) */}
                    <div className="hidden md:block md:col-span-4">
                      <span className="text-sm text-[#A1A1AA] line-clamp-1 font-light">
                        {config.scopeSummary}
                      </span>
                    </div>

                    {/* Delivery Standard / Badge */}
                    <div className="hidden lg:block lg:col-span-3 text-right">
                      <span className="text-xs text-[#71717A] uppercase tracking-wider font-medium">
                        100% In-House Direct
                      </span>
                    </div>
                  </div>

                  {/* Expand / Close Icon Toggle */}
                  <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-white/[0.1] bg-white/[0.03] text-[#A1A1AA] group-hover:text-white group-hover:border-white/30 transition-all">
                    {isExpanded ? (
                      <Minus className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Expanded Drawer (2-Column Editorial & Visual Preview) */}
                {isExpanded && (
                  <div className="pb-12 sm:pb-16 pt-2 px-2 sm:px-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                      {/* Left Column: Editorial Proposition, Narrative, Capabilities & Direct Action */}
                      <div className="lg:col-span-7 space-y-7">
                        {/* Lead Pitch */}
                        <p className="text-xl sm:text-2xl md:text-3xl text-white font-medium tracking-tight leading-snug">
                          {config.leadPitch}
                        </p>

                        {/* Extended Context */}
                        <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-light">
                          {service.description}
                        </p>

                        {/* Capabilities Chips */}
                        <div className="space-y-3 pt-2">
                          <span className="text-xs uppercase tracking-widest text-[#71717A] font-medium block">
                            Scope & Capabilities Included:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {config.categoryTags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs text-[#E4E4E7] px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-emerald-400/30 transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Delivery Guarantee Strip */}
                        <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                            <p className="text-xs sm:text-sm text-[#A1A1AA]">
                              Direct founder collaboration. Zero intermediaries or third-party outsourcing.
                            </p>
                          </div>
                          <span className="hidden sm:inline-block text-xs uppercase tracking-wider text-emerald-400 font-medium shrink-0">
                            DIRECT ACCESS
                          </span>
                        </div>

                        {/* Actions */}
                        <div className="pt-2 flex flex-wrap items-center gap-4">
                          <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-emerald-400 transition-colors shadow-lg"
                          >
                            <span>Start a {service.pillar} Project</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>

                          <Link
                            href="/#products"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.12] text-white hover:border-white/30 text-xs uppercase tracking-widest transition-colors"
                          >
                            <span>View Case Studies</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A]" />
                          </Link>
                        </div>
                      </div>

                      {/* Right Column: Architectural Visual Preview (Inspired by Reference Mockup Frame) */}
                      <div className="lg:col-span-5 rounded-2xl border border-white/[0.12] bg-[#0c0c0c] p-6 sm:p-8 space-y-6">
                        {/* Terminal Window Header */}
                        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider ml-2 font-medium">
                              {service.badge}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>DEPLOYED</span>
                          </div>
                        </div>

                        {/* Pillar-Specific Preview Visuals */}
                        {config.visualType === "build" && (
                          <div className="space-y-4">
                            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-medium text-white">Full-Stack Application Layer</span>
                                <span className="text-emerald-400 text-[10px]">NEXT.JS / REACT</span>
                              </div>
                              <p className="text-xs text-[#A1A1AA]">
                                Edge-rendered web applications & cross-platform React Native mobile platforms with sub-second time to interactive.
                              </p>
                            </div>

                            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-medium text-white">API & Database Persistence</span>
                                <span className="text-zinc-400 text-[10px]">POSTGRES / EDGE</span>
                              </div>
                              <p className="text-xs text-[#A1A1AA]">
                                Scalable Postgres backends, real-time sync, automated backups, and zero-latency webhook architectures.
                              </p>
                            </div>

                            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-medium text-white">Production Governance</span>
                                <span className="text-emerald-400 text-[10px]">CI/CD AUTOMATION</span>
                              </div>
                              <p className="text-xs text-[#A1A1AA]">
                                Zero-downtime deployment pipelines with automated static typing, linting, and end-to-end test execution.
                              </p>
                            </div>
                          </div>
                        )}

                        {config.visualType === "automate" && (
                          <div className="space-y-4">
                            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-medium text-white">Omnichannel Lead Ingestion</span>
                                <span className="text-emerald-400 text-[10px]">WHATSAPP / VOICE API</span>
                              </div>
                              <p className="text-xs text-[#A1A1AA]">
                                Connects WhatsApp Business API and low-latency voice bots directly into your core business workflow.
                              </p>
                            </div>

                            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-medium text-white">Multi-Agent Reasoning Core</span>
                                <span className="text-zinc-400 text-[10px]">AUTONOMOUS TRIAGE</span>
                              </div>
                              <p className="text-xs text-[#A1A1AA]">
                                Context-aware reasoning agents that qualify prospects, verify documents, and structure incoming customer requirements.
                              </p>
                            </div>

                            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-medium text-white">Operational Execution</span>
                                <span className="text-emerald-400 text-[10px]">CRM & INVOICING</span>
                              </div>
                              <p className="text-xs text-[#A1A1AA]">
                                Automated CRM lead routing, 1-click invoice creation, and instant notifications to your founding team.
                              </p>
                            </div>
                          </div>
                        )}

                        {config.visualType === "grow" && (
                          <div className="space-y-4">
                            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-medium text-white">Generative Engine Optimization (GEO)</span>
                                <span className="text-emerald-400 text-[10px]">AI ENGINE SEARCH</span>
                              </div>
                              <p className="text-xs text-[#A1A1AA]">
                                Structured Schema.org knowledge graphs engineered for ChatGPT, Perplexity, Claude, and modern search crawlers.
                              </p>
                            </div>

                            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-medium text-white">Local Map & Search Dominance</span>
                                <span className="text-zinc-400 text-[10px]">GOOGLE MAPS RANK</span>
                              </div>
                              <p className="text-xs text-[#A1A1AA]">
                                High-intent local Google Business Profile ranking with automated review syndication and citation monitoring.
                              </p>
                            </div>

                            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-medium text-white">Paid Acquisition Engines</span>
                                <span className="text-emerald-400 text-[10px]">GOOGLE & META ADS</span>
                              </div>
                              <p className="text-xs text-[#A1A1AA]">
                                Targeted advertising campaigns with pixel tracking, funnel testing, and transparent CAC/ROAS attribution.
                              </p>
                            </div>
                          </div>
                        )}

                        {config.visualType === "create" && (
                          <div className="space-y-4">
                            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-medium text-white">Commercial Videography & 4K Shoots</span>
                                <span className="text-emerald-400 text-[10px]">CINEMATIC CAMERAS</span>
                              </div>
                              <p className="text-xs text-[#A1A1AA]">
                                On-location corporate and product video production with professional lighting, audio, and color grading.
                              </p>
                            </div>

                            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-medium text-white">High-Retention Social Reels</span>
                                <span className="text-zinc-400 text-[10px]">INSTAGRAM & LINKEDIN</span>
                              </div>
                              <p className="text-xs text-[#A1A1AA]">
                                Dynamic motion hooks, sound design, and retention-focused vertical edits designed for viral engagement.
                              </p>
                            </div>

                            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-medium text-white">Brand Tokens & Identity</span>
                                <span className="text-emerald-400 text-[10px]">VISUAL SYSTEMS</span>
                              </div>
                              <p className="text-xs text-[#A1A1AA]">
                                Scalable typography systems, campaign collateral, and unified brand assets across all digital touchpoints.
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Benchmark Output Card */}
                        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                          {config.metrics.map((m) => (
                            <div key={m.label}>
                              <span className="text-[10px] text-[#71717A] uppercase tracking-widest block font-medium">
                                {m.label}
                              </span>
                              <span className="text-2xl font-medium text-emerald-400 tracking-tight">
                                {m.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
