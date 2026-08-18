import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { DomainRows } from "@/components/sections/DomainRows";
import { ProductIndex } from "@/components/sections/ProductIndex";
import { Principles } from "@/components/sections/Principles";
import { Process } from "@/components/sections/Process";
import { Company } from "@/components/sections/Company";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <DomainRows />
      <ProductIndex />
      <Principles />
      <Process />
      <Company />
      <FinalCTA />
    </>
  );
}
