import React from "react";
import { LucideIcon, Inbox } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export interface EmptyStateProps {
  icon?: LucideIcon | React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon: IconProp = Inbox,
  title,
  description,
  actionLabel,
  actionHref,
  onAction,
  children,
  className,
}: EmptyStateProps) {
  const isCustomNode = React.isValidElement(IconProp);

  return (
    <div
      className={cn(
        "p-12 border border-white/[0.06] rounded-2xl bg-[#080808]/80 flex flex-col items-center justify-center text-center space-y-4 max-w-lg mx-auto shadow-lg",
        className
      )}
    >
      <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#A1A1AA]">
        {isCustomNode ? (
          IconProp
        ) : typeof IconProp === "function" ? (
          <IconProp className="w-6 h-6 text-white" />
        ) : null}
      </div>

      <div className="space-y-1.5 max-w-sm">
        <h4 className="font-sans font-medium text-white text-lg tracking-tight">
          {title}
        </h4>
        <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
          {description}
        </p>
      </div>

      {children ? (
        <div className="pt-2 w-full">{children}</div>
      ) : actionLabel && (actionHref || onAction) ? (
        <div className="pt-2">
          {actionHref ? (
            <Button href={actionHref} variant="outline" size="sm">
              {actionLabel}
            </Button>
          ) : (
            <Button variant="outline" size="sm" onClick={onAction}>
              {actionLabel}
            </Button>
          )}
        </div>
      ) : null}
    </div>
  );
}
