import React from "react";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-32 sm:pt-36 md:pt-44 pb-16 md:pb-24 px-5 sm:px-8 md:px-12 bg-black overflow-hidden"
      aria-label="Ethisyn Studio Introduction"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[520px] bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_rgba(255,255,255,0.01)_45%,_transparent_75%)] blur-2xl"
      />

      <div className="max-w-[1520px] mx-auto w-full flex-1 flex flex-col justify-center relative z-10">
        {/* Top Status Bar: Studio Identifier with Live Pulse Dot */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-12 sm:pb-16 md:pb-20 text-xs uppercase tracking-widest font-medium">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-white/90 font-medium">
              TECHNOLOGY, AI & DIGITAL GROWTH • HYDERABAD, INDIA
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-zinc-400 text-xs tracking-widest font-medium">
            <span className="text-zinc-600">AVAILABILITY //</span>
            <span className="text-zinc-300">ACCEPTING NEW PROJECTS</span>
          </div>
        </div>

        {/* Central Display Heading & Narrative */}
        <div className="py-6 sm:py-10 md:py-14 max-w-5xl space-y-8 md:space-y-10">
          <h1 className="font-medium text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08]">
            We build digital products, automate business operations, and help businesses grow.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#A1A1AA] leading-relaxed max-w-3xl">
            Software engineering, AI, automation and digital growth, brought together by one team. From building websites and applications to automating operations and growing your digital presence.
          </p>

          {/* High-Contrast CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2 sm:pt-4">
            <Button href="/#contact" variant="primary" size="lg" showArrow>
              Start a Project
            </Button>
            <Button href="/#services" variant="outline" size="lg">
              Explore Services
            </Button>

            <span className="text-xs uppercase tracking-widest font-medium text-zinc-500 sm:pl-4 pt-1 sm:pt-0">
              BUILD • AUTOMATE • GROW • CREATE
            </span>
          </div>
        </div>

        {/* 4-Pillar Enterprise Proof Bar */}
        <div className="pt-12 sm:pt-16 mt-8 sm:mt-12 border-t border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-1.5">
            <div className="text-xs uppercase tracking-widest font-medium text-emerald-400">
              01 // BUILD
            </div>
            <div className="text-white text-sm sm:text-base font-medium">
              Websites, Apps & SaaS
            </div>
            <div className="text-xs text-[#71717A] leading-relaxed">
              Sub-second web and mobile software
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs uppercase tracking-widest font-medium text-emerald-400">
              02 // AUTOMATE
            </div>
            <div className="text-white text-sm sm:text-base font-medium">
              AI Agents & Workflows
            </div>
            <div className="text-xs text-[#71717A] leading-relaxed">
              24/7 autonomous operations
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs uppercase tracking-widest font-medium text-emerald-400">
              03 // GROW
            </div>
            <div className="text-white text-sm sm:text-base font-medium">
              SEO, Ads & Marketing
            </div>
            <div className="text-xs text-[#71717A] leading-relaxed">
              Top rankings & lead generation
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs uppercase tracking-widest font-medium text-emerald-400">
              04 // CREATE
            </div>
            <div className="text-white text-sm sm:text-base font-medium">
              Video & Brand Content
            </div>
            <div className="text-xs text-[#71717A] leading-relaxed">
              Cinematic reels & digital creative
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
