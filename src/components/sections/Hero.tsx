import { Button } from "../ui/Button";
import { StatusLabel } from "../ui/StatusLabel";
import { MonogramField } from "./MonogramField";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 md:pb-16 px-5 sm:px-8 md:px-12 border-b border-brand-border"
      aria-label="Hero Introduction"
    >
      <div className="max-w-[1520px] mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Top Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 md:pb-12 border-b border-brand-border/40 font-mono text-[11px] md:text-xs text-brand-muted uppercase tracking-[0.18em]">
          <div className="flex items-center gap-3">
            <span
              className="w-1.5 h-1.5 bg-brand-white rounded-full flex-shrink-0 animate-pulse-subtle"
              aria-hidden="true"
            />
            <span>INDEPENDENT PRODUCT TECHNOLOGY COMPANY</span>
          </div>
          <div className="flex items-center gap-6">
            <span>
              {siteConfig.location.city.toUpperCase()}, {siteConfig.location.country.toUpperCase()} / EST. {siteConfig.founded}
            </span>
          </div>
        </div>

        {/* Central Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-10 md:py-16">
          {/* Left / Main Typography (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="font-sans font-medium text-brand-white text-[clamp(2.85rem,7vw,7.25rem)] leading-[0.92] tracking-tight">
              Building technology with{" "}
              <span className="font-serif italic font-normal text-brand-offwhite">
                purpose.
              </span>
            </h1>

            <p className="font-sans text-brand-muted text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl font-light">
              {siteConfig.description}
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/#domains" variant="primary" size="lg" showArrow>
                Explore our direction
              </Button>
              <Button href="/#contact" variant="outline" size="lg">
                Start a conversation
              </Button>
            </div>
          </div>

          {/* Right / Geometric Monogram Visual Anchor (5 columns) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <MonogramField />
          </div>
        </div>

        {/* Bottom Status Metadata Bar */}
        <div className="pt-8 border-t border-brand-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-brand-faint uppercase tracking-wider">
          <div className="flex items-center gap-6">
            <StatusLabel label={siteConfig.status.state} dot variant="faint" />
            <span className="opacity-30">/</span>
            <StatusLabel label={siteConfig.status.focus} variant="faint" />
          </div>

          <div className="text-brand-muted/70 text-[11px] sm:text-xs">
            SCROLL TO EXPLORE
          </div>
        </div>
      </div>
    </section>
  );
}
