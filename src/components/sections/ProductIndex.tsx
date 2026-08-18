import { SectionLabel } from "../ui/SectionLabel";
import { productsData } from "@/content/products";

export function ProductIndex() {
  return (
    <section
      id="products"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-brand-border bg-brand-black"
      aria-labelledby="products-heading"
    >
      <div className="max-w-[1520px] mx-auto">
        <SectionLabel index="03" title="Products" />

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-brand-border/40">
          <div className="lg:col-span-6">
            <h2
              id="products-heading"
              className="font-sans font-medium text-brand-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight"
            >
              A portfolio in progress.
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="font-sans text-brand-muted text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Ethisyn is developing its first generation of products. We will share each product
              when it is ready.
            </p>
          </div>
        </div>

        {/* Honest Data-Driven Product Rows */}
        <div className="divide-y divide-brand-border">
          {productsData.map((product) => (
            <article
              key={product.id}
              className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Product Identifier (4 columns) */}
              <div className="lg:col-span-4 space-y-2">
                <span className="font-mono text-xs text-brand-faint">
                  INDEX / {product.index}
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

              {/* Description & Category (5 columns) */}
              <div className="lg:col-span-5 space-y-2">
                <p className="font-mono text-xs uppercase tracking-wider text-brand-faint">
                  Category: {product.category}
                </p>
                <p className="font-sans text-brand-offwhite text-base md:text-lg font-light leading-relaxed pt-1">
                  {product.description}
                </p>
              </div>

              {/* Release Schedule (3 columns) */}
              <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-brand-border/40 pt-4 lg:pt-0 lg:pl-8 space-y-1 font-mono text-xs">
                <span className="text-brand-faint uppercase tracking-wider block">
                  Release
                </span>
                <span className="text-brand-offwhite font-medium text-sm block">
                  {product.release}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
