import React from "react";
import { cn } from "@/lib/utils";

export interface WordmarkProps {
  className?: string;
  inverted?: boolean;
}

export function Wordmark({ className, inverted = false }: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-sans font-semibold tracking-[0.18em] uppercase text-sm md:text-base leading-none select-none transition-colors duration-200",
        inverted ? "text-brand-inverted-fg" : "text-brand-white",
        className
      )}
    >
      Ethisyn
    </span>
  );
}
