import { Hero } from "@/components/sections/Hero";
import { CorePillars } from "@/components/sections/CorePillars";
import { BusinessOutcomes } from "@/components/sections/BusinessOutcomes";
import { OurApproach } from "@/components/sections/OurApproach";
import { WhyEthisyn } from "@/components/sections/WhyEthisyn";
import { AISpotlight } from "@/components/sections/AISpotlight";
import { ProductIndex } from "@/components/sections/ProductIndex";
import { TeamTeaser } from "@/components/sections/TeamTeaser";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <div className="relative flex flex-col w-full overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* 1. Hero: Main Positioning & Velocity Proof */}
      <Hero />

      {/* 2. Core 4 Pillars: BUILD → AUTOMATE → GROW → CREATE */}
      <CorePillars />

      {/* 3. Business Outcomes: What We Help Businesses Do */}
      <BusinessOutcomes />

      {/* 4. Our Approach: 5-Stage Predictable Methodology */}
      <OurApproach />

      {/* 5. Why Ethisyn: 6 Studio Differentiators */}
      <WhyEthisyn />

      {/* 6. AI Agent Spotlight & Telemetry Engine */}
      <AISpotlight />

      {/* 7. In-House Products & Tooling */}
      <ProductIndex />

      {/* 8. Founding Builders Team Teaser */}
      <TeamTeaser />

      {/* 9. Perspectives & Engineering Research */}
      <BlogTeaser />

      {/* 10. Direct Technical Consultation & Form */}
      <FinalCTA />
    </div>
  );
}
