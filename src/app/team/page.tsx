import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { teamContent } from "@/content/team";
import { siteConfig } from "@/content/site";
import { TeamRosterView } from "@/components/sections/TeamRosterView";

export const metadata: Metadata = {
  title: "Founding Team & Builders | Ethisyn",
  description:
    "Meet the founding engineers, designers, and growth partners at Ethisyn in Hyderabad. Direct builder access with zero account managers and zero outsourcing.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Founding Team & Builders | Ethisyn",
    description:
      "Founding domain partners building digital products in Hyderabad. Direct builder access with zero outsourcing.",
    url: `${siteConfig.url}/team`,
  },
};

export default function TeamPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 px-5 sm:px-8 md:px-12 bg-black min-h-screen">
      <div className="max-w-[1520px] mx-auto space-y-20 md:space-y-28">
        {/* Breadcrumb + Header Hero */}
        <div className="space-y-6 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Founding Team" },
            ]}
          />

          <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 block">
            FOUNDING PARTNERS & BUILDERS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.08]">
            The people who actually build every system.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#A1A1AA] leading-relaxed max-w-3xl">
            {teamContent.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Badge variant="neutral" size="md">
              HYDERABAD, INDIA • EST. {siteConfig.founded}
            </Badge>
            <Badge variant="neutral" size="md">
              11 FOUNDING DOMAIN LEADS
            </Badge>
            <Badge variant="neutral" size="md">
              100% IN-HOUSE • ZERO OUTSOURCING
            </Badge>
          </div>
        </div>

        {/* 4 Studio Rules in Refined Minimalist Format */}
        <div className="border-t border-white/[0.08] pt-12 sm:pt-16 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-medium text-zinc-400">
                STUDIO DOCTRINE
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                Our 4 operating principles.
              </h2>
            </div>
            <p className="text-sm text-[#71717A] leading-relaxed max-w-md">
              Every client engagement is governed by direct partner accountability and zero corporate ceremony.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamContent.rules.map((rule, idx) => (
              <div
                key={rule.title}
                className="relative rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-white/[0.18] transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-white/40 tracking-widest uppercase">
                      0{idx + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                  <h3 className="text-lg font-medium text-white tracking-tight leading-snug">
                    {rule.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {rule.explanation}
                  </p>
                </div>
                <div className="pt-2 border-t border-white/[0.04]">
                  <span className="text-xs uppercase tracking-widest font-medium text-zinc-500">
                    RULE 0{idx + 1} OF 04
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Roster: Founding Team & Domain Partners */}
        <div className="border-t border-white/[0.08] pt-12 sm:pt-16">
          <TeamRosterView members={teamContent.members} />
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-white/[0.08] pt-16 sm:pt-20">
          <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0f0f0f] via-[#090909] to-[#040404] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 block">
                DIRECT PARTNER COLLABORATION
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight leading-snug">
                Ready to engineer with our founding team?
              </h3>
              <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                Send us your product architecture or schedule a direct consultation with our Hyderabad leads. We review and reply within 4 business hours.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/#contact" variant="primary" size="lg" showArrow>
                Initiate project discussion
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
