import React from "react";
import { cn } from "@/lib/utils";

export interface StatusLabelProps {
  label: string;
  dot?: boolean;
  className?: string;
  variant?: "default" | "inverted" | "faint";
}

export function StatusLabel({
  label,
  dot = false,
  className,
  variant = "default",
}: StatusLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] md:text-xs tracking-[0.14em] uppercase select-none transition-colors",
        variant === "default" && "text-brand-muted",
        variant === "inverted" && "text-brand-inverted-fg/70",
        variant === "faint" && "text-brand-faint",
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full flex-shrink-0",
            variant === "inverted" ? "bg-brand-inverted-fg" : "bg-brand-white"
          )}
          aria-hidden="true"
        />
      )}
      <span>{label}</span>
    </span>
  );
}
