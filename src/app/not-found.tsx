import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-5 sm:px-8 py-24 bg-brand-black">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <Logo size={64} alt="Ethisyn Monogram" />
        </div>

        <div className="space-y-3">
          <p className="font-mono text-xs text-brand-faint uppercase tracking-[0.2em]">
            ERROR 404 / NOT FOUND
          </p>
          <h1 className="font-sans font-medium text-brand-white text-3xl sm:text-4xl md:text-5xl tracking-tight">
            This page isn’t here.
          </h1>
          <p className="font-sans text-brand-muted text-base md:text-lg font-light leading-relaxed max-w-md mx-auto">
            The address may have changed, or the page may no longer exist.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button href="/" variant="primary" size="md">
            Return home
          </Button>
          <Button href="/#domains" variant="outline" size="md">
            Explore what we build
          </Button>
          <Button href="/contact" variant="secondary" size="md">
            Contact Ethisyn
          </Button>
        </div>
      </div>
    </div>
  );
}
