import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data handling notice for Ethisyn.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy — Ethisyn",
    description: "Our honest commitments to minimal data handling, zero tracking cookies, and user privacy.",
    url: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 px-5 sm:px-8 md:px-12 bg-black">
      <div className="max-w-[1000px] mx-auto space-y-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Legal", href: "/#company" },
            { label: "Privacy Policy" },
          ]}
        />

        <div className="space-y-4">
          <Badge variant="neutral" size="sm">
            LEGAL NOTICE
          </Badge>
          <h1 className="font-sans font-medium text-white text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs text-[#71717A]">
            LAST UPDATED: OCTOBER 2025 • HYDERABAD, INDIA
          </p>
        </div>

        <div className="space-y-8 font-sans text-sm md:text-base text-[#A1A1AA] font-light leading-relaxed border-t border-white/[0.06] pt-8">
          <div className="space-y-3">
            <h2 className="font-sans text-xl font-medium text-white">1. Overview</h2>
            <p>
              Ethisyn is an independent studio founded in Hyderabad, India. We believe in keeping data practices simple and transparent. We only collect the minimal information needed to communicate with you about your projects and provide software services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-sans text-xl font-medium text-white">2. Project Inquiries & Contact Info</h2>
            <p>
              When you submit a project inquiry through our contact form, we collect your name, work email address, phone number (if provided), company name, selected services, and project description. We use this information solely to evaluate your project, respond to your inquiry, and deliver our services.
            </p>
            <p className="text-white">
              We never sell, rent, or trade your contact information to advertising networks, brokers, or third parties.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-sans text-xl font-medium text-white">3. Zero Invasive Tracking & No Ad Cookies</h2>
            <p>
              We do not use invasive third-party ad tracking pixels, cross-site trackers, or commercial surveillance tools. We use only lightweight, cookieless aggregate metrics to understand website performance and improve user experience.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-sans text-xl font-medium text-white">4. Data Security</h2>
            <p>
              All communication with our website is encrypted over HTTPS with modern SSL protocols. Inbound project details are securely transmitted to our engineering team and protected with strict access controls.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-sans text-xl font-medium text-white">5. Your Rights & Contact</h2>
            <p>
              You have the right to request a copy of any personal data we hold about you or ask us to delete it permanently. To make a request, email us directly at{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="underline text-white">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/[0.06]">
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-wider text-[#A1A1AA] hover:text-white transition-colors"
          >
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
