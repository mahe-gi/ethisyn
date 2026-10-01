import React from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { siteConfig } from "@/content/site";

export function Company() {
  return (
    <section
      id="company"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-brand-border bg-brand-black"
      aria-labelledby="company-heading"
    >
      <div className="max-w-[1520px] mx-auto">
        <SectionLabel index="07" title="Company" />

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-4">
          {/* Left: Headline & Primary Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h2
              id="company-heading"
              className="font-sans font-medium text-brand-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight"
            >
              Built in Hyderabad.{" "}
              <span className="font-serif italic font-normal text-brand-offwhite">
                Working worldwide.
              </span>
            </h2>

            <div className="space-y-6 text-brand-muted text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              <p className="text-brand-offwhite">
                Founded in Hyderabad in {siteConfig.founded}, Ethisyn is an independent studio that builds modern websites, web applications, and autonomous AI systems.
              </p>
              <p>
                We believe in keeping things simple: clean engineering, thoughtful design, and direct communication with clients. No bloated agencies, no corporate runaround.
              </p>
            </div>
          </div>

          {/* Right: Company Details Fact Grid (5 cols) */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-brand-border pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-between space-y-8">
            <div>
              <p className="font-mono text-xs text-brand-faint uppercase tracking-[0.18em] mb-6">
                Company Details
              </p>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between items-baseline border-b border-brand-border/40 pb-3">
                  <span className="text-brand-muted">Founded</span>
                  <span className="text-brand-white font-medium">{siteConfig.founded}</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-brand-border/40 pb-3">
                  <span className="text-brand-muted">Location</span>
                  <span className="text-brand-white font-medium">{siteConfig.location.formatted}</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-brand-border/40 pb-3">
                  <span className="text-brand-muted">Structure</span>
                  <span className="text-brand-white font-medium">Independent Product & Systems Studio</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-brand-border/40 pb-3">
                  <span className="text-brand-muted">Services</span>
                  <span className="text-brand-white font-medium text-right max-w-[220px]">
                    Software, AI, Growth, Design, Systems
                  </span>
                </div>
                <div className="flex justify-between items-baseline border-b border-brand-border/40 pb-3">
                  <span className="text-brand-muted">Availability</span>
                  <span className="text-brand-white font-medium">Open for Projects</span>
                </div>
              </div>
            </div>

            <div className="p-4 border border-brand-border/60 bg-white/[0.02]">
              <p className="font-mono text-[11px] text-brand-faint uppercase tracking-wider">
                Direct Contact
              </p>
              <p className="font-mono text-xs text-brand-offwhite mt-1">
                For project discussions, email us directly at{" "}
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="underline underline-offset-2 hover:text-brand-white"
                >
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
