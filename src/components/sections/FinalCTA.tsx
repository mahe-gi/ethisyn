import React from "react";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/content/site";
import { Mail } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 bg-black border-t border-white/[0.05]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1520px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Assurances (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 block">
                LET&apos;S TALK
              </span>
              <h2
                id="contact-heading"
                className="font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08]"
              >
                Ready to build something exceptional?
              </h2>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#A1A1AA] leading-relaxed">
              Tell us about what you want to build, automate, or scale. You will hear back directly from our founding engineers within 4 business hours with honest technical advice and a clear roadmap.
            </p>

            {/* Direct Channel Badges */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#A1A1AA]">
                <Badge variant="success" dot size="sm">
                  GUARANTEED SLA
                </Badge>
                <span>Direct engineer response within 4 business hours</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#A1A1AA]">
                <Badge variant="neutral" size="sm">
                  CONFIDENTIALITY
                </Badge>
                <span>Mutual NDA & strict data protection from day one</span>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <span className="text-xs text-zinc-400 uppercase tracking-widest font-medium block">
                DIRECT CONTACT
              </span>
              <div className="flex flex-wrap gap-3">
                <Button
                  href={`mailto:${siteConfig.contactEmail}`}
                  isExternal
                  variant="secondary"
                  size="md"
                  aria-label={`Send email to ${siteConfig.contactEmail}`}
                >
                  <Mail className="w-4 h-4 mr-2" />
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
          <div className="lg:col-span-7">
            <Card variant="elevated" className="p-8 md:p-10 space-y-6">
              <div className="pb-6 border-b border-white/[0.06]">
                <h3 id="contact-form-heading" className="text-lg font-medium text-white">
                  Start a Project Discussion
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-1">
                  Fill out the form below. We will review your requirements and respond with a scoped proposal.
                </p>
              </div>
              <div className="pt-2">
                <ContactForm />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
