import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "interactive" | "flat" | "elevated";
  children: React.ReactNode;
}

export function Card({
  variant = "default",
  className,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "border border-white/[0.06] bg-[#080808]/80 shadow-lg",
    interactive:
      "border border-white/[0.06] bg-[#080808]/80 hover:border-white/[0.14] hover:bg-[#0e0e0e] transition-all duration-300 cursor-pointer group shadow-lg hover:-translate-y-0.5",
    flat: "border border-white/[0.04] bg-transparent",
    elevated:
      "border border-white/[0.08] bg-[#0c0c0c] shadow-2xl backdrop-blur-md",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-medium text-white text-xl sm:text-2xl tracking-tight leading-snug",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-xs sm:text-sm text-[#A1A1AA] leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-brand-faint",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
