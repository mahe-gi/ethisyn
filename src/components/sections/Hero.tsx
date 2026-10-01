import React from "react";
import { Button } from "../ui/Button";
import { StatusLabel } from "../ui/StatusLabel";
import { MonogramField } from "./MonogramField";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 md:pb-16 px-5 sm:px-8 md:px-12 border-b border-brand-border"
      aria-label="Hero Introduction"
    >
      <div className="max-w-[1520px] mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Top Status & Geolocation Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 md:pb-12 border-b border-brand-border/40 font-mono text-[11px] md:text-xs text-brand-muted uppercase tracking-[0.18em]">
          <div className="flex items-center gap-3">
            <span
              className="w-1.5 h-1.5 bg-brand-white rounded-full flex-shrink-0 animate-pulse-subtle"
              aria-hidden="true"
            />
            <span>PRODUCT ENGINEERING & AI AUTOMATION STUDIO</span>
          </div>
          <div className="flex items-center gap-6">
            <span>
              {siteConfig.location.city.toUpperCase()}, {siteConfig.location.country.toUpperCase()} • EST. {siteConfig.founded}
            </span>
          </div>
        </div>

        {/* Central Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-10 md:py-16">
          {/* Left Column: Primary Typography (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="font-sans font-medium text-brand-white text-[clamp(2.85rem,6.5vw,6.5rem)] leading-[0.96] tracking-tight">
              We build digital products,{" "}
              <span className="font-serif italic font-normal text-brand-offwhite">
                automate your operations
              </span>
              , and help your business grow online.
            </h1>

            <p className="font-sans text-brand-muted text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl font-light">
              Ethisyn is an independent studio in Hyderabad. We build modern websites, mobile apps, smart AI voice agents, and digital growth engines for businesses that want real results without the corporate fluff.
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/#services" variant="primary" size="lg" showArrow>
                See our services
              </Button>
              <Button href="/#contact" variant="outline" size="lg">
                Start a project
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Anchor Monogram (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <MonogramField />
          </div>
        </div>

        {/* Bottom 4-Metric Bar */}
        <div className="pt-8 border-t border-brand-border/40 grid grid-cols-2 md:grid-cols-4 gap-6">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <span className="font-sans text-2xl sm:text-3xl md:text-4xl font-medium text-brand-white tracking-tight">
                {stat.value}
              </span>
              <p className="font-mono text-xs uppercase tracking-wider text-brand-offwhite">
                {stat.label}
              </p>
              <p className="font-sans text-xs text-brand-muted/70 font-light hidden sm:block">
                {stat.descriptor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
