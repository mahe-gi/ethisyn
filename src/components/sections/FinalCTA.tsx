import React from "react";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/content/site";
import { Mail, MessageSquare, Phone } from "lucide-react";

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

            {/* Direct Quick Action CTAs */}
            <div className="pt-2 space-y-4">
              <span className="text-xs text-zinc-400 uppercase tracking-widest font-medium block">
                DIRECT INQUIRY CHANNELS
              </span>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi Ethisyn team, I would like to discuss a new software and AI project.")}`}
                  isExternal
                  variant="primary"
                  size="lg"
                  className="justify-center"
                  aria-label="Chat directly on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>

                <Button
                  href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Project Inquiry — ETHISYN")}&body=${encodeURIComponent("Hi Ethisyn Team,\n\nI would like to discuss a new project with your team.\n\n--- PROJECT OVERVIEW ---\nServices Needed: \nEstimated Budget: \nTarget Timeline: \nKey Requirements: \n\nLooking forward to your response!")}`}
                  isExternal
                  variant="outline"
                  size="lg"
                  className="justify-center"
                  aria-label={`Compose direct email to ${siteConfig.contactEmail}`}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email {siteConfig.contactEmail}
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Response within 4 business hours
                </span>
                <span className="text-zinc-600">•</span>
                <a
                  href={`tel:${siteConfig.whatsappNumber}`}
                  className="hover:text-white transition-colors"
                >
                  Phone: {siteConfig.contactPhone}
                </a>
                <span className="text-zinc-600">•</span>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <span className="text-zinc-600">•</span>
                <a
                  href={siteConfig.social.googleBusinessProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Google Profile
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Scoping Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card variant="elevated" className="p-8 md:p-10 space-y-6">
              <div className="pb-6 border-b border-white/[0.06]">
                <h3 id="contact-form-heading" className="text-lg font-medium text-white">
                  Send a Message
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-1">
                  Tell us about your goals or requirements. We respond within 4 business hours.
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
