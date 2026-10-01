"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Sparkles } from "lucide-react";
import { Logo } from "../ui/Logo";
import { Wordmark } from "../ui/Wordmark";
import { footerNavLinks } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const gptQuery = encodeURIComponent(
    "Explain Ethisyn: What does this company do, who are the founders in Hyderabad, and what software and AI services do they build?"
  );

  return (
    <footer className="border-t border-white/[0.06] bg-black pt-16 md:pt-24 pb-12 px-5 sm:px-8 md:px-12 select-none">
      <div className="max-w-[1520px] mx-auto space-y-12">
        {/* Top 3-Column Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.05]">
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

            <p className="font-sans text-[#A1A1AA] text-sm md:text-base leading-relaxed max-w-sm font-light">
              {siteConfig.tagline}
            </p>

            <div className="space-y-1 font-mono text-xs text-[#71717A] uppercase tracking-wider">
              <p>{siteConfig.location.formatted}</p>
              <p>
                Direct:{" "}
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-white hover:underline"
                >
                  {siteConfig.contactEmail}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Services Index (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <p className="font-mono text-xs text-[#71717A] uppercase tracking-[0.16em]">
              Services
            </p>
            <ul className="space-y-2.5 font-sans text-sm">
              {footerNavLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#A1A1AA] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company & Direct Channels (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <p className="font-mono text-xs text-[#71717A] uppercase tracking-[0.16em]">
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
                      className="text-[#A1A1AA] hover:text-white transition-colors duration-150 inline-flex items-center gap-1"
                    >
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[#A1A1AA] hover:text-white transition-colors duration-150"
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
                    className="text-[#71717A] hover:text-white transition-colors duration-150 text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Minimal AI Verification & GEO Strip */}
        <div className="py-2.5 px-4 sm:px-5 rounded-lg border border-white/[0.06] bg-[#080808] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
          {/* Left: Ask AI Triggers */}
          <div className="flex flex-wrap items-center gap-2.5 text-[#A1A1AA]">
            <span className="flex items-center gap-1.5 text-white">
              <Sparkles className="w-3.5 h-3.5 text-[#71717A]" aria-hidden="true" />
              <span>Ask AI about Ethisyn:</span>
            </span>
            <div className="flex items-center gap-1.5">
              <a
                href={`https://chatgpt.com/?q=${gptQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask ChatGPT about Ethisyn"
                title="Ask ChatGPT about Ethisyn"
                className="w-7 h-7 rounded border border-white/10 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.08] text-[#A1A1AA] hover:text-white flex items-center justify-center transition-all duration-150 focus-visible:outline-2 focus-visible:outline-white"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                </svg>
              </a>
              <a
                href={`https://gemini.google.com/app?prompt=${gptQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask Google Gemini about Ethisyn"
                title="Ask Google Gemini about Ethisyn"
                className="w-7 h-7 rounded border border-white/10 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.08] text-[#A1A1AA] hover:text-white flex items-center justify-center transition-all duration-150 focus-visible:outline-2 focus-visible:outline-white"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Clean GEO Indicator & llms.txt */}
          <div className="flex items-center gap-3 text-[#71717A] text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-[#A1A1AA]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span>GEO: Hyderabad, India</span>
            </span>
            <span className="text-white/20">•</span>
            <a
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-0.5 text-[#A1A1AA]"
              title="Machine-readable AI knowledge file"
            >
              <span>llms.txt</span>
              <ArrowUpRight className="w-3 h-3 text-[#71717A]" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Location & Scroll to Top */}
        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#71717A]">
          <div>
            <span>
              © {siteConfig.founded}–{new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline-block font-sans text-[#A1A1AA]">
              {siteConfig.location.formatted}
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:text-white transition-colors focus-visible:outline-2"
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
