"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled client error captured:", error.digest || error.message);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 bg-brand-black">
      <div className="max-w-md w-full p-8 border border-brand-border bg-white/[0.01] space-y-6 text-center">
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-faint">
            SYSTEM ALERT / RECOVERABLE
          </span>
          <h2 className="font-sans text-2xl font-medium text-brand-white">
            Something went wrong.
          </h2>
          <p className="font-sans text-sm text-brand-muted font-light leading-relaxed">
            An unexpected error occurred while loading this page. You can try refreshing or return to the homepage.
          </p>
        </div>

        <div className="flex justify-center gap-4 pt-2">
          <Button variant="primary" size="md" onClick={() => reset()}>
            Try again
          </Button>
          <Button href="/" variant="outline" size="md">
            Return home
          </Button>
        </div>
      </div>
    </div>
  );
}
