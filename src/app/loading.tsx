import { Logo } from "@/components/ui/Logo";

export default function Loading() {
  return (
    <div
      className="min-h-[70vh] flex items-center justify-center p-8 bg-brand-black"
      role="status"
      aria-live="polite"
      aria-label="Loading Ethisyn content"
    >
      <div className="flex flex-col items-center gap-5">
        <Logo size={44} alt="" />
        <div className="w-28 h-[2px] bg-white/[0.08] overflow-hidden relative rounded-full">
          <div className="absolute inset-0 bg-white animate-pulse" />
        </div>
        <span className="text-xs uppercase tracking-widest font-medium text-brand-faint">
          Loading
        </span>
      </div>
    </div>
  );
}
