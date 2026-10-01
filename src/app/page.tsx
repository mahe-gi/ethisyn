import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AISpotlight } from "@/components/sections/AISpotlight";
import { ProductIndex } from "@/components/sections/ProductIndex";
import { Process } from "@/components/sections/Process";
import { TeamTeaser } from "@/components/sections/TeamTeaser";
import { Company } from "@/components/sections/Company";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <ServicesGrid />
      <AISpotlight />
      <ProductIndex />
      <Process />
      <TeamTeaser />
      <Company />
      <FinalCTA />
    </>
  );
}
