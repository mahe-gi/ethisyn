"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Zap, ShieldCheck, Users, Code2, Sparkles, Terminal } from "lucide-react";

export function Manifesto() {
  return (
    <section
      id="thesis"
      className="py-28 md:py-44 px-5 sm:px-8 md:px-12 relative bg-black overflow-hidden"
      aria-labelledby="thesis-heading"
    >
      {/* Editorial ambient radial glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/4 w-[650px] h-[350px] bg-white/[0.015] blur-[150px] rounded-full" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-1/3 right-1/4 w-[500px] h-[300px] bg-white/[0.01] blur-[140px] rounded-full" 
      />

      <div className="max-w-[1520px] mx-auto space-y-24 md:space-y-36 relative z-10">
        {/* Massive Editorial Header & Critique Statement */}
        <div className="space-y-8 max-w-5xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs tracking-widest text-[#A1A1AA] uppercase font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Studio Manifesto // Why Agency Bureaucracy Is Dead
          </div>

          <h2
            id="thesis-heading"
            className="font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08]"
          >
            The traditional agency model is dead. We engineer software with high-density craftsmanship, sub-second speed, and zero middlemen.
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#A1A1AA] leading-relaxed max-w-3xl">
            Legacy agencies bill you for account managers, junior delegators, and 60-page slide decks. We eliminated the bloat. At Ethisyn, ambitious founders collaborate directly with founding systems architects, engineers, and designers who commit production code every single day.
          </p>
        </div>

        {/* The Comparative Editorial Table: Legacy Bureaucracy vs. Ethisyn Studio */}
        <div className="space-y-8 pt-10 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#71717A] block font-medium">
                STRUCTURAL CONTRAST
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mt-1">
                The obsolete agency monopoly vs. The high-density studio.
              </h3>
            </div>
            <span className="text-xs text-[#71717A] uppercase tracking-wider font-medium">
              HYDERABAD // EST. 2024
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* The Broken Agency Model */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#080808] border border-white/[0.06] space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <span className="text-xs uppercase tracking-widest text-rose-400 font-medium">
                  THE TRADITIONAL AGENCY PARADOX
                </span>
                <span className="text-xs text-[#71717A] font-medium">01 // BLOAT</span>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-medium text-[#D4D4D8]">
                  Junior delegation disguised as enterprise scale.
                </h4>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  You are pitched by senior partners, but your codebase is handed off to inexperienced interns and offshore subcontractors. Feedback is filtered through 4 layers of account reps playing telephone.
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-xs text-[#71717A]">
                <li className="flex items-center gap-2">
                  <span className="text-rose-400">✕</span>
                  <span>Months of billable hourly drag with no working software</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-400">✕</span>
                  <span>Generic templates, brittle AI wrappers, and bloated bundles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-400">✕</span>
                  <span>Client locked into endless maintenance retainers</span>
                </li>
              </ul>
            </div>

            {/* The Ethisyn Studio Model */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#090909] border border-white/[0.14] space-y-6 relative group shadow-2xl">
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 bg-white/[0.03] group-hover:bg-white/[0.06] rounded-full blur-2xl transition-colors duration-500" 
              />

              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10">
                <span className="text-xs uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  THE ETHISYN DISCIPLINE
                </span>
                <span className="text-xs text-[#A1A1AA] font-medium">02 // CRAFT</span>
              </div>

              <div className="space-y-4 relative z-10">
                <h4 className="text-xl font-medium text-white">
                  Direct access to founding domain architects.
                </h4>
                <p className="text-sm text-[#D4D4D8] leading-relaxed">
                  Zero middlemen. You communicate directly via shared Slack channels with the exact engineers designing your systems, writing your code, and architecting your multi-agent graphs.
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-xs text-[#E4E4E7] relative z-10">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Fixed 4-week production sprint delivery with clear milestones</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Handcrafted, sub-second Next.js and deterministic AI graphs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>100% full IP and code ownership transferred to your team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Core Editorial Principles */}
        <div className="space-y-12 pt-10 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#71717A] block font-medium">
                OUR OPERATING CODE
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mt-1">
                The non-negotiables behind every build.
              </h3>
            </div>

            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-[#D4D4D8] hover:text-white group"
            >
              <span>Meet the Founding Builders</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Principle 01 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl sm:text-5xl font-light text-white/20">01</span>
                <Code2 className="w-5 h-5 text-white/60" />
              </div>
              <h4 className="text-lg sm:text-xl font-medium text-white tracking-tight">
                Craftsmanship Over Commodity
              </h4>
              <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
                Software is not a fungible commodity. Every line of TypeScript, database schema index, and micro-interaction is intentionally authored for durability, elegance, and extreme commercial impact.
              </p>
            </div>

            {/* Principle 02 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl sm:text-5xl font-light text-white/20">02</span>
                <Zap className="w-5 h-5 text-white/60" />
              </div>
              <h4 className="text-lg sm:text-xl font-medium text-white tracking-tight">
                Speed as a Fundamental Feature
              </h4>
              <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
                Sluggish software degrades trust and kills conversion. We aggressively profile bundle sizes, edge cache invalidation, and database latencies to guarantee sub-second global responsiveness.
              </p>
            </div>

            {/* Principle 03 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl sm:text-5xl font-light text-white/20">03</span>
                <ShieldCheck className="w-5 h-5 text-white/60" />
              </div>
              <h4 className="text-lg sm:text-xl font-medium text-white tracking-tight">
                Radical Ownership & Transparency
              </h4>
              <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
                You own 100% of your code, repositories, and secrets from day one. No proprietary vendor lock-in, no hidden retainers. You receive clean, documented architectures your team can scale indefinitely.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Signature & Coordinates */}
        <div className="pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#71717A]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="text-[#A1A1AA]">ETHISYN SYSTEMS STUDIO // HYDERABAD, INDIA</span>
          </div>
          <div>
            <span>PROTOCOL: ZERO BUREAUCRACY // 100% FOUNDER-LED CRAFT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
