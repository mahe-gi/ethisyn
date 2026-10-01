import React from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { proprietaryProducts } from "@/content/products";

export function ProductIndex() {
  return (
    <section
      id="products"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-brand-border bg-brand-black"
      aria-labelledby="products-heading"
    >
      <div className="max-w-[1520px] mx-auto">
        <SectionLabel index="04" title="Our In-House Products" />

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-brand-border/40">
          <div className="lg:col-span-6 space-y-4">
            <h2
              id="products-heading"
              className="font-sans font-medium text-brand-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight"
            >
              Software we build and run ourselves.
            </h2>
            <p className="font-sans text-brand-muted text-base sm:text-lg md:text-xl font-light leading-relaxed">
              When we see big everyday headaches, we build dedicated products to solve them. Here is what we are building right now.
            </p>
          </div>
        </div>

        {/* 3 Product Rows */}
        <div className="divide-y divide-brand-border">
          {proprietaryProducts.map((product) => (
            <article
              key={product.id}
              className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Product Identifier (4 cols) */}
              <div className="lg:col-span-4 space-y-2">
                <span className="font-mono text-xs text-brand-faint">
                  INDEX / {product.index} • {product.badge}
                </span>
                <h3 className="font-sans text-2xl md:text-3xl font-medium text-brand-white">
                  {product.name}
                </h3>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-brand-offwhite border border-brand-border-strong px-2.5 py-1 bg-white/[0.03]">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-brand-white animate-pulse-subtle"
                      aria-hidden="true"
                    />
                    {product.status}
                  </span>
                </div>
              </div>

              {/* Tagline & Benefits (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <p className="font-sans text-base md:text-lg font-normal text-brand-offwhite leading-relaxed">
                  {product.tagline}
                </p>
                <p className="font-sans text-brand-muted text-sm leading-relaxed font-light">
                  {product.description}
                </p>
                <ul className="space-y-1.5 pt-2 font-sans text-xs text-brand-muted font-light">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-white/70 mt-1.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Access Note (3 cols) */}
              <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-brand-border/40 pt-4 lg:pt-0 lg:pl-8 space-y-2 font-mono text-xs">
                <span className="text-brand-faint uppercase tracking-wider block">
                  Access
                </span>
                <p className="text-brand-muted text-xs font-sans font-light leading-relaxed">
                  Early beta access will be opened to select partners and students soon.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
