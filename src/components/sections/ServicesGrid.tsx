"use client";

import React from "react";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/content/services";
import { Button } from "../ui/Button";
import { 
  Terminal, 
  Bot, 
  TrendingUp, 
  Palette, 
  Server, 
  ShieldCheck, 
  ArrowUpRight
} from "lucide-react";

const serviceIcons: Record<ServiceItem["schematicType"], React.ComponentType<{ className?: string }>> = {
  code: Terminal,
  agents: Bot,
  growth: TrendingUp,
  creative: Palette,
  systems: Server,
  support: ShieldCheck,
};

const disciplineBadges: Record<ServiceItem["schematicType"], string> = {
  code: "PRODUCTION CODE",
  agents: "AUTONOMOUS AI",
  growth: "ORGANIC REACH",
  creative: "EXPERIENCE DESIGN",
  systems: "CLOUD ARCHITECTURE",
  support: "GUARANTEED SLA",
};

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-28 md:py-36 px-5 sm:px-8 md:px-12 relative bg-black overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Subtle atmospheric ambient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-20 right-1/4 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03),_transparent_70%)] blur-3xl rounded-full" 
      />

      <div className="max-w-[1520px] mx-auto space-y-16 sm:space-y-20 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-white/[0.06]">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
              Studio Disciplines // 06 Core Capabilities
            </div>
            <h2
              id="services-heading"
              className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.08]"
            >
              Engineered for velocity,{" "}
              <span className="font-serif italic font-normal text-white">
                clarity
              </span>
              , and enduring commercial scale.
            </h2>
            <p className="font-sans text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl">
              We design, engineer, automate, and accelerate modern digital platforms under one roof with direct access to our founding domain leads.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button href="/#contact" variant="primary" size="md" showArrow>
              Start a Project
            </Button>
          </div>
        </div>

        {/* Unboxed Editorial Layout: 6 Core Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-12 lg:gap-y-16">
          {servicesData.map((service) => {
            const Icon = serviceIcons[service.schematicType] || Terminal;
            const badgeLabel = disciplineBadges[service.schematicType] || "CAPABILITY";

            return (
              <article
                key={service.id}
                className="group relative flex flex-col justify-between border-t border-white/[0.06] pt-8 sm:pt-10 transition-colors duration-300"
              >
                {/* Content Block */}
                <div className="space-y-6">
                  {/* Top Bar: Monospace Index + Schematic Icon + Discipline Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs sm:text-sm font-medium tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                        [ {service.index} ]
                      </span>
                      <span className="text-zinc-600 font-mono text-xs">/</span>
                      <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                        {badgeLabel}
                      </span>
                    </div>

                    <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/[0.06] group-hover:border-white/[0.14] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="font-sans text-2xl sm:text-3xl font-medium text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Editorial Description */}
                  <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Focused Deliverable Tags */}
                  <div className="pt-2 space-y-3">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                      CORE DELIVERABLES
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.whatWeBuild.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center px-3 py-1.5 rounded-md bg-white/[0.025] group-hover:bg-white/[0.05] border border-white/[0.06] group-hover:border-white/[0.12] text-xs font-sans text-zinc-300 group-hover:text-white transition-all duration-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 group-hover:bg-emerald-400 mr-2 flex-shrink-0 transition-colors" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stack / Tools Micro-Badges */}
                  {service.tools && service.tools.length > 0 && (
                    <div className="pt-2 flex flex-wrap items-center gap-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 mr-1.5">
                        STACK:
                      </span>
                      {service.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.04] text-[10px] font-mono text-zinc-400"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer: Value Proposition & Direct Inquiry Action */}
                <div className="pt-6 mt-8 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="font-sans text-xs text-zinc-400 font-light italic truncate max-w-[280px] sm:max-w-[360px]">
                    {service.whyItMatters}
                  </span>

                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-300 hover:text-white group-hover:text-white transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
