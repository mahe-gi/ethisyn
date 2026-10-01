import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error" | "info" | "outline" | "neutral";
  size?: "sm" | "md";
  dot?: boolean;
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  size = "sm",
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-white/[0.04] border-white/[0.08] text-white",
    neutral: "bg-white/[0.02] border-white/[0.05] text-[#A1A1AA]",
    success: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    warning: "bg-amber-500/10 border-amber-500/20 text-amber-300",
    error: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    info: "bg-sky-500/10 border-sky-500/20 text-sky-300",
    outline: "bg-transparent border-white/[0.08] text-[#A1A1AA] hover:border-white/[0.16]",
  };

  const dotStyles = {
    default: "bg-white",
    neutral: "bg-[#A1A1AA]",
    success: "bg-emerald-400 animate-pulse",
    warning: "bg-amber-400",
    error: "bg-rose-400",
    info: "bg-sky-400",
    outline: "bg-[#A1A1AA]",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[10px] tracking-wider",
    md: "px-3 py-1 text-xs tracking-wide",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 uppercase tracking-widest border rounded-full font-medium select-none transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", dotStyles[variant])}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
