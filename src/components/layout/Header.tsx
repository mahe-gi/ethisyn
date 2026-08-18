"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "../ui/Logo";
import { Wordmark } from "../ui/Wordmark";
import { Button } from "../ui/Button";
import { StatusLabel } from "../ui/StatusLabel";
import { MobileMenu } from "./MobileMenu";
import { mainNavItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 select-none",
          isScrolled
            ? "bg-brand-black/90 backdrop-blur-md border-b border-brand-border py-3.5"
            : "bg-transparent border-b border-transparent py-5"
        )}
      >
        <div className="max-w-[1520px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Brand Link (Logo + Wordmark) */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus-visible:outline-2 py-1"
            aria-label="Ethisyn — Home"
          >
            <Logo size={28} priority alt="" />
            <Wordmark />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main Navigation"
          >
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-xs uppercase tracking-[0.14em] text-brand-muted hover:text-brand-white transition-colors duration-150 py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Area: Metadata Status + CTA + Mobile Hamburger */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Status Label (Hidden on smaller desktop/tablets to prevent crowding) */}
            <div className="hidden xl:block">
              <StatusLabel
                label={`${siteConfig.location.code} / EST. ${siteConfig.founded}`}
                dot
                variant="faint"
              />
            </div>

            {/* Desktop Contact CTA */}
            <div className="hidden sm:block">
              <Button href="/#contact" variant="primary" size="sm" showArrow>
                Start a conversation
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-brand-muted hover:text-white border border-brand-border hover:border-brand-border-strong transition-colors focus-visible:outline-2"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
