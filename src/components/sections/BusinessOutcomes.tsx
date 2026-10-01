import React from "react";
import { Rocket, RefreshCw, Cpu, Globe, Target, BarChart3 } from "lucide-react";

const outcomes = [
  {
    step: "01",
    action: "Start",
    title: "Launch from Idea to Market",
    description: "Turn an idea into a high-speed website, web application, mobile app, SaaS product, or digital business ready for real customers.",
    icon: Rocket,
    pillar: "BUILD",
  },
  {
    step: "02",
    action: "Improve",
    title: "Replace Manual Bottlenecks",
    description: "Replace slow, error-prone manual spreadsheets and legacy systems with clean custom software, CRM tools, and seamless integrations.",
    icon: RefreshCw,
    pillar: "BUILD",
  },
  {
    step: "03",
    action: "Automate",
    title: "Delegate Repetitive Work to AI",
    description: "Use autonomous AI voice agents, smart chatbots, and automated workflows to qualify leads, handle inquiries, and run tasks 24/7.",
    icon: Cpu,
    pillar: "AUTOMATE",
  },
  {
    step: "04",
    action: "Reach",
    title: "Build High-Intent Online Visibility",
    description: "Build an authoritative online presence through technical SEO, Google Maps local domination, and targeted advertising on Meta and Google.",
    icon: Globe,
    pillar: "GROW",
  },
  {
    step: "05",
    action: "Convert",
    title: "Turn Attention into Inquiries",
    description: "Create high-converting landing pages, cinematic video content, and marketing creatives designed to turn casual visitors into paying customers.",
    icon: Target,
    pillar: "CREATE",
  },
  {
    step: "06",
    action: "Scale",
    title: "Compound Growth with Data",
    description: "Connect technology, automation, paid acquisition, and analytics as your business grows, ensuring your systems handle 10x traffic effortlessly.",
    icon: BarChart3,
    pillar: "GROW",
  },
];

export function BusinessOutcomes() {
  return (
    <section
      className="py-24 sm:py-32 md:py-40 px-5 sm:px-8 md:px-12 bg-black border-t border-white/[0.08]"
      aria-label="What We Help Businesses Do"
    >
      <div className="max-w-[1520px] mx-auto space-y-14 sm:space-y-18">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs uppercase tracking-widest font-medium text-zinc-400">
              BUSINESS LIFECYCLE // WHAT WE HELP YOU DO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.08]">
            From zero-to-one launch to automated scale.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#A1A1AA] leading-relaxed">
            Every business enters at a different stage. Here is how our four core pillars support your growth at every milestone.
          </p>
        </div>

        {/* 6 Lifecycle Cards (3x2 grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {outcomes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.action}
                className="rounded-2xl border border-white/[0.08] bg-[#080808] p-7 sm:p-9 hover:border-white/[0.2] transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs text-[#71717A] font-medium">
                        [{item.step}]
                      </span>
                      <span className="text-xs text-emerald-400 uppercase tracking-widest font-medium">
                        {item.action}
                      </span>
                    </div>

                    <span className="text-[10px] text-white/50 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] uppercase tracking-wider font-medium">
                      {item.pillar}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 text-white group-hover:border-white/20 transition-colors">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-medium text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                    {item.description}
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
