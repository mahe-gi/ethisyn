import React from "react";
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error" | "warning" | "info";
  title?: string;
  onDismiss?: () => void;
  children: React.ReactNode;
}

export function Alert({
  variant = "info",
  title,
  onDismiss,
  className,
  children,
  ...props
}: AlertProps) {
  const iconMap = {
    success: CheckCircle2,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  };

  const styleMap = {
    success: "border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-200",
    error: "border-rose-500/20 bg-rose-500/[0.06] text-rose-200",
    warning: "border-amber-500/20 bg-amber-500/[0.06] text-amber-200",
    info: "border-white/[0.08] bg-[#0a0a0a] text-white",
  };

  const iconColorMap = {
    success: "text-emerald-400",
    error: "text-rose-400",
    warning: "text-amber-400",
    info: "text-white",
  };

  const Icon = iconMap[variant];

  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      aria-live="polite"
      className={cn(
        "p-4 md:p-5 border rounded-2xl flex items-start gap-3.5 font-sans text-sm animate-in fade-in duration-200",
        styleMap[variant],
        className
      )}
      {...props}
    >
      <Icon className={cn("w-5 h-5 flex-shrink-0 mt-0.5", iconColorMap[variant])} aria-hidden="true" />

      <div className="flex-1 space-y-1">
        {title && (
          <h4 className="font-sans font-medium text-white tracking-tight">
            {title}
          </h4>
        )}
        <div className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
          {children}
        </div>
      </div>

      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="text-brand-faint hover:text-brand-white p-1 rounded-lg transition-colors flex-shrink-0"
          aria-label="Dismiss alert"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
