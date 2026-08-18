import { SectionLabel } from "../ui/SectionLabel";
import { processData } from "@/content/process";

export function Process() {
  return (
    <section
      id="process"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-brand-border bg-brand-black"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1520px] mx-auto">
        <SectionLabel index="05" title="How We Build" />

        <div className="pb-16 border-b border-brand-border/40">
          <h2
            id="process-heading"
            className="font-sans font-medium text-brand-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-2xl"
          >
            From possibility to dependable product.
          </h2>
        </div>

        {/* 4-Stage Progressive Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-12">
          {processData.map((stage) => (
            <div
              key={stage.step}
              className="border-t border-brand-border pt-8 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs text-brand-faint">
                  STAGE / {stage.step}
                </span>
                <h3 className="font-sans text-2xl font-medium text-brand-white">
                  {stage.title}
                </h3>
              </div>

              <div className="border-t border-brand-border/30 pt-4">
                <p className="font-sans text-brand-muted text-sm md:text-base font-light leading-relaxed">
                  {stage.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
