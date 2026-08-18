"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import { Logo } from "../ui/Logo";
import { Wordmark } from "../ui/Wordmark";
import { Button } from "../ui/Button";
import { siteConfig } from "@/content/site";
import { allSectionNavItems } from "@/content/navigation";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

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
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation Menu"
      ref={dialogRef}
      className="fixed inset-0 z-50 bg-brand-black flex flex-col justify-between p-6 md:p-10 animate-fade-in"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-brand-border pb-6">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-3 group focus-visible:outline-2"
          aria-label="Ethisyn — Home"
        >
          <Logo size={28} priority alt="" />
          <Wordmark />
        </Link>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-brand-muted hover:text-white border border-brand-border hover:border-brand-border-strong transition-colors focus-visible:outline-2"
          aria-label="Close navigation menu"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Nav List */}
      <nav className="my-auto py-8" aria-label="Mobile Navigation">
        <ul className="space-y-3">
          {allSectionNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="group min-h-[48px] flex items-center justify-between border-b border-brand-border/60 py-2.5 text-2xl font-sans font-medium text-brand-offwhite hover:text-white transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-brand-faint">
                    {item.index}
                  </span>
                  <span>{item.label}</span>
                </div>
                <ArrowUpRight
                  className="w-5 h-5 text-brand-faint group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Info */}
      <div className="border-t border-brand-border pt-6 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="font-mono text-xs text-brand-faint uppercase tracking-wider">
              {siteConfig.location.code} • EST. {siteConfig.founded}
            </p>
            <p className="font-mono text-xs text-brand-muted mt-0.5">
              {siteConfig.status.motto}
            </p>
          </div>
          <Button
            href="/#contact"
            onClick={onClose}
            variant="primary"
            size="md"
            className="w-full sm:w-auto"
          >
            Start a conversation
          </Button>
        </div>
      </div>
    </div>
  );
}
