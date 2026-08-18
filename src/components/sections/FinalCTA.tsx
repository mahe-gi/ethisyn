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
        <SectionLabel index="07" title="Start a Conversation" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-4">
          {/* Left: Heading & Links (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2
                id="contact-heading"
                className="font-sans font-medium text-brand-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]"
              >
                Interested in what we’re building?
              </h2>
            </div>

            <p className="font-sans text-brand-muted text-base md:text-lg font-light leading-relaxed">
              Follow our progress, explore a partnership or tell us what you would like to discuss.
            </p>

            <div className="pt-4 space-y-3">
              <p className="font-mono text-xs text-brand-faint uppercase tracking-wider">
                Connect
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  href={siteConfig.social.linkedin}
                  isExternal
                  variant="outline"
                  size="md"
                  showArrow
                >
                  Follow on LinkedIn
                </Button>
                <Button
                  href={`mailto:${siteConfig.contactEmail}`}
                  isExternal
                  variant="secondary"
                  size="md"
                >
                  {siteConfig.contactEmail}
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Contact Form (7 columns) */}
          <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-brand-border pt-8 lg:pt-0 lg:pl-12">
            <div className="pb-6">
              <h3 id="contact-form-heading" className="font-mono text-xs uppercase tracking-[0.16em] text-brand-muted">
                Contact
              </h3>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
