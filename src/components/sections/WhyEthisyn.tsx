import React from "react";
import { Users2, Target, Cpu, MessagesSquare, CheckCircle, Sparkles } from "lucide-react";

const reasons = [
  {
    title: "One Team",
    kicker: "CROSS-DISCIPLINARY UNITY",
    description: "Technology, AI, automation, growth, and creative capabilities all under one roof. No juggling four different agencies or managing broken handoffs.",
    icon: Users2,
  },
  {
    title: "Business First",
    kicker: "COMMERCIAL PRAGMATISM",
    description: "We focus on solving the actual business problem rather than adding unnecessary complexity, bloated frameworks, or vanity metrics.",
    icon: Target,
  },
  {
    title: "Practical Technology",
    kicker: "BATTLE-HARDENED STACKS",
    description: "We select technology based on what your business actually needs: sub-second Next.js web apps, resilient Python agent pipelines, and proven cloud systems.",
    icon: Cpu,
  },
  {
    title: "Direct Collaboration",
    kicker: "ZERO BROKERS",
    description: "Clients collaborate directly with the founding engineers, automation architects, and marketers executing the work. No telephone games with account reps.",
    icon: MessagesSquare,
  },
  {
    title: "End-to-End Execution",
    kicker: "CONCEPT TO REVENUE",
    description: "From initial idea and strategic roadmap to development, deployment, launch, and ongoing marketing growth, we execute the entire lifecycle.",
    icon: CheckCircle,
  },
  {
    title: "Built to Evolve",
    kicker: "LONG-TERM DURABILITY",
    description: "We build modular, type-safe digital systems with 100% intellectual property transfer, designed to improve and scale effortlessly as your business grows.",
    icon: Sparkles,
  },
];

export function WhyEthisyn() {
  return (
    <section
      className="py-24 sm:py-32 md:py-40 px-5 sm:px-8 md:px-12 bg-black border-t border-white/[0.08]"
      aria-label="Why Ethisyn"
    >
      <div className="max-w-[1520px] mx-auto space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs uppercase tracking-widest font-medium text-zinc-400">
              THE STUDIO ADVANTAGE // WHY ETHISYN
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.08]">
            Engineering, automation & growth without agency bloat.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#A1A1AA] leading-relaxed">
            Why leading founders and businesses choose Ethisyn as their single end-to-end digital partner.
          </p>
        </div>

        {/* 6 Reasons Bento Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-2xl border border-white/[0.08] bg-[#080808] p-8 sm:p-9 hover:border-white/[0.22] hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <span className="text-xs text-emerald-400 uppercase tracking-widest font-medium">
                      {reason.kicker}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
                      <Icon className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                    {reason.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
