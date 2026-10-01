import { Logo } from "@/components/ui/Logo";

export default function Loading() {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center p-8 bg-brand-black"
      role="status"
      aria-label="Loading content"
    >
      <div className="flex flex-col items-center gap-4">
        <Logo size={40} alt="" />
        <div className="w-24 h-[1px] bg-brand-border overflow-hidden relative">
          <div className="absolute inset-0 bg-brand-white animate-pulse" />
        </div>
      </div>
    </div>
  );
}
