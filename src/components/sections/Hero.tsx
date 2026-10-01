import React from "react";
import { Button } from "../ui/Button";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-32 sm:pt-36 md:pt-44 pb-16 md:pb-24 px-5 sm:px-8 md:px-12 bg-black overflow-hidden"
      aria-label="Ethisyn Studio Introduction"
    >
      {/* Subtle Awwwards-tier atmospheric ambient glow (no harsh lines, whisper-quiet luxury) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[520px] bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_rgba(255,255,255,0.01)_45%,_transparent_75%)] blur-2xl"
      />

      <div className="max-w-[1520px] mx-auto w-full flex-1 flex flex-col justify-center relative z-10">
        {/* Top Status Bar: Studio Identifier with Live Pulse Dot */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-12 sm:pb-16 md:pb-20 font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em]">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-white/90 font-medium">
              INDEPENDENT PRODUCT STUDIO • HYDERABAD, INDIA
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-zinc-400 text-[11px] tracking-[0.16em]">
            <span className="text-zinc-600">AVAILABILITY //</span>
            <span className="text-zinc-300">SELECT Q2–Q3 ENGAGEMENTS</span>
          </div>
        </div>

        {/* Central Display Heading & Narrative (Classy luxury whitespace) */}
        <div className="py-6 sm:py-10 md:py-14 max-w-5xl space-y-8 md:space-y-10">
          <h1 className="font-sans font-medium text-white text-[clamp(2.75rem,5.6vw,5.75rem)] leading-[1.02] tracking-[-0.03em]">
            We build high-velocity software,{" "}
            <span className="font-serif italic font-normal text-white">
              intelligent AI systems
            </span>
            , and scalable digital platforms.
          </h1>

          <p className="font-sans text-[#A1A1AA] text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl font-light">
            An independent product studio partnering directly with ambitious founders and enterprises. We architect sub-second web platforms, autonomous AI workflows, and resilient digital systems that generate compound commercial value—engineered entirely in-house without agency bloat.
          </p>

          {/* High-Contrast, Polished CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2 sm:pt-4">
            <Button href="/#contact" variant="primary" size="lg" showArrow>
              Start a Project
            </Button>
            <Button href="/#services" variant="outline" size="lg">
              Explore Capabilities
            </Button>

            <span className="font-mono text-xs text-zinc-500 sm:pl-4 pt-1 sm:pt-0">
              Avg. 4-week MVP sprint • Direct founder execution
            </span>
          </div>
        </div>

        {/* Bottom 4-Stat Proof Bar */}
        <div className="mt-12 md:mt-20 pt-10 md:pt-14 border-t border-white/[0.06] grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="space-y-1.5 group">
              <div className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
                {stat.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-white/90 font-medium">
                {stat.label}
              </div>
              <p className="font-sans text-xs text-[#71717A] font-light leading-relaxed hidden sm:block">
                {stat.descriptor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
