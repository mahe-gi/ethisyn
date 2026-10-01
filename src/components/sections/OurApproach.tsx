import React from "react";
import { Compass, FileCode2, Layers, Send, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    phase: "Understand",
    headline: "Deconstruct Goals & Users",
    description: "We first understand your business model, core operational bottleneck, end users, and commercial goals. Zero assumptions.",
    icon: Compass,
    milestone: "Discovery & Requirements",
  },
  {
    number: "02",
    phase: "Plan",
    headline: "Define Architecture & Roadmap",
    description: "We define the right solution, select practical technology, model database schemas, and establish a fixed-timeline execution roadmap.",
    icon: FileCode2,
    milestone: "Solution Specification",
  },
  {
    number: "03",
    phase: "Build",
    headline: "Engineer, Automate & Create",
    description: "Our engineering, automation, and creative teams design and develop the solution with clean code, type safety, and real-time previews.",
    icon: Layers,
    milestone: "Sprint Execution",
  },
  {
    number: "04",
    phase: "Launch",
    headline: "Deploy to Production & Scale",
    description: "We help take the product, website, automation pipeline, or campaign live with zero downtime, edge CDN caching, and automated testing.",
    icon: Send,
    milestone: "Production Release",
  },
  {
    number: "05",
    phase: "Improve",
    headline: "Iterate with Real Data",
    description: "We use customer feedback, analytics data, and actual business requirements to continuously refine and optimize performance.",
    icon: TrendingUp,
    milestone: "Continuous Evolution",
  },
];

export function OurApproach() {
  return (
    <section
      className="py-24 sm:py-32 md:py-40 px-5 sm:px-8 md:px-12 bg-black border-t border-white/[0.08]"
      aria-label="Our Approach: Understand, Plan, Build, Launch, Improve"
    >
      <div className="max-w-[1520px] mx-auto space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs uppercase tracking-widest font-medium text-zinc-400">
              METHODOLOGY // OUR 5-STEP APPROACH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.08]">
            How we take you from concept to execution.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#A1A1AA] leading-relaxed">
            A disciplined, predictable process that eliminates uncertainty, bureaucratic delays, and communication breakdown.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 relative">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.phase}
                className="rounded-2xl border border-white/[0.08] bg-[#080808] p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-white/[0.2] transition-all duration-300 relative group"
              >
                <div className="space-y-4">
                  {/* Top: Step Number + Icon */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5">
                    <span className="text-xs uppercase tracking-widest font-medium text-emerald-400">
                      STEP {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
                      <Icon className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>

                  {/* Title & Phase */}
                  <div className="space-y-1.5">
                    <span className="text-xs uppercase tracking-wider text-white font-medium block">
                      {step.phase}
                    </span>
                    <h3 className="text-lg font-medium text-white tracking-tight">
                      {step.headline}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Milestone Badge */}
                <div className="pt-3 border-t border-white/[0.06]">
                  <span className="text-[10px] text-[#71717A] uppercase tracking-wider block">
                    {step.milestone}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
