import { SectionLabel } from "../ui/SectionLabel";

export function Manifesto() {
  return (
    <section
      id="thesis"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-brand-border bg-brand-black"
      aria-labelledby="thesis-heading"
    >
      <div className="max-w-[1520px] mx-auto">
        <SectionLabel index="01" title="Thesis" />

        {/* 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-4">
          {/* Primary Statement (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            <h2
              id="thesis-heading"
              className="font-sans font-normal text-brand-white text-[clamp(2.2rem,4.5vw,4.85rem)] leading-[1.05] tracking-tight"
            >
              Technology should solve real problems. It should feel{" "}
              <span className="font-serif italic text-brand-offwhite">considered</span>,
              dependable and ready to grow.
            </h2>
          </div>

          {/* Grid Marker (4 Columns) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col justify-between border-l border-brand-border/40 pl-8 font-mono text-xs text-brand-faint">
            <div>
              <p className="tracking-[0.16em] uppercase">SYSTEM THESIS</p>
              <p className="text-brand-muted mt-1">PRODUCT PRINCIPLES / 01</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-[1px] bg-brand-border-strong" />
            </div>
          </div>
        </div>

        {/* Supporting Statement & Body Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 md:pt-24 mt-12 md:mt-16 border-t border-brand-border/40">
          <div className="lg:col-span-6">
            <p className="font-sans text-xl md:text-2xl lg:text-3xl text-brand-offwhite font-light leading-snug">
              “Purpose before novelty. Clarity before complexity. Systems before shortcuts.”
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6 text-brand-muted font-light text-base md:text-lg leading-relaxed">
            <p>
              Every Ethisyn product begins with a clear need. We combine thoughtful product decisions,
              careful design and dependable engineering to create technology that remains useful as it
              grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
