"use client";

import React, { useState } from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { domainsData, DomainItem } from "@/content/domains";
import { cn } from "@/lib/utils";

// Conceptual Abstract SVGs (Purely decorative, hidden from screen readers)
function SchematicGraphic({ type }: { type: DomainItem["schematicType"] }) {
  if (type === "nodes") {
    // Intelligent Systems: Decision nodes and links
    return (
      <svg
        className="w-full h-full"
        viewBox="0 0 240 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="40" cy="80" r="16" stroke="rgba(245,244,239,0.4)" strokeWidth="1" />
        <circle cx="40" cy="80" r="4" fill="white" />
        <line x1="56" y1="80" x2="110" y2="45" stroke="rgba(245,244,239,0.3)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="56" y1="80" x2="110" y2="115" stroke="rgba(245,244,239,0.3)" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="120" cy="45" r="10" stroke="rgba(245,244,239,0.5)" strokeWidth="1" />
        <circle cx="120" cy="115" r="10" stroke="rgba(245,244,239,0.5)" strokeWidth="1" />
        <line x1="130" y1="45" x2="185" y2="75" stroke="rgba(245,244,239,0.6)" strokeWidth="1" />
        <line x1="130" y1="115" x2="185" y2="85" stroke="rgba(245,244,239,0.6)" strokeWidth="1" />
        <circle cx="200" cy="80" r="14" stroke="white" strokeWidth="1.5" />
        <circle cx="200" cy="80" r="5" fill="white" />
      </svg>
    );
  }

  if (type === "matrix") {
    // Digital Products: Modular layout grid
    return (
      <svg
        className="w-full h-full"
        viewBox="0 0 240 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="30" y="30" width="180" height="100" stroke="rgba(245,244,239,0.2)" strokeWidth="1" />
        <line x1="30" y1="60" x2="210" y2="60" stroke="rgba(245,244,239,0.3)" strokeWidth="1" />
        <line x1="80" y1="60" x2="80" y2="130" stroke="rgba(245,244,239,0.2)" strokeWidth="1" />
        <rect x="40" y="42" width="20" height="6" fill="rgba(245,244,239,0.6)" />
        <rect x="95" y="75" width="45" height="40" stroke="rgba(245,244,239,0.4)" strokeWidth="1" />
        <rect x="150" y="75" width="45" height="40" stroke="rgba(245,244,239,0.4)" strokeWidth="1" />
        <circle cx="117" cy="95" r="4" fill="white" />
        <circle cx="172" cy="95" r="4" fill="white" />
      </svg>
    );
  }

  if (type === "pipeline") {
    // Cloud and Automation: Connected flow paths
    return (
      <svg
        className="w-full h-full"
        viewBox="0 0 240 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M 20 80 Q 70 20 120 80 T 220 80" stroke="rgba(245,244,239,0.3)" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 20 80 Q 70 140 120 80 T 220 80" stroke="rgba(245,244,239,0.5)" strokeWidth="1" />
        <circle cx="70" cy="50" r="6" fill="white" />
        <circle cx="120" cy="80" r="8" stroke="white" strokeWidth="1.5" />
        <circle cx="170" cy="110" r="6" fill="white" />
        <line x1="120" y1="20" x2="120" y2="140" stroke="rgba(245,244,239,0.15)" strokeWidth="1" />
      </svg>
    );
  }

  // Emerging Technology: Geometric coordinate vectors
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 240 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon
        points="120,30 200,80 120,130 40,80"
        stroke="rgba(245,244,239,0.35)"
        strokeWidth="1"
      />
      <polygon
        points="120,50 170,80 120,110 70,80"
        stroke="rgba(245,244,239,0.55)"
        strokeWidth="1"
      />
      <circle cx="120" cy="80" r="5" fill="white" />
      <line x1="120" y1="10" x2="120" y2="150" stroke="rgba(245,244,239,0.2)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="20" y1="80" x2="220" y2="80" stroke="rgba(245,244,239,0.2)" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

export function DomainRows() {
  const [activeRow, setActiveRow] = useState<string | null>(domainsData[0].id);

  return (
    <section
      id="domains"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-brand-border bg-brand-black"
      aria-labelledby="domains-heading"
    >
      <div className="max-w-[1520px] mx-auto">
        <SectionLabel index="02" title="Where We Build" />

        <div className="pb-12 md:pb-16 border-b border-brand-border/40">
          <h2
            id="domains-heading"
            className="font-sans font-medium text-brand-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-2xl"
          >
            Many products. One standard.
          </h2>
        </div>

        {/* 4 Full-Width Interactive Rows */}
        <div className="divide-y divide-brand-border">
          {domainsData.map((domain) => {
            const isSelected = activeRow === domain.id;

            return (
              <div
                key={domain.id}
                onMouseEnter={() => setActiveRow(domain.id)}
                onFocus={() => setActiveRow(domain.id)}
                tabIndex={0}
                className={cn(
                  "group relative py-10 md:py-14 transition-colors duration-200 outline-none cursor-default",
                  isSelected ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                )}
                data-cursor="EXPLORE"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center">
                  {/* Left: Index & Title (5 columns) */}
                  <div className="lg:col-span-5 flex items-baseline gap-6">
                    <span className="font-mono text-xs md:text-sm text-brand-faint group-hover:text-brand-white transition-colors">
                      {domain.index}
                    </span>
                    <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl font-normal text-brand-white group-hover:translate-x-2 transition-transform duration-200">
                      {domain.title}
                    </h3>
                  </div>

                  {/* Middle: Description (4 columns) */}
                  <div className="lg:col-span-4">
                    <p className="font-sans text-brand-muted text-base md:text-lg leading-relaxed font-light">
                      {domain.description}
                    </p>
                  </div>

                  {/* Right: Technical SVG Composition (3 columns) */}
                  <div className="lg:col-span-3 flex justify-start lg:justify-end items-center">
                    <div className="w-48 h-32 border border-brand-border/40 p-2 bg-white/[0.01] flex items-center justify-center">
                      <SchematicGraphic type={domain.schematicType} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
