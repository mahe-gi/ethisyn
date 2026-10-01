"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import { Logo } from "../ui/Logo";
import { Wordmark } from "../ui/Wordmark";
import { Button } from "../ui/Button";
import { allSectionNavItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Body scroll lock
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button initially
    closeBtnRef.current?.focus();

    // Trap focus and handle Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation Menu"
      className="fixed inset-0 z-50 bg-brand-black flex flex-col justify-between p-6 sm:p-8 animate-fade-in"
    >
      {/* Drawer Header */}
      <div className="flex items-center justify-between pb-6 border-b border-brand-border">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-3"
          aria-label="Ethisyn — Home"
        >
          <Logo size={28} alt="" />
          <Wordmark />
        </Link>

        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-brand-muted hover:text-white border border-brand-border transition-colors focus-visible:outline-2"
          aria-label="Close navigation menu"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4 py-8 overflow-y-auto" aria-label="Mobile Navigation">
        {allSectionNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="flex items-center justify-between py-2 text-2xl font-medium text-brand-white hover:text-brand-offwhite transition-colors group"
          >
            <div className="flex items-baseline gap-4">
              {item.index && (
                <span className="font-mono text-xs text-brand-faint">
                  {item.index}
                </span>
              )}
              <span>{item.label}</span>
            </div>
            <ArrowUpRight
              className="w-5 h-5 text-brand-faint group-hover:text-brand-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              aria-hidden="true"
            />
          </Link>
        ))}
      </nav>

      {/* Drawer Footer Actions */}
      <div className="pt-6 border-t border-brand-border space-y-4">
        <div className="flex justify-between items-center text-xs font-mono text-brand-faint uppercase tracking-wider">
          <span>{siteConfig.location.formatted}</span>
          <span>EST. {siteConfig.founded}</span>
        </div>

        <Button
          href="/#contact"
          variant="primary"
          size="lg"
          className="w-full justify-center"
          onClick={onClose}
          showArrow
        >
          Start a project
        </Button>
      </div>
    </div>
  );
}
