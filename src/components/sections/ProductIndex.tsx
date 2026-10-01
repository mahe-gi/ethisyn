import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowUpRight, Sparkles, Boxes, UtensilsCrossed, CheckCircle2, Globe } from "lucide-react";
import { proprietaryProducts } from "@/content/products";

const productIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "rental-circle": Boxes,
  gowider: UtensilsCrossed,
};

export function ProductIndex() {
  return (
    <section
      id="products"
      className="py-24 sm:py-32 md:py-40 px-5 sm:px-8 md:px-12 bg-black border-t border-white/[0.08] relative overflow-hidden"
      aria-labelledby="products-heading"
    >
      {/* Subtle atmospheric ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/3 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03),_transparent_70%)] blur-3xl rounded-full"
      />

      <div className="max-w-[1520px] mx-auto space-y-16 sm:space-y-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/[0.08]">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#71717A] font-medium">
                PROPRIETARY PRODUCTS // IN-HOUSE SOFTWARE
              </span>
            </div>

            <h2
              id="products-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.05]"
            >
              Software we build, launch, and operate ourselves.
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-normal text-[#A1A1AA] leading-relaxed max-w-2xl">
              Beyond client engineering, we incubate and operate our own software platforms to solve real-world industry bottlenecks.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button href="/#contact" variant="outline" size="md" showArrow>
              Discuss Partnership
            </Button>
          </div>
        </div>

        {/* 2-Column Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {proprietaryProducts.map((product) => {
            const Icon = productIcons[product.id] || Boxes;
            const isLive = product.status === "Live";

            return (
              <Card
                key={product.id}
                variant="interactive"
                className="group relative flex flex-col justify-between p-8 sm:p-10 md:p-12 border-white/[0.08] hover:border-white/[0.22] bg-[#080808] transition-all duration-300 rounded-3xl space-y-8"
              >
                <div className="space-y-6">
                  {/* Top Bar: Index + Badge + Status */}
                  <div className="flex items-center justify-between pb-5 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-emerald-400 font-medium">
                        [{product.index}]
                      </span>
                      <span className="text-xs tracking-widest uppercase text-[#A1A1AA] font-medium">
                        {product.badge}
                      </span>
                    </div>

                    <Badge variant={isLive ? "success" : "warning"} dot size="sm">
                      {product.status}
                    </Badge>
                  </div>

                  {/* Header: Icon + Title + Tagline */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center shrink-0 text-white group-hover:border-white/25 transition-colors">
                      <Icon className="w-7 h-7 text-emerald-400" />
                    </div>
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-snug">
                          {product.name}
                        </h3>
                        {product.url && (
                          <a
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                          >
                            <Globe className="w-3 h-3" />
                            <span>therentalcircle.in</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-[#D4D4D8] leading-relaxed font-light">
                    {product.description}
                  </p>

                  {/* Key Capabilities */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-[11px] text-[#71717A] uppercase tracking-[0.16em] font-medium block">
                      CORE PLATFORM ARCHITECTURE:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#E4E4E7]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Bar: Category & Action */}
                <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#71717A] font-medium">
                    {product.category}
                  </div>

                  {product.url ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-white hover:text-emerald-400 transition-colors shrink-0"
                    >
                      <span>Visit Live Platform</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-white hover:text-emerald-400 transition-colors shrink-0"
                    >
                      <span>Request Early Access</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
