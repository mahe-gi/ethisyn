import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AISpotlight } from "@/components/sections/AISpotlight";
import { Process } from "@/components/sections/Process";
import { Manifesto } from "@/components/sections/Manifesto";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { TeamTeaser } from "@/components/sections/TeamTeaser";
import { Company } from "@/components/sections/Company";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <div className="relative flex flex-col w-full overflow-hidden bg-black">
      <Hero />
      <ServicesGrid />
      <AISpotlight />
      <Process />
      <Manifesto />
      <BlogTeaser />
      <TeamTeaser />
      <Company />
      <FinalCTA />
    </div>
  );
}
