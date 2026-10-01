"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { AlertTriangle } from "lucide-react";

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
      <div className="max-w-md w-full">
        <EmptyState
          icon={AlertTriangle}
          title="Something went wrong"
          description="An unexpected error occurred while rendering this page. You can attempt to reload or navigate back home."
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button variant="primary" size="md" onClick={() => reset()}>
              Try again
            </Button>
            <Button href="/" variant="outline" size="md">
              Return home
            </Button>
          </div>
        </EmptyState>
      </div>
    </div>
  );
}
