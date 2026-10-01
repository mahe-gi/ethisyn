import React from "react";
import { siteConfig } from "@/content/site";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Calendar, Building, Layers, CheckCircle2 } from "lucide-react";

export function Company() {
  return (
    <section
      id="company"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 bg-black"
      aria-labelledby="company-heading"
    >
      <div className="max-w-[1520px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Headline & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 block">
              ABOUT ETHISYN
            </span>
            <h2
              id="company-heading"
              className="font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08]"
            >
              Built in Hyderabad. Engineering for clients worldwide.
            </h2>

            <div className="space-y-6 text-[#A1A1AA] text-lg sm:text-xl md:text-2xl font-normal leading-relaxed max-w-2xl">
              <p className="text-white">
                Conceived as an independent engineering idea in Hyderabad in {siteConfig.founded}, Ethisyn is a full-spectrum digital product studio. We build modern web platforms, native mobile applications, intelligent AI automation pipelines, and digital growth engines.
              </p>
              <p>
                We believe in simple, honest principles: clean code that loads in under a second, thoughtful design that feels natural to users, and transparent direct communication with clients. No bloated account managers, no junior runarounds.
              </p>
            </div>
          </div>

          {/* Right: Company Fact Grid (5 cols) */}
          <div className="lg:col-span-5">
            <Card variant="default" className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400 uppercase tracking-widest font-medium block">
                  STUDIO ESSENTIALS
                </span>
                <Badge variant="neutral">INDEPENDENT</Badge>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
                  <span className="flex items-center gap-2 text-[#A1A1AA]">
                    <Calendar className="w-4 h-4 text-white" />
                    Started
                  </span>
                  <span className="text-white font-medium">{siteConfig.founded}</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
                  <span className="flex items-center gap-2 text-[#A1A1AA]">
                    <MapPin className="w-4 h-4 text-white" />
                    Location
                  </span>
                  <span className="text-white font-medium">{siteConfig.location.formatted}</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
                  <span className="flex items-center gap-2 text-[#A1A1AA]">
                    <Building className="w-4 h-4 text-white" />
                    Structure
                  </span>
                  <span className="text-white font-medium">Independent Product Studio</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
                  <span className="flex items-center gap-2 text-[#A1A1AA]">
                    <Layers className="w-4 h-4 text-white" />
                    Core Team
                  </span>
                  <span className="text-white font-medium">Founding Team & Partners</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[#A1A1AA]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Availability
                  </span>
                  <Badge variant="success" dot>
                    Open for Q4 Projects
                  </Badge>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.05] text-xs text-[#A1A1AA]">
                <p>
                  Direct inquiries:{" "}
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-white underline hover:text-white"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
