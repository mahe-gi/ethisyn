import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  // Normalize items to ensure Home is never duplicated
  const normalizedItems =
    items.length > 0 &&
    (items[0].label.trim().toLowerCase() === "home" || items[0].href === "/")
      ? items.slice(1)
      : items;

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center gap-2 text-xs text-brand-faint uppercase tracking-wider select-none",
        className
      )}
    >
      <Link
        href="/"
        className="hover:text-brand-white transition-colors duration-150"
      >
        Home
      </Link>

      {normalizedItems.map((item, index) => {
        const isLast = index === normalizedItems.length - 1;

        return (
          <React.Fragment key={item.label}>
            <ChevronRight className="w-3 h-3 text-brand-border" aria-hidden="true" />
            {isLast || !item.href ? (
              <span className="text-brand-offwhite font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-brand-white transition-colors duration-150"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
