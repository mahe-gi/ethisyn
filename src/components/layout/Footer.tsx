"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Logo } from "../ui/Logo";
import { Wordmark } from "../ui/Wordmark";
import { footerNavLinks } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-brand-border bg-brand-black pt-16 md:pt-24 pb-12 px-5 sm:px-8 md:px-12 select-none">
      <div className="max-w-[1520px] mx-auto">
        {/* Top 3-Column Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-brand-border/40">
          {/* Column 1: Identity & Motto (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 group focus-visible:outline-2"
              aria-label="Ethisyn — Back to top"
            >
              <Logo size={32} alt="" />
              <Wordmark />
            </Link>

            <p className="font-sans text-brand-muted text-sm md:text-base leading-relaxed max-w-sm font-light">
              {siteConfig.tagline}
            </p>

            <div className="space-y-1 font-mono text-xs text-brand-faint uppercase tracking-wider">
              <p>{siteConfig.location.formatted}</p>
              <p>Direct: <a href={`mailto:${siteConfig.contactEmail}`} className="text-brand-white hover:underline">{siteConfig.contactEmail}</a></p>
            </div>
          </div>

          {/* Column 2: Services Index (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <p className="font-mono text-xs text-brand-faint uppercase tracking-[0.16em]">
              Services
            </p>
            <ul className="space-y-2.5 font-sans text-sm">
              {footerNavLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-muted hover:text-brand-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company & Direct Channels (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <p className="font-mono text-xs text-brand-faint uppercase tracking-[0.16em]">
              Company
            </p>
            <ul className="space-y-2.5 font-sans text-sm">
              {footerNavLinks.company.map((link) => (
                <li key={link.label}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-muted hover:text-brand-white transition-colors duration-150 inline-flex items-center gap-1"
                    >
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-brand-muted hover:text-brand-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              {footerNavLinks.legal.map((link) => (
                <li key={link.label} className="pt-2">
                  <Link
                    href={link.href}
                    className="text-brand-faint hover:text-brand-white transition-colors duration-150 text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Coordinates & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-brand-faint">
          <div>
            <span>© {siteConfig.founded} {siteConfig.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline-block">HYD / {siteConfig.location.coordinates}</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:text-brand-white transition-colors focus-visible:outline-2"
              aria-label="Scroll back to top of page"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
