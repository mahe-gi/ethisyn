import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  kicker?: string;
  heading: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
  id?: string;
  className?: string;
}

export function SectionHeader({
  kicker,
  heading,
  subtitle,
  action,
  id,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "pb-8 md:pb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6",
        className
      )}
    >
      <div className="space-y-4 max-w-3xl">
        {kicker && (
          <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 block">
            {kicker}
          </span>
        )}

        <h2
          id={id}
          className="font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08]"
        >
          {heading}
        </h2>

        {subtitle && (
          <p className="text-[#A1A1AA] text-lg sm:text-xl md:text-2xl font-normal leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <div className="flex-shrink-0 flex items-center gap-3">
          {action}
        </div>
      )}
    </div>
  );
}
