"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Logo } from "../ui/Logo";
import { Wordmark } from "../ui/Wordmark";
import { siteConfig } from "@/content/site";
import { footerNavLinks } from "@/content/navigation";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-brand-border bg-brand-black pt-16 md:pt-24 pb-12 text-brand-muted select-none">
      <div className="max-w-[1520px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Top Tier: Logo, Tagline, Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-brand-border">
          {/* Brand & Purpose (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 group focus-visible:outline-2"
              aria-label="Ethisyn — Home"
            >
              <Logo size={28} alt="" />
              <Wordmark />
            </Link>
            <p className="font-sans text-brand-offwhite text-lg md:text-xl font-normal leading-relaxed max-w-sm">
              {siteConfig.tagline}
            </p>
            <p className="font-mono text-xs text-brand-faint uppercase tracking-wider">
              {siteConfig.location.city}, {siteConfig.location.country} • EST. {siteConfig.founded}
            </p>
          </div>

          {/* Nav Links: Architecture (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <p className="font-mono text-xs text-brand-white uppercase tracking-[0.16em]">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {footerNavLinks.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-brand-muted hover:text-brand-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Links: Company & Direct (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-4">
              <p className="font-mono text-xs text-brand-white uppercase tracking-[0.16em]">
                Company & Contact
              </p>
              <ul className="space-y-2.5">
                {footerNavLinks.company.map((item) => (
                  <li key={item.href}>
                    {item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm text-brand-muted hover:text-brand-white transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{item.label}</span>
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="font-sans text-sm text-brand-muted hover:text-brand-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Link
                href="/privacy"
                className="font-sans text-xs text-brand-faint hover:text-brand-muted transition-colors underline underline-offset-2"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Static System Status, Copyright, Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Static System Status Line (No Moving Ticker) */}
          <div className="font-mono text-xs tracking-[0.2em] text-brand-faint uppercase">
            {siteConfig.status.motto}
          </div>

          {/* Copyright & Top Button */}
          <div className="flex items-center gap-6 self-stretch md:self-auto justify-between md:justify-end">
            <span className="font-mono text-xs text-brand-faint">
              © {siteConfig.founded} Ethisyn. All rights reserved.
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="min-h-[38px] min-w-[38px] p-2 border border-brand-border hover:border-brand-border-strong text-brand-muted hover:text-brand-white transition-colors flex items-center justify-center focus-visible:outline-2"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
