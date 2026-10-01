import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { teamContent } from "@/content/team";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export function TeamTeaser() {
  // Feature the first 6 founding domain leads for the homepage preview
  const featuredPartners = teamContent.members.slice(0, 6);

  return (
    <section
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 bg-black relative overflow-hidden"
      aria-labelledby="team-teaser-heading"
    >
      <div className="max-w-[1520px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Studio Narrative & Direct Access */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-medium text-zinc-400">
                HYDERABAD ENGINEERING HUB • 11 PARTNERS
              </span>
            </div>

            <h2
              id="team-teaser-heading"
              className="font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08]"
            >
              The builders behind every system.
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#A1A1AA] leading-relaxed">
              We are an independent assembly of 11 founding domain partners in Hyderabad directing your engineering, design, and growth. We eliminate middleman account managers and mystery outsourcing, so you collaborate directly with the architects writing your code and designing your systems.
            </p>

            {/* Direct Guarantees */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#D4D4D8]">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct daily Slack & WhatsApp access to founding partners</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% In-house engineering hub headquartered in Hyderabad</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero account managers, zero mystery outsourcing</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/team" variant="primary" size="lg" showArrow>
                Meet all 11 founding partners
              </Button>
            </div>
          </div>

          {/* Right Column: Prominent Classy Founder Portrait Gallery */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0e0e0e] via-[#090909] to-[#040404] p-6 sm:p-8 space-y-6 shadow-2xl">
              {/* Dossier Meta Header */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <span className="text-xs text-[#A1A1AA] uppercase tracking-widest font-medium">
                  FOUNDING PARTNERS • ACTIVE DOSSIER
                </span>
                <span className="text-xs text-zinc-400 uppercase tracking-widest font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  HYDERABAD, INDIA
                </span>
              </div>

              {/* Founder Portraits Grid: Substantially Bigger, Classy Frames */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {featuredPartners.map((member) => (
                  <Link
                    key={member.id}
                    href="/team"
                    className="group/lead relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3 hover:border-white/[0.22] hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between space-y-3"
                  >
                    {/* Portrait Frame */}
                    <div className="relative aspect-square w-full rounded-full overflow-hidden border border-white/[0.12] bg-[#141414] shadow-lg ring-1 ring-white/[0.06] group-hover/lead:border-white/30 transition-all duration-500">
                      {member.image ? (
                        <>
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 160px"
                            className="object-cover object-center rounded-full group-hover/lead:scale-108 transition-transform duration-700 ease-editorial"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        </>
                      ) : (
                        <div className="w-full h-full rounded-full flex items-center justify-center text-base font-medium text-white bg-white/[0.05]">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      )}
                    </div>

                    {/* Meta info */}
                    <div className="space-y-0.5 min-w-0 text-center">
                      <p className="text-xs sm:text-sm font-medium text-white truncate group-hover/lead:text-white transition-colors">
                        {member.name}
                      </p>
                      <p className="text-[11px] text-[#A1A1AA] truncate">
                        {member.discipline}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Teaser Footer Bar */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <span className="text-zinc-400 tracking-wider uppercase text-[10px] sm:text-[11px] font-medium">
                  + 5 ADDITIONAL DOMAIN PARTNERS IN HYDERABAD
                </span>
                <Link
                  href="/team"
                  className="group/all inline-flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
                >
                  <span>Explore full roster</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover/all:text-white group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
