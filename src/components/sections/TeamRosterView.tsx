import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { TeamMember } from "@/content/team";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

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
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717A]">
              HYDERABAD ENGINEERING HUB • 11 FOUNDING PARTNERS
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            The builders behind every system.
          </h2>
          <p className="font-sans text-[#A1A1AA] text-base sm:text-lg font-light leading-relaxed">
            Direct builder ownership. Every founding partner directly architects, designs, and ships your product from Hyderabad — no layers, no account managers, no outsourced guesswork.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-[#E4E4E7] px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] shadow-sm">
            100% IN-HOUSE
          </span>
          <span className="font-mono text-xs text-[#E4E4E7] px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] shadow-sm">
            DIRECT BUILDER ACCESS
          </span>
          <span className="font-mono text-xs text-[#E4E4E7] px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] shadow-sm">
            ZERO ACCOUNT MANAGERS
          </span>
        </div>
      </div>

      {/* Editorial Founding Team Grid */}
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
                    <span className="font-mono text-[11px] text-white/40 tracking-[0.2em] uppercase">
                      PARTNER [{formattedIndex} / 11]
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-[#71717A] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>HYDERABAD, INDIA</span>
                  </div>
                </div>

                {/* Hero Profile Block: Big Portrait + Name + Role */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  {/* Founder Portrait: Prominent, Big, Classy Frame */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 shrink-0 rounded-2xl overflow-hidden border border-white/[0.12] bg-[#141414] ring-1 ring-white/[0.05] group-hover:border-white/30 shadow-2xl transition-all duration-500">
                    {member.image ? (
                      <>
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-editorial"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-mono text-xl font-medium text-white bg-white/[0.05]">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>

                  {/* Name, Title, and Discipline Kicker */}
                  <div className="space-y-2 flex-1 min-w-0">
                    <span className="inline-block font-mono text-[10px] text-[#A1A1AA] uppercase tracking-[0.16em] px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                      {member.discipline}
                    </span>
                    <h3 className="font-sans text-2xl sm:text-3xl font-medium text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                      {member.name}
                    </h3>
                    <p className="font-sans text-sm sm:text-[15px] text-[#F4F4F5] font-normal leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Expansive World-Class Bio */}
                <p className="font-sans text-sm sm:text-[15px] text-[#A1A1AA] leading-relaxed font-light">
                  {member.bio}
                </p>

                {/* Core Specialized Competencies */}
                <div className="space-y-2.5 pt-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#71717A] block">
                    SPECIALIZED COMPETENCIES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[11px] text-[#D4D4D8] px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.07] hover:border-white/20 hover:text-white transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dossier Footer: Social Touchpoints & Status */}
                <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-[#A1A1AA] hover:text-white transition-colors duration-200"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <span>LinkedIn</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-[#A1A1AA] hover:text-white transition-colors duration-200"
                        aria-label={`${member.name} on GitHub`}
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-[#A1A1AA] hover:text-white transition-colors duration-200"
                        aria-label={`${member.name} on Twitter`}
                      >
                        <span>Twitter</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                      </a>
                    )}
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#71717A]">
                    FOUNDING PARTNER
                  </span>
                </div>
              </article>
            );
          })}

          {/* 12th Slot: Studio Direct Charter & Engagement Card */}
          <aside className="relative rounded-3xl border border-white/[0.12] bg-gradient-to-b from-[#141414] via-[#0d0d0d] to-[#070707] p-7 sm:p-9 flex flex-col justify-between space-y-7 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="font-mono text-[11px] text-emerald-400 tracking-[0.2em] uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                DIRECT ACCESS CHARTER
              </span>
              <span className="font-mono text-[11px] tracking-[0.16em] text-[#71717A] uppercase">
                STUDIO GOVERNANCE
              </span>
            </div>

            <div className="space-y-4">
              <span className="inline-block font-mono text-[10px] text-white/70 uppercase tracking-[0.16em] px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1]">
                COMMISSION AN ARCHITECTURE
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-medium text-white tracking-tight leading-snug">
                Collaborate directly with our 11 founding partners.
              </h3>
              <p className="font-sans text-sm sm:text-[15px] text-[#A1A1AA] leading-relaxed font-light">
                No account executives or telephone games. From technical scoping to multi-region cloud deployment, you interface directly with the partners who design your screens and write your code.
              </p>
            </div>

            {/* SLA Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 space-y-1">
                <span className="font-mono text-[10px] text-[#71717A] uppercase block">
                  COMMUNICATION
                </span>
                <span className="font-sans text-xs text-white font-medium block">
                  Direct Slack & WhatsApp
                </span>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 space-y-1">
                <span className="font-mono text-[10px] text-[#71717A] uppercase block">
                  SLA RESPONSE
                </span>
                <span className="font-sans text-xs text-white font-medium block">
                  &lt; 4 Hours Guaranteed
                </span>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 space-y-1">
                <span className="font-mono text-[10px] text-[#71717A] uppercase block">
                  TALENT MODEL
                </span>
                <span className="font-sans text-xs text-white font-medium block">
                  100% In-House Engineers
                </span>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 space-y-1">
                <span className="font-mono text-[10px] text-[#71717A] uppercase block">
                  EXECUTION
                </span>
                <span className="font-sans text-xs text-white font-medium block">
                  Daily Async Demos
                </span>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="font-mono text-xs text-[#A1A1AA]">
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
