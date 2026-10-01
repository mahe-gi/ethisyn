import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center p-6 bg-brand-black">
      <div className="max-w-md w-full p-8 border border-brand-border bg-white/[0.01] space-y-6 text-center">
        <div className="flex justify-center">
          <Logo size={48} alt="" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-faint">
            ERROR 404 / NOT FOUND
          </span>
          <h1 className="font-sans text-2xl sm:text-3xl font-medium text-brand-white">
            This page isn’t here.
          </h1>
          <p className="font-sans text-sm text-brand-muted font-light leading-relaxed">
            The page you are looking for may have moved or no longer exists.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
          <Button href="/" variant="primary" size="md">
            Return home
          </Button>
          <Button href="/team" variant="outline" size="md">
            Meet our team
          </Button>
        </div>
      </div>
    </div>
  );
}
