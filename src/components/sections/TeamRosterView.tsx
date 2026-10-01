"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { TeamMember } from "@/content/team";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface TeamRosterViewProps {
  members?: TeamMember[];
  humanMembers?: TeamMember[];
}

export function TeamRosterView({ members, humanMembers }: TeamRosterViewProps) {
  const team = members ?? humanMembers ?? [];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Header & Overview */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/[0.08] pb-10">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-medium text-zinc-400">
              HYDERABAD ENGINEERING HUB • {team.length} FOUNDING PARTNERS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            The builders behind every system.
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Direct builder ownership. Every founding partner directly architects, designs, and ships your product from Hyderabad, with no layers, no account managers, and no outsourced guesswork.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="neutral" dot size="md">
            100% IN-HOUSE SENIOR PARTNERS
          </Badge>
        </div>
      </div>

      {/* Founding Human Partners Roster */}
      {team.length === 0 ? (
        <EmptyState
          title="No Team Members Listed"
          description="Team roster is currently being updated."
        />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {team.map((member, index) => {
            const formattedIndex = String(index + 1).padStart(2, "0");
            return (
              <article
                key={member.id}
                className="group relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0c0c0c] via-[#080808] to-[#040404] p-7 sm:p-9 flex flex-col justify-between space-y-7 hover:border-white/[0.22] hover:bg-[#0e0e0e] transition-all duration-500 ease-editorial shadow-2xl"
              >
                {/* Top Dossier Index Header */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-white/50 tracking-wider font-medium uppercase">
                      PARTNER [{formattedIndex} / {team.length}]
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="text-xs uppercase tracking-widest text-[#EDEDED] font-medium">
                      ACTIVE LEAD
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] tracking-[0.16em] text-[#71717A] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>HYDERABAD, INDIA</span>
                  </div>
                </div>

                {/* Hero Profile Block: Round Portrait + Name + Role */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  {/* Founder Portrait: Pure Circular Avatar */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 shrink-0 aspect-square rounded-full overflow-hidden border border-white/20 bg-neutral-900 group-hover:border-white/40 shadow-xl transition-all duration-300">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
                        className="object-cover object-center rounded-full group-hover:scale-105 transition-transform duration-500 ease-editorial"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full flex items-center justify-center text-xl font-medium text-white bg-white/[0.05]">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>

                  {/* Name, Title, and Discipline Kicker */}
                  <div className="space-y-2 flex-1 min-w-0">
                    <span className="inline-block text-[10px] text-[#A1A1AA] uppercase tracking-[0.16em] px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                      {member.discipline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-[#F4F4F5] font-normal leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Substantive Technical Biography */}
                <div className="pt-2 border-t border-white/[0.04]">
                  <p className="text-sm sm:text-[15px] text-[#D4D4D8] leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>

                {/* Technical Domain Badges */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#71717A] uppercase tracking-wider">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Core Responsibilities & Capabilities</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-[#E4E4E7] px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Social Channels & Architecture Governance */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#71717A]">
                  <div className="flex items-center gap-4">
                    {member.social?.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#A1A1AA] hover:text-white transition-colors group/link"
                      >
                        <span>LinkedIn</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                      </a>
                    )}
                    {member.social?.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#A1A1AA] hover:text-white transition-colors group/link"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                      </a>
                    )}
                  </div>

                  <span className="text-[10px] uppercase tracking-widest text-[#71717A]">
                    FOUNDING PARTNER
                  </span>
                </div>
              </article>
            );
          })}

          {/* 12th Slot: Studio Direct Charter & Engagement Card */}
          <aside className="relative rounded-3xl border border-white/[0.12] bg-gradient-to-b from-[#141414] via-[#0d0d0d] to-[#070707] p-7 sm:p-9 flex flex-col justify-between space-y-7 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="text-[11px] text-emerald-400 tracking-[0.2em] uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                DIRECT ACCESS CHARTER
              </span>
              <span className="text-[11px] tracking-[0.16em] text-[#71717A] uppercase">
                STUDIO GOVERNANCE
              </span>
            </div>

            <div className="space-y-4">
              <span className="inline-block text-[10px] text-white/70 uppercase tracking-[0.16em] px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1]">
                COMMISSION AN ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-snug">
                Collaborate directly with our {team.length} founding partners.
              </h3>
              <p className="text-sm sm:text-[15px] text-[#A1A1AA] leading-relaxed font-light">
                No account executives or telephone games. From technical scoping to multi-region cloud deployment, you interface directly with the partners who design your screens and write your code.
              </p>
            </div>

            {/* SLA Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 space-y-1">
                <span className="text-[10px] text-[#71717A] uppercase block">
                  COMMUNICATION
                </span>
                <span className="text-xs text-white font-medium block">
                  Direct Slack & WhatsApp
                </span>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 space-y-1">
                <span className="text-[10px] text-[#71717A] uppercase block">
                  SLA RESPONSE
                </span>
                <span className="text-xs text-white font-medium block">
                  &lt; 4 Hours Guaranteed
                </span>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 space-y-1">
                <span className="text-[10px] text-[#71717A] uppercase block">
                  TALENT MODEL
                </span>
                <span className="text-xs text-white font-medium block">
                  100% In-House Engineers
                </span>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 space-y-1">
                <span className="text-[10px] text-[#71717A] uppercase block">
                  EXECUTION
                </span>
                <span className="text-xs text-white font-medium block">
                  Daily Async Demos
                </span>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-[#A1A1AA]">
                Ready to review technical requirements?
              </span>
              <Button href="/#contact" variant="primary" size="md" showArrow>
                Start technical call
              </Button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
