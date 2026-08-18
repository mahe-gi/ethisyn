import { SectionLabel } from "../ui/SectionLabel";
import { principlesData } from "@/content/principles";

export function Principles() {
  return (
    <section
      id="principles"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-brand-border bg-brand-black"
      aria-labelledby="principles-heading"
    >
      <div className="max-w-[1520px] mx-auto">
        <SectionLabel index="04" title="Principles" />

        <div className="pb-16 border-b border-brand-border/40">
          <h2
            id="principles-heading"
            className="font-sans font-medium text-brand-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-2xl"
          >
            Built around clear principles.
          </h2>
        </div>

        {/* Editorial Sequence with Vertical Hairline & Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-12">
          {principlesData.map((principle) => (
            <div
              key={principle.index}
              className="relative flex flex-col justify-between border-t border-brand-border pt-8 space-y-4"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs text-brand-faint">
                  {principle.index} / PRINCIPLE
                </span>
                <h3 className="font-sans text-xl md:text-2xl font-medium text-brand-white">
                  {principle.title}
                </h3>
              </div>

              <div className="border-t border-brand-border/40 pt-4">
                <p className="font-sans text-sm md:text-base text-brand-muted font-light leading-relaxed">
                  {principle.statement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
