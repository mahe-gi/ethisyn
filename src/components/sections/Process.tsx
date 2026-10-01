"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { 
  FileCode2, 
  Layers, 
  Terminal, 
  Globe2, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Clock 
} from "lucide-react";

interface ProcessStage {
  step: string;
  timeframe: string;
  title: string;
  kicker: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  techTags: string[];
}

const sprintStages: ProcessStage[] = [
  {
    step: "01",
    timeframe: "Week 01",
    kicker: "FOUNDATIONAL ALIGNMENT",
    title: "Architecture & Scope Definition",
    description:
      "We deconstruct your business workflows, eliminate speculative bloat, and produce an ironclad technical specification. Database schemas, API contracts, and edge cases are locked in before writing code.",
    icon: FileCode2,
    deliverables: [
      "Technical Architecture RFC",
      "Database schema & API contracts",
      "Edge-case risk matrix & mitigation",
      "Fixed 4-week sprint scope & milestones",
    ],
    techTags: ["RFC Specs", "PostgreSQL Schemas", "System Design"],
  },
  {
    step: "02",
    timeframe: "Week 02",
    kicker: "ERGONOMIC INTERACTION",
    title: "High-Velocity Prototyping & System Design",
    description:
      "We craft production-grade interactive prototypes with high-fidelity typographic rhythm and responsive ergonomics. You test and refine the real interaction model before frontend implementation.",
    icon: Layers,
    deliverables: [
      "Clickable interactive prototypes",
      "Tailwind design token library",
      "Micro-interaction & kinetic specs",
      "Design-to-code component schema",
    ],
    techTags: ["Figma Systems", "Design Tokens", "Ergonomics"],
  },
  {
    step: "03",
    timeframe: "Weeks 03-04",
    kicker: "PRODUCTION-GRADE CODE",
    title: "Deterministic Engineering & Security Hardening",
    description:
      "Fullstack implementation with end-to-end type safety, autonomous AI agent pipelines, and automated test coverage. Aggressive profiling guarantees sub-second load times and zero-downtime reliability.",
    icon: Terminal,
    deliverables: [
      "Type-safe Next.js & React codebase",
      "Autonomous AI graph & RAG integration",
      "Automated unit & E2E test suites",
      "SOC-2 / OWASP security profiling",
    ],
    techTags: ["Next.js / TypeScript", "LangGraph", "Vitest & Playwright"],
  },
  {
    step: "04",
    timeframe: "Continuous SLA",
    kicker: "GLOBAL RESILIENCE",
    title: "Global Edge Deployment & 24/7 SLA Handover",
    description:
      "We deploy to distributed edge CDNs with sub-second TTFB globally. After production launch, we remain on-call with real-time telemetry, continuous security updates, and performance tuning.",
    icon: Globe2,
    deliverables: [
      "Global multi-region CDN routing",
      "Real-time APM & error telemetry",
      "Continuous CI/CD pipeline automation",
      "Guaranteed 24/7 SLA engineering on-call",
    ],
    techTags: ["Cloudflare Edge", "Real-Time APM", "99.99% Uptime"],
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="py-28 md:py-40 px-5 sm:px-8 md:px-12 bg-black relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.012] blur-[150px] rounded-full" 
      />

      <div className="max-w-[1520px] mx-auto space-y-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-white/[0.08]">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs tracking-widest text-[#A1A1AA] uppercase font-medium">
              <Clock className="w-3.5 h-3.5 text-white" />
              Sprint Delivery Methodology // 4-Stage Playbook
            </div>

            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.08]"
            >
              From technical specification to production at edge velocity.
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#A1A1AA] leading-relaxed max-w-2xl">
              A transparent, deterministic engineering sprint with zero middleman telephone games. High-density execution from architectural scope definition to continuous 24/7 SLA handover.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="neutral" size="md" dot>
              4-WEEK GUARANTEED CADENCE
            </Badge>
            <Button href="/#contact" variant="primary" size="sm" showArrow>
              Start Sprint Scoping
            </Button>
          </div>
        </div>

        {/* Clean Editorial Timeline Flow (No Clunky Wireframe Boxes) */}
        <div className="relative">
          {/* Subtle horizontal timeline track line for desktop */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-[22px] left-0 right-0 h-[1px] bg-gradient-to-r from-white/[0.2] via-white/[0.1] to-white/[0.05]" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {sprintStages.map((stage) => {
              const StageIcon = stage.icon;

              return (
                <div
                  key={stage.step}
                  className="group relative pt-8 lg:pt-12 flex flex-col justify-between transition-all duration-300"
                >
                  {/* Top node marker */}
                  <div className="flex items-center justify-between pb-6">
                    {/* Node bead on timeline */}
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-[#0A0A0A] border border-white/[0.15] group-hover:border-white/[0.4] group-hover:bg-white/[0.06] flex items-center justify-center transition-all duration-300 z-10 shadow-lg">
                        <StageIcon className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-[#71717A] group-hover:text-white transition-colors font-medium">
                        STAGE {stage.step}
                      </span>
                    </div>

                    <Badge variant="neutral" size="sm">
                      {stage.timeframe}
                    </Badge>
                  </div>

                  {/* Stage Content */}
                  <div className="space-y-4">
                    <span className="text-xs uppercase tracking-widest text-emerald-400 block font-medium">
                      {stage.kicker}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                      {stage.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
                      {stage.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="pt-4 space-y-2 border-t border-white/[0.06]">
                      <span className="text-xs uppercase tracking-widest text-[#71717A] block font-medium">
                        KEY DELIVERABLES
                      </span>
                      <ul className="space-y-2 text-xs text-[#D4D4D8]">
                        {stage.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white/40 group-hover:text-emerald-400 transition-colors mt-0.5 flex-shrink-0" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {stage.techTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] text-[#71717A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Studio Delivery Commitments Bar */}
        <div className="pt-10 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <h4 className="text-sm font-medium text-white">100% IP & Code Ownership</h4>
            </div>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Every repository, Figma file, database migration, and CI/CD secret is transferred directly to your organization.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <h4 className="text-sm font-medium text-white">Direct Architect Access</h4>
            </div>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Zero junior account managers or sales reps. You collaborate directly with the founding engineers building your system.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-emerald-400" />
              <h4 className="text-sm font-medium text-white">Sub-Second Global Edge</h4>
            </div>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Guaranteed 100/100 Core Web Vitals, sub-300ms global TTFB, and zero-compromise production performance.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <h4 className="text-sm font-medium text-white">24/7 SLA Handover</h4>
            </div>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Continuous monitoring, automated incident alert channels, and proactive performance optimizations post-launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
