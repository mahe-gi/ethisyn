import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy and data handling notice for Ethisyn. Learn how we handle inbound inquiries and visitor data.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy — Ethisyn",
    description: "Our data handling, contact inquiry processing, and privacy commitments.",
    url: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36 px-5 sm:px-8 md:px-12 bg-brand-black">
      <div className="max-w-[1000px] mx-auto space-y-16">
        {/* Header */}
        <div className="border-b border-brand-border/40 pb-12">
          <SectionLabel index="08" title="Legal & Trust" />
          <h1 className="font-sans font-medium text-brand-white text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05]">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs text-brand-faint mt-4">
            LAST UPDATED: AUGUST 2026 • HYDERABAD, TELANGANA, INDIA
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-12 font-sans font-light text-brand-muted text-base md:text-lg leading-relaxed">
          <section className="space-y-4">
            <h2 className="font-sans font-medium text-2xl text-brand-white">
              1. Overview
            </h2>
            <p>
              Ethisyn is an independent product technology company based in Hyderabad, India. We
              respect your privacy and are committed to transparent, minimal data practices across our
              public website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans font-medium text-2xl text-brand-white">
              2. Contact Form Submissions
            </h2>
            <p>
              When you choose to send a message via our contact form, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-brand-offwhite font-normal">
              <li>Your name</li>
              <li>Your work email address</li>
              <li>Your company or organization name (optional)</li>
              <li>The message content describing what you would like to discuss</li>
            </ul>
            <p>
              <strong className="text-brand-offwhite font-medium">Purpose & Delivery:</strong> This
              information is collected solely to respond to your inquiry. Messages are transmitted
              securely over TLS encryption and delivered to our internal company mailbox. We do not
              sell, rent, or distribute your inquiry details to third parties for advertising or
              marketing lists.
            </p>
            <p>
              <strong className="text-brand-offwhite font-medium">Retention:</strong> Inquiry records
              are retained only as long as necessary to conduct relevant discussions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans font-medium text-2xl text-brand-white">
              3. Analytics & Cookies
            </h2>
            <p>
              Our website does not use invasive advertising cookies or cross-site tracking pixels. If
              aggregate telemetry is enabled, it uses cookieless, privacy-preserving metrics to assess
              basic page performance and site stability without storing personal identifiers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans font-medium text-2xl text-brand-white">
              4. Data Inquiries & Deletion Requests
            </h2>
            <p>
              If you have submitted an inquiry and would like to review, update, or request the deletion
              of your communication records, please contact us directly at{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-brand-white underline underline-offset-2 hover:opacity-80"
              >
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
