import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center p-6 bg-brand-black">
      <div className="max-w-md w-full">
        <EmptyState
          icon={<Logo size={36} alt="" />}
          title="Page not found (404)"
          description="The page you are looking for may have moved or no longer exists. Return home or meet our founding team."
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button href="/" variant="primary" size="md">
              Return home
            </Button>
            <Button href="/team" variant="outline" size="md">
              Meet our team
            </Button>
          </div>
        </EmptyState>
      </div>
    </div>
  );
}
