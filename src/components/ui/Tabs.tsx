"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  count?: number | string;
  icon?: React.ReactNode;
  badge?: string;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
  ariaLabel?: string;
}

export function Tabs({
  tabs,
  activeTab,
  onChange,
  className,
  ariaLabel = "Filter options",
}: TabsProps) {
  const tabsListRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex: number | null = null;

    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = tabs.length - 1;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      const nextTab = tabs[nextIndex];
      onChange(nextTab.id);
      const buttons = tabsListRef.current?.querySelectorAll<HTMLButtonElement>("button");
      buttons?.[nextIndex]?.focus();
    }
  };

  return (
    <div
      ref={tabsListRef}
      role="tablist"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center gap-1.5 p-1.5 bg-[#0a0a0a] border border-white/[0.06] rounded-2xl select-none",
        className
      )}
    >
      {tabs.map((tab, idx) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            role="tab"
            type="button"
            id={`tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`tabpanel-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer focus-visible:outline-2",
              isActive
                ? "bg-white text-black font-semibold shadow-sm scale-[1.01]"
                : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]"
            )}
          >
            {tab.icon && (
              <span className={cn("w-3.5 h-3.5", isActive ? "text-brand-black" : "text-brand-faint")}>
                {tab.icon}
              </span>
            )}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={cn(
                  "px-1.5 py-0.2 rounded-full text-[10px]",
                  isActive
                    ? "bg-brand-black text-brand-white"
                    : "bg-white/[0.08] text-brand-muted"
                )}
              >
                {tab.count}
              </span>
            )}
            {tab.badge && (
              <span
                className={cn(
                  "text-[9px] uppercase px-1.5 py-0.5 rounded-full",
                  isActive
                    ? "bg-amber-500/20 text-amber-900 border border-amber-600/30 font-bold"
                    : "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                )}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
