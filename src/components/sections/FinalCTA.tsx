import React from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { ContactForm } from "../ui/ContactForm";
import { Button } from "../ui/Button";
import { siteConfig } from "@/content/site";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 bg-brand-black"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1520px] mx-auto">
        <SectionLabel index="08" title="Start a Project" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-4">
          {/* Left Column: Heading & Quick Links (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2
                id="contact-heading"
                className="font-sans font-medium text-brand-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]"
              >
                Ready to build something great?
              </h2>
            </div>

            <p className="font-sans text-brand-muted text-base md:text-lg font-light leading-relaxed">
              Tell us about what you want to build or automate. We will get back to you within 24 hours with honest advice and a clear plan.
            </p>

            <div className="pt-4 space-y-3">
              <p className="font-mono text-xs text-brand-faint uppercase tracking-wider">
                Direct Contact
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  href={`mailto:${siteConfig.contactEmail}`}
                  isExternal
                  variant="secondary"
                  size="md"
                  aria-label={`Send email to ${siteConfig.contactEmail}`}
                >
                  {siteConfig.contactEmail}
                </Button>
                <Button
                  href={siteConfig.social.linkedin}
                  isExternal
                  variant="outline"
                  size="md"
                  showArrow
                  aria-label="Visit Ethisyn on LinkedIn"
                >
                  LinkedIn
                </Button>
                <Button
                  href={siteConfig.social.googleBusinessProfile}
                  isExternal
                  variant="outline"
                  size="md"
                  showArrow
                  aria-label="View Google Business Profile"
                >
                  Google Profile
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Scoping Form (7 cols) */}
          <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-brand-border pt-8 lg:pt-0 lg:pl-12">
            <div className="pb-6">
              <h3 id="contact-form-heading" className="font-mono text-xs uppercase tracking-[0.16em] text-brand-muted">
                Project Inquiry
              </h3>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
