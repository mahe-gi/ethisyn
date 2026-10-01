"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Bot,
  TrendingUp,
  Video,
  MapPin,
  Clock,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Check,
  Mail,
  Sparkles,
  ShieldCheck,
  Cpu,
  Coins,
  ChevronDown,
  ChevronUp,
  Flame,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JobRole, PillarType, careersData } from "@/content/careers";

const pillarIcons: Record<PillarType, React.ElementType> = {
  BUILD: Code2,
  AUTOMATE: Bot,
  GROW: TrendingUp,
  CREATE: Video,
};

const perkIcons: Record<string, React.ElementType> = {
  Coins: Coins,
  Cpu: Cpu,
  ShieldZap: Zap,
  Sparkles: Sparkles,
  MapPin: MapPin,
  Flame: Flame,
};

export function CareersView() {
  const [selectedPillar, setSelectedPillar] = useState<"ALL" | PillarType>("ALL");
  const [expandedRoleId, setExpandedRoleId] = useState<string | null>(
    careersData.roles[0]?.id || null
  );
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const filteredRoles =
    selectedPillar === "ALL"
      ? careersData.roles
      : careersData.roles.filter((role) => role.pillar === selectedPillar);

  const handleCopyEmail = (roleTitle?: string) => {
    const textToCopy = careersData.applicationGuide.primaryEmail;
    navigator.clipboard.writeText(textToCopy);
    setCopiedEmail(roleTitle || "default");
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2500);
  };

  const createMailtoLink = (role: JobRole) => {
    const subject = encodeURIComponent(
      `[Application] ${role.title} — [Your Name]`
    );
    const body = encodeURIComponent(
      `Hello ETHISYN Team,\n\nI am applying for the ${role.title} position based in Hyderabad (Hybrid).\n\n• Portfolio / GitHub / Live URLs: \n• Hardest problem solved recently: \n• Current Location & Earliest Start Date: \n\nLooking forward to hearing from you.\n\nBest,\n`
    );
    return `mailto:${role.applyEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 4 Pillars Overview Nav / Tabs */}
      <section id="open-roles" className="space-y-8 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              AVAILABLE POSITIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.08]">
              Open craft positions across our 4 pillars.
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl">
              We look for self-directed craftspeople with an uncompromising standard of execution. All roles are based at our Hyderabad studio with hybrid flexibility.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedPillar("ALL")}
              className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-200 border ${
                selectedPillar === "ALL"
                  ? "bg-white text-black border-white font-medium"
                  : "bg-white/[0.03] text-[#A1A1AA] border-white/[0.08] hover:border-white/[0.2] hover:text-white"
              }`}
            >
              ALL PILLARS ({careersData.roles.length})
            </button>
            {(["BUILD", "AUTOMATE", "GROW", "CREATE"] as PillarType[]).map(
              (pillar) => {
                const count = careersData.roles.filter(
                  (r) => r.pillar === pillar
                ).length;
                const Icon = pillarIcons[pillar];
                return (
                  <button
                    key={pillar}
                    onClick={() => setSelectedPillar(pillar)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-200 border ${
                      selectedPillar === pillar
                        ? "bg-white text-black border-white font-medium"
                        : "bg-white/[0.03] text-[#A1A1AA] border-white/[0.08] hover:border-white/[0.2] hover:text-white"
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{pillar}</span>
                    <span className="text-[10px] opacity-70">({count})</span>
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* Roles List */}
        <div className="space-y-6">
          {filteredRoles.map((role) => {
            const isExpanded = expandedRoleId === role.id;
            const Icon = pillarIcons[role.pillar];

            return (
              <div
                key={role.id}
                id={role.id}
                className={`rounded-2xl border transition-all duration-300 scroll-mt-28 ${
                  isExpanded
                    ? "border-white/20 bg-gradient-to-b from-white/[0.04] to-black/80 shadow-2xl"
                    : "border-white/[0.08] bg-white/[0.015] hover:border-white/[0.16] hover:bg-white/[0.025]"
                }`}
              >
                {/* Role Header Bar */}
                <div
                  onClick={() =>
                    setExpandedRoleId(isExpanded ? null : role.id)
                  }
                  className="p-6 sm:p-8 cursor-pointer select-none flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.04] text-white">
                        <Icon className="w-3.5 h-3.5 text-white/80" />
                        <span>{role.pillarLabel}</span>
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="text-xs text-[#71717A]">
                        {role.department}
                      </span>
                      {role.priority === "High" && (
                        <Badge variant="warning" size="sm" dot>
                          Priority Hire
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                      {role.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#D4D4D8] max-w-3xl leading-relaxed">
                      {role.shortSummary}
                    </p>

                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-1 text-xs text-[#71717A]">
                      <span className="inline-flex items-center gap-1.5 text-[#A1A1AA]">
                        <MapPin className="w-3.5 h-3.5 text-white/50" />
                        <span>{role.location}</span>
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1.5 text-[#A1A1AA]">
                        <Clock className="w-3.5 h-3.5 text-white/50" />
                        <span>{role.experience}</span>
                      </span>
                      <span>•</span>
                      <span className="text-emerald-400 font-medium">
                        {role.salaryRange}
                      </span>
                    </div>
                  </div>

                  {/* Actions Right */}
                  <div className="flex items-center gap-3 self-start md:self-center shrink-0">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08] transition-colors"
                    >
                      <span>{isExpanded ? "Collapse Spec" : "View Full Spec"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <a
                      href={createMailtoLink(role)}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-white text-black hover:bg-neutral-200 transition-colors shadow-sm"
                    >
                      <span>Apply</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Expanded Detailed Specification */}
                {isExpanded && (
                  <div className="border-t border-white/[0.08] p-6 sm:p-8 md:p-10 space-y-10 animate-in fade-in duration-200">
                    {/* Role Overview */}
                    <div className="space-y-3">
                      <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 block">
                        ROLE MISSION & CONTEXT
                      </span>
                      <p className="text-sm sm:text-base text-[#EDEDED] leading-relaxed">
                        {role.overview}
                      </p>
                    </div>

                    {/* Tech Stack / Tooling Badges */}
                    <div className="space-y-3">
                      <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 block">
                        PRIMARY STACK & OPERATIONAL TOOLING
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {role.stack.map((item) => (
                          <span
                            key={item}
                            className="text-xs font-medium px-3 py-1 rounded-md border border-white/[0.08] bg-white/[0.03] text-white"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Two-Column Grid: Responsibilities & Requirements */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                      {/* Responsibilities */}
                      <div className="space-y-4">
                        <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          KEY RESPONSIBILITIES & DAILY CRAFT
                        </span>
                        <ul className="space-y-3 text-sm text-[#A1A1AA] leading-relaxed">
                          {role.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-xs text-white/30 pt-0.5 select-none shrink-0">
                                0{idx + 1}
                              </span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div className="space-y-4">
                        <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-sky-400" />
                          REQUIREMENTS & TECHNICAL BAR
                        </span>
                        <ul className="space-y-3 text-sm text-[#A1A1AA] leading-relaxed">
                          {role.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bonus Points */}
                    {role.bonusPoints.length > 0 && (
                      <div className="space-y-3 border-t border-white/[0.06] pt-6">
                        <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 block">
                          SUPERPOWERS & BONUS POINTS (NOT REQUIRED, BUT APPRECIATED)
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {role.bonusPoints.map((bonus, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-xl border border-white/[0.05] bg-white/[0.02] flex items-start gap-3 text-xs text-[#A1A1AA]"
                            >
                              <Sparkles className="w-3.5 h-3.5 text-amber-300 mt-0.5 shrink-0" />
                              <span>{bonus}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* First 90 Days Trajectory */}
                    <div className="space-y-4 border-t border-white/[0.06] pt-6">
                      <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 block">
                        EXPECTED TRAJECTORY: YOUR FIRST 90 DAYS
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {role.deliverables90Days.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-xl border border-white/[0.06] bg-black/60 space-y-2"
                          >
                            <span className="text-xs uppercase tracking-widest font-medium text-white/50">
                              PHASE 0{idx + 1}
                            </span>
                            <p className="text-xs text-[#EDEDED] leading-relaxed">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Role Specific Quick Apply Box */}
                    <div className="rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.04] to-transparent p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium text-white">
                          Ready to apply for {role.title}?
                        </h4>
                        <p className="text-xs text-[#A1A1AA]">
                          Send code, portfolio, and past builds to{" "}
                          <span className="text-white font-medium">
                            {role.applyEmail}
                          </span>
                          . No recruiters or automated filters.
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleCopyEmail(role.title)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium border border-white/10 bg-white/[0.03] text-[#A1A1AA] hover:text-white hover:bg-white/[0.08] transition-colors"
                        >
                          {copiedEmail === role.title ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Email</span>
                            </>
                          )}
                        </button>
                        <a
                          href={createMailtoLink(role)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-white text-black hover:bg-neutral-200 transition-colors shadow-sm"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Direct Email Application</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Studio Doctrine & Talent Density Manifesto */}
      <section className="border-t border-white/[0.08] pt-16 md:pt-20 space-y-12">
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 block">
            {careersData.studioManifesto.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.08]">
            {careersData.studioManifesto.title}
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            {careersData.studioManifesto.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careersData.studioManifesto.values.map((val) => (
            <div
              key={val.index}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-white/[0.18] transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-white/40 tracking-widest uppercase">
                    {val.index}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
                <h3 className="text-lg font-medium text-white tracking-tight">
                  {val.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {val.summary}
                </p>
              </div>
              <div className="pt-2 border-t border-white/[0.04]">
                <span className="text-xs uppercase tracking-widest font-medium text-zinc-500">
                  ETHISYN TENET {val.index}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Perks & Compensation Architecture */}
      <section className="border-t border-white/[0.08] pt-16 md:pt-20 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 block">
              STUDIO PERKS & COMPENSATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight leading-[1.08]">
              Engineered for flow, agency, and longevity.
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              We invest heavily in our builders. We eliminate friction so you can focus 100% of your energy on shipping world-class digital products.
            </p>
          </div>
          <Badge variant="neutral" size="md">
            TOP 10% HYDERABAD BENCHMARK
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careersData.perks.map((perk, idx) => {
            const PerkIcon = perkIcons[perk.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent p-6 sm:p-7 space-y-5 hover:border-white/[0.18] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
                      <PerkIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-[#71717A]">
                      0{idx + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white tracking-tight">
                      {perk.title}
                    </h3>
                    <span className="text-xs text-white/50 block mt-0.5">
                      {perk.tagline}
                    </span>
                  </div>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {perk.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.04]">
                  <span className="text-xs font-medium text-emerald-400/90 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {perk.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Transparent 4-Step Hiring Process */}
      <section className="border-t border-white/[0.08] pt-16 md:pt-20 space-y-12">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 block">
            HOW WE HIRE
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight leading-[1.08]">
            Transparent, human, and zero trivia.
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            We respect your time. We do not do 7-round interview marathons or automated LeetCode tests. We evaluate your actual portfolio and past architecture decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careersData.hiringProcess.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-medium px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-white">
                    STEP {step.step}
                  </span>
                  <span className="text-xs font-medium text-emerald-400">
                    {step.timeframe}
                  </span>
                </div>
                <h3 className="text-base font-medium text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.04]">
                <span className="text-xs uppercase tracking-widest font-medium text-zinc-500 block">
                  Outcome: {step.output}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Application Guide Box */}
      <section className="border-t border-white/[0.08] pt-16 md:pt-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#111111] via-[#090909] to-[#040404] p-8 sm:p-12 lg:p-16 space-y-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-white/70" />
              DIRECT APPLICATION GUIDE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.08]">
              {careersData.applicationGuide.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              {careersData.applicationGuide.guarantee}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/[0.06]">
            {/* Steps to apply */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 block">
                WHAT TO INCLUDE IN YOUR EMAIL
              </span>
              <ul className="space-y-3 text-sm text-[#EDEDED] leading-relaxed">
                {careersData.applicationGuide.instructions.map((inst, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-xs text-white/40 pt-0.5 shrink-0">
                      0{i + 1}
                    </span>
                    <span>{inst}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Channel Box */}
            <div className="rounded-2xl border border-white/[0.08] bg-black/60 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 block">
                  DIRECT TALENT INBOX
                </span>
                <div className="space-y-1">
                  <div className="text-lg sm:text-xl font-medium text-white tracking-tight">
                    {careersData.applicationGuide.primaryEmail}
                  </div>
                  <div className="text-xs text-[#71717A]">
                    Fallback: {careersData.applicationGuide.backupEmail}
                  </div>
                </div>
                <p className="text-xs text-[#A1A1AA]">
                  Subject format:{" "}
                  <code className="bg-white/[0.06] text-white px-2 py-0.5 rounded text-xs font-medium">
                    [Role Title] — [Your Name]
                  </code>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleCopyEmail()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border border-white/10 bg-white/[0.05] text-white hover:bg-white/[0.1] transition-colors"
                >
                  {copiedEmail === "default" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${careersData.applicationGuide.primaryEmail}?subject=[Application] Role Inquiry — [Your Name]`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium bg-white text-black hover:bg-neutral-200 transition-colors shadow-md"
                >
                  <span>Compose Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Hyderabad Studio Note */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#71717A]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-white/50" />
              <span>Studio: Hyderabad, Telangana, India (Hybrid Deep Work)</span>
            </div>
            <span>No recruitment agencies or outsourced service firms, please.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
