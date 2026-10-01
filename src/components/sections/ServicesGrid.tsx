"use client";

import React, { useState } from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { servicesData, ServiceItem } from "@/content/services";
import { cn } from "@/lib/utils";

function ServiceSchematic({ type }: { type: ServiceItem["schematicType"] }) {
  if (type === "code") {
    // Websites & Software: Browser application window with responsive cards
    return (
      <svg className="w-full h-full" viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="20" y="20" width="200" height="110" rx="3" stroke="rgba(245,244,239,0.3)" strokeWidth="1" />
        <line x1="20" y1="42" x2="220" y2="42" stroke="rgba(245,244,239,0.2)" strokeWidth="1" />
        <circle cx="32" cy="31" r="2.5" fill="rgba(245,244,239,0.6)" />
        <circle cx="42" cy="31" r="2.5" fill="rgba(245,244,239,0.4)" />
        <circle cx="52" cy="31" r="2.5" fill="rgba(245,244,239,0.4)" />
        <rect x="35" y="55" width="45" height="60" stroke="rgba(245,244,239,0.2)" strokeWidth="1" />
        <rect x="90" y="55" width="115" height="28" stroke="rgba(245,244,239,0.3)" strokeWidth="1" />
        <rect x="90" y="90" width="54" height="25" stroke="rgba(245,244,239,0.2)" strokeWidth="1" />
        <rect x="151" y="90" width="54" height="25" stroke="rgba(245,244,239,0.2)" strokeWidth="1" />
        <line x1="42" y1="65" x2="68" y2="65" stroke="white" strokeWidth="1" />
      </svg>
    );
  }

  if (type === "agents") {
    // AI & Automation: Autonomous agent node network
    return (
      <svg className="w-full h-full" viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="45" cy="75" r="14" stroke="rgba(245,244,239,0.4)" strokeWidth="1" />
        <circle cx="45" cy="75" r="4" fill="white" />
        <line x1="59" y1="75" x2="110" y2="45" stroke="rgba(245,244,239,0.35)" strokeDasharray="3 3" strokeWidth="1" />
        <line x1="59" y1="75" x2="110" y2="105" stroke="rgba(245,244,239,0.35)" strokeDasharray="3 3" strokeWidth="1" />
        <circle cx="120" cy="45" r="10" stroke="rgba(245,244,239,0.5)" strokeWidth="1" />
        <circle cx="120" cy="105" r="10" stroke="rgba(245,244,239,0.5)" strokeWidth="1" />
        <line x1="130" y1="45" x2="185" y2="70" stroke="rgba(245,244,239,0.6)" strokeWidth="1" />
        <line x1="130" y1="105" x2="185" y2="80" stroke="rgba(245,244,239,0.6)" strokeWidth="1" />
        <circle cx="195" cy="75" r="15" stroke="white" strokeWidth="1.5" />
        <circle cx="195" cy="75" r="5" fill="white" />
      </svg>
    );
  }

  if (type === "growth") {
    // Digital Growth: Upward trajectory analytics curve & search radar
    return (
      <svg className="w-full h-full" viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="30" y1="125" x2="210" y2="125" stroke="rgba(245,244,239,0.2)" strokeWidth="1" />
        <line x1="30" y1="30" x2="30" y2="125" stroke="rgba(245,244,239,0.2)" strokeWidth="1" />
        <path d="M 35 110 Q 90 100 130 65 T 205 35" stroke="white" strokeWidth="1.5" />
        <circle cx="130" cy="65" r="4" fill="rgba(245,244,239,0.6)" />
        <circle cx="205" cy="35" r="5" fill="white" />
        <line x1="205" y1="35" x2="205" y2="125" stroke="rgba(245,244,239,0.2)" strokeDasharray="3 3" strokeWidth="1" />
      </svg>
    );
  }

  if (type === "creative") {
    // Creative & Video: Design artboard frame with aspect ratio guides
    return (
      <svg className="w-full h-full" viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="40" y="25" width="160" height="100" stroke="rgba(245,244,239,0.3)" strokeWidth="1" />
        <circle cx="40" cy="25" r="3" fill="white" />
        <circle cx="200" cy="25" r="3" fill="white" />
        <circle cx="40" cy="125" r="3" fill="white" />
        <circle cx="200" cy="125" r="3" fill="white" />
        <polygon points="110,65 140,80 110,95" stroke="white" strokeWidth="1" fill="rgba(255,255,255,0.1)" />
        <circle cx="120" cy="80" r="28" stroke="rgba(245,244,239,0.2)" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    );
  }

  if (type === "systems") {
    // Business Systems: Cloud server rack and pipeline flow
    return (
      <svg className="w-full h-full" viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="40" y="30" width="70" height="24" rx="2" stroke="rgba(245,244,239,0.3)" strokeWidth="1" />
        <circle cx="50" cy="42" r="2" fill="white" />
        <rect x="40" y="63" width="70" height="24" rx="2" stroke="rgba(245,244,239,0.3)" strokeWidth="1" />
        <circle cx="50" cy="75" r="2" fill="white" />
        <rect x="40" y="96" width="70" height="24" rx="2" stroke="rgba(245,244,239,0.3)" strokeWidth="1" />
        <circle cx="50" cy="108" r="2" fill="white" />
        <path d="M 110 42 H 150 V 75 H 180" stroke="rgba(245,244,239,0.4)" strokeWidth="1" />
        <path d="M 110 108 H 150 V 75" stroke="rgba(245,244,239,0.4)" strokeWidth="1" />
        <circle cx="190" cy="75" r="10" stroke="white" strokeWidth="1.5" />
        <circle cx="190" cy="75" r="3" fill="white" />
      </svg>
    );
  }

  // Support & Maintenance: Shield and uptime signal
  return (
    <svg className="w-full h-full" viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M 120 25 L 170 45 V 85 C 170 115 120 130 120 130 C 120 130 70 115 70 85 V 45 Z" stroke="rgba(245,244,239,0.35)" strokeWidth="1" />
      <path d="M 90 78 L 110 98 L 150 58" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="120" cy="80" r="45" stroke="rgba(245,244,239,0.15)" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

export function ServicesGrid() {
  const [activeId, setActiveId] = useState<string>(servicesData[0].id);

  return (
    <section
      id="services"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-brand-border bg-brand-black"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1520px] mx-auto">
        <SectionLabel index="02" title="What We Do" />

        <div className="pb-12 md:pb-16 border-b border-brand-border/40 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2
              id="services-heading"
              className="font-sans font-medium text-brand-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight"
            >
              Everything your business needs to win online.
            </h2>
            <p className="font-sans text-brand-muted text-base sm:text-lg md:text-xl font-light leading-relaxed">
              We design, build, automate, and grow your digital assets under one roof. No juggling multiple agencies.
            </p>
          </div>

          <div className="font-mono text-xs text-brand-faint uppercase tracking-wider">
            <span>06 CORE DISCIPLINES</span>
          </div>
        </div>

        {/* 6-Card Interactive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {servicesData.map((service) => {
            const isSelected = activeId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onFocus={() => setActiveId(service.id)}
                tabIndex={0}
                className={cn(
                  "p-7 sm:p-8 border transition-all duration-200 flex flex-col justify-between space-y-6 group cursor-default outline-none",
                  isSelected
                    ? "bg-white/[0.03] border-brand-white/40 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
                    : "bg-white/[0.01] border-brand-border hover:border-brand-border-strong hover:bg-white/[0.02]"
                )}
                data-cursor="INSPECT"
              >
                <div className="space-y-4">
                  {/* Top row: Index & Schematic preview */}
                  <div className="flex items-center justify-between border-b border-brand-border/40 pb-4">
                    <span className="font-mono text-xs text-brand-faint group-hover:text-brand-white transition-colors">
                      {service.index} / SERVICE
                    </span>
                    <div className="w-24 h-14 bg-white/[0.02] border border-brand-border/40 p-1 flex items-center justify-center">
                      <ServiceSchematic type={service.schematicType} />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="font-sans text-2xl font-medium text-brand-white group-hover:translate-x-1 transition-transform">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-offwhite/90 font-light leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-brand-muted leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* What We Build Checklist */}
                  <div className="pt-2 space-y-2 border-t border-brand-border/30">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-brand-faint">
                      What we build for you:
                    </p>
                    <ul className="space-y-1.5 font-sans text-xs text-brand-muted font-light">
                      {service.whatWeBuild.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-brand-white/60 mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Tech Tags */}
                <div className="pt-4 border-t border-brand-border/30 flex flex-wrap gap-1.5 font-mono text-[10px] text-brand-faint">
                  {service.tools.slice(0, 4).map((tool) => (
                    <span key={tool} className="px-2 py-0.5 bg-white/[0.03] border border-brand-border/40">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
