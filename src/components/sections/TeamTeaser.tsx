import React from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";

export function TeamTeaser() {
  return (
    <section
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-brand-border bg-brand-black"
      aria-labelledby="team-teaser-heading"
    >
      <div className="max-w-[1520px] mx-auto">
        <SectionLabel index="06" title="The Builders" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8 space-y-6">
            <h2
              id="team-teaser-heading"
              className="font-sans font-medium text-brand-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]"
            >
              Meet the people who actually{" "}
              <span className="font-serif italic font-normal text-brand-offwhite">
                write your code.
              </span>
            </h2>

            <p className="font-sans text-brand-muted text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              We are an independent team of engineers, designers, and growth experts based in Hyderabad. We do not use sales middlemen or outsource your project to mystery freelancers. You talk directly with the people building your product.
            </p>

            <div className="pt-2">
              <Button href="/team" variant="primary" size="lg" showArrow>
                Meet our full team
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 border-l border-brand-border/40 pl-8 space-y-4 font-mono text-xs text-brand-faint">
            <p className="tracking-[0.16em] uppercase">BASED IN HYDERABAD</p>
            <p className="text-brand-offwhite font-sans text-sm font-light">
              “Direct builder access. Zero junk code. We use the tools we build. Honest advice always.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
