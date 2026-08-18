import React from "react";
import { cn } from "@/lib/utils";

export interface SectionLabelProps {
  index: string;
  title: string;
  className?: string;
  inverted?: boolean;
}

export function SectionLabel({
  index,
  title,
  className,
  inverted = false,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] md:text-xs tracking-[0.2em] uppercase mb-6 select-none",
        inverted ? "text-brand-inverted-fg/70" : "text-brand-muted",
        className
      )}
    >
      <span className={cn(inverted ? "text-brand-inverted-fg" : "text-brand-white")}>
        {index}
      </span>
      <span className="opacity-40">/</span>
      <span>{title}</span>
    </div>
  );
}
