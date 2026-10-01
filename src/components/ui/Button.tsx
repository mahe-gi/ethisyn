import React, { forwardRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text" | "inverted";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  showArrow?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      showArrow = false,
      loading = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "min-h-[38px] px-3.5 py-1.5 text-xs",
      md: "min-h-[44px] px-5 py-2.5 text-sm",
      lg: "min-h-[50px] px-7 py-3 text-base",
    };

    const variantClasses = {
      primary:
        "bg-white text-black hover:bg-neutral-200 active:scale-[0.97] border border-transparent shadow-[0_1px_3px_rgba(0,0,0,0.5)]",
      secondary:
        "bg-white/[0.05] text-[#EDEDED] hover:bg-white/[0.1] hover:text-white active:scale-[0.97] border border-white/[0.08]",
      outline:
        "bg-transparent text-[#EDEDED] hover:border-white/[0.2] hover:text-white active:scale-[0.97] border border-white/[0.08]",
      text: "bg-transparent text-[#A1A1AA] hover:text-white p-0 min-h-0 border-0 hover:underline underline-offset-4",
      inverted:
        "bg-black text-white hover:bg-neutral-900 active:scale-[0.97] border border-white/[0.12]",
    };

    const baseClasses = cn(
      "relative inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-200 select-none group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2",
      sizeClasses[size],
      variantClasses[variant],
      (disabled || loading) && "opacity-50 cursor-not-allowed pointer-events-none",
      className
    );

    const content = (
      <>
        {loading && (
          <span
            className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin flex-shrink-0"
            aria-hidden="true"
          />
        )}
        <span>{children}</span>
        {showArrow && (
          <ArrowUpRight
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
            aria-hidden="true"
          />
        )}
      </>
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClasses}
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className={baseClasses}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled || loading}
        className={baseClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
