import React from "react";
import { SectionLabel } from "../ui/SectionLabel";

export function Manifesto() {
  return (
    <section
      id="thesis"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-brand-border bg-brand-black"
      aria-labelledby="thesis-heading"
    >
      <div className="max-w-[1520px] mx-auto">
        <SectionLabel index="01" title="What We Believe" />

        {/* 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-4">
          {/* Primary Statement (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            <h2
              id="thesis-heading"
              className="font-sans font-normal text-brand-white text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.08] tracking-tight"
            >
              Most business software is bloated, slow, and needlessly complicated. We build things that are{" "}
              <span className="font-serif italic text-brand-offwhite">useful</span>, load fast, and are ready to grow.
            </h2>
          </div>

          {/* Grid Marker (4 Columns) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col justify-between border-l border-brand-border/40 pl-8 font-mono text-xs text-brand-faint">
            <div>
              <p className="tracking-[0.16em] uppercase">THE ETHISYN STANDARD</p>
              <p className="text-brand-muted mt-1">NO CORPORATE JARGON / 01</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-[1px] bg-brand-border-strong" />
            </div>
          </div>
        </div>

        {/* 3 Core Rules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 md:pt-24 mt-12 md:mt-16 border-t border-brand-border/40">
          <div className="space-y-3">
            <span className="font-mono text-xs text-brand-faint">RULE 01</span>
            <h3 className="font-sans text-xl font-medium text-brand-white">
              Useful From Day One
            </h3>
            <p className="font-sans text-brand-muted text-sm leading-relaxed font-light">
              Every single feature we write must solve a clear business problem. We do not build fancy gimmicks just to invoice you more.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-brand-faint">RULE 02</span>
            <h3 className="font-sans text-xl font-medium text-brand-white">
              Fast, Clean & Dependable
            </h3>
            <p className="font-sans text-brand-muted text-sm leading-relaxed font-light">
              Fast websites rank higher on Google and turn more visitors into buyers. We optimize every image and every line of code so your site flies.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-brand-faint">RULE 03</span>
            <h3 className="font-sans text-xl font-medium text-brand-white">
              Built to Scale With You
            </h3>
            <p className="font-sans text-brand-muted text-sm leading-relaxed font-light">
              When your company doubles in size, your software shouldn&apos;t collapse. We organize databases and systems so you can grow with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
