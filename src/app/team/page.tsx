import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { teamContent } from "@/content/team";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Team — The People Building Your Software",
  description:
    "Meet the engineers, designers, AI builders, and growth strategists building technology with purpose at Ethisyn in Hyderabad.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Our Team — Ethisyn",
    description:
      "Meet the engineers, designers, and AI builders at Ethisyn. Direct builder access with zero corporate runaround.",
    url: `${siteConfig.url}/team`,
  },
};

export default function TeamPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 px-5 sm:px-8 md:px-12 bg-brand-black">
      <div className="max-w-[1520px] mx-auto space-y-20 md:space-y-28">
        {/* Header Hero */}
        <div className="space-y-6 max-w-3xl">
          <SectionLabel index="00" title="Our Team & Culture" />
          <h1 className="font-sans font-medium text-brand-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
            The people who actually{" "}
            <span className="font-serif italic font-normal text-brand-offwhite">
              build your software.
            </span>
          </h1>
          <p className="font-sans text-brand-muted text-lg sm:text-xl font-light leading-relaxed">
            {teamContent.subtitle}
          </p>
          <div className="font-mono text-xs text-brand-faint uppercase tracking-wider pt-2">
            <span>HYDERABAD, INDIA • {siteConfig.location.coordinates}</span>
          </div>
        </div>

        {/* 4 Studio Rules */}
        <div className="border-t border-brand-border pt-12 space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs text-brand-faint uppercase tracking-wider">
              HOW WE OPERATE
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-medium text-brand-white">
              Our 4 simple rules of work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {teamContent.rules.map((rule, idx) => (
              <div
                key={rule.title}
                className="p-6 border border-brand-border bg-white/[0.01] space-y-3"
              >
                <span className="font-mono text-xs text-brand-faint">
                  0{idx + 1} / RULE
                </span>
                <h3 className="font-sans text-lg font-medium text-brand-white">
                  {rule.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                  {rule.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Roster Grid */}
        <div className="border-t border-brand-border pt-12 space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs text-brand-faint uppercase tracking-wider">
              CORE BUILDERS
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-medium text-brand-white">
              Engineering, Design & Growth.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {teamContent.members.map((member) => (
              <div
                key={member.id}
                className="p-7 border border-brand-border hover:border-brand-border-strong bg-white/[0.01] hover:bg-white/[0.02] transition-colors flex flex-col justify-between space-y-6"
                data-cursor="TEAM"
              >
                <div className="space-y-4">
                  {/* Top Avatar Badge & Discipline */}
                  <div className="flex items-center justify-between border-b border-brand-border/40 pb-4">
                    {member.image ? (
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-white/40 relative flex-shrink-0 bg-white/[0.05]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 border border-brand-border flex items-center justify-center font-mono text-xs font-semibold text-brand-white bg-white/[0.03]">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                    <span className="font-mono text-[10px] text-brand-faint uppercase tracking-wider">
                      {member.discipline}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <div className="space-y-1">
                    <h3 className="font-sans text-xl font-medium text-brand-white">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs text-brand-faint">
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skill Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[10px] text-brand-faint">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-white/[0.02] border border-brand-border/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-brand-border/40 flex items-center gap-4 font-mono text-xs text-brand-faint">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-white transition-colors inline-flex items-center gap-1"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-white transition-colors inline-flex items-center gap-1"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Careers & Collaboration Callout */}
        <div className="p-8 md:p-12 border border-brand-border bg-white/[0.02] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-sans text-2xl font-medium text-brand-white">
              Want to build with us?
            </h3>
            <p className="font-sans text-sm text-brand-muted font-light leading-relaxed">
              We are always on the lookout for talented full-stack engineers, AI developers, and video storytellers who care about clean craft and honest work.
            </p>
          </div>

          <Button
            href={`mailto:${siteConfig.contactEmail}?subject=Joining%20the%20Ethisyn%20Team`}
            isExternal
            variant="outline"
            size="md"
            showArrow
          >
            Email your portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
