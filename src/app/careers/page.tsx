import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { careersData } from "@/content/careers";
import {
  generateCareersPageSchema,
  generateJobPostingSchemas,
} from "@/lib/schema";
import { CareersView } from "@/components/sections/CareersView";
import { Sparkles, ArrowDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Talent | High-Density Engineering & AI Studio | Ethisyn",
  description:
    "Join Ethisyn in Hyderabad: a high-density, craft-driven software, AI systems, and digital growth studio. Open roles in Full-Stack Engineering, AI Architecture, Growth, and Creative Direction.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers & Open Positions | Ethisyn Hyderabad",
    description:
      "Craft-driven studio headquartered in Hyderabad with global impact. Hiring Senior Full-Stack Engineers, AI Architects, Growth Specialists, and Creative Directors.",
    url: `${siteConfig.url}/careers`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Open Positions | Ethisyn Hyderabad",
    description:
      "High talent density. Uncompromising craft. Direct builder ownership with zero bureaucracy.",
  },
};

export default function CareersPage() {
  const pageSchema = generateCareersPageSchema();
  const jobPostingSchemas = generateJobPostingSchemas();

  return (
    <div className="pt-28 md:pt-36 pb-28 px-5 sm:px-8 md:px-12 bg-black min-h-screen">
      {/* JSON-LD Schemas for Search Engines & Google Jobs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchemas) }}
      />

      <div className="max-w-[1520px] mx-auto space-y-16 md:space-y-24">
        {/* Header Hero Section */}
        <div className="space-y-8 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Careers & Talent" },
            ]}
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs uppercase tracking-widest font-medium text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>HYDERABAD HQ • GLOBAL IMPACT // EST. {siteConfig.founded}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.08]">
            High talent density. Uncompromising craft.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#A1A1AA] leading-relaxed max-w-3xl">
            {careersData.meta.subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Badge variant="neutral" size="md">
              HYDERABAD • HYBRID STUDIO
            </Badge>
            <Badge variant="neutral" size="md">
              4 OPEN POSITIONS
            </Badge>
            <Badge variant="neutral" size="md">
              DIRECT BUILDER OWNERSHIP
            </Badge>
            <Badge variant="neutral" size="md">
              ZERO CORPORATE BUREAUCRACY
            </Badge>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Button href="#open-roles" variant="primary" size="lg">
              <span>View Open Roles</span>
              <ArrowDown className="w-4 h-4 ml-1" />
            </Button>
            <Button
              href={`mailto:${careersData.applicationGuide.primaryEmail}?subject=[Application] General Builder Pitch — [Your Name]`}
              variant="secondary"
              size="lg"
            >
              Pitch an Unlisted Craft Role
            </Button>
          </div>
        </div>

        {/* Interactive Careers Main Section */}
        <CareersView />
      </div>
    </div>
  );
}
