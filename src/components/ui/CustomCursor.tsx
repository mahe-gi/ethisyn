"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check requirements: fine pointer, hover capability, and no reduced motion request
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const canHover = window.matchMedia("(hover: hover)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || !canHover || prefersReducedMotion) {
      return;
    }

    setIsEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if target has custom cursor label or is clickable
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select");
      const cursorData = target.closest("[data-cursor]")?.getAttribute("data-cursor");

      setIsHovered(!!interactive);
      setCursorText(cursorData || null);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  if (!isEnabled || !position) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-editorial -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      aria-hidden="true"
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-200 ${
          cursorText
            ? "bg-brand-white text-brand-black px-3 py-1 text-[10px] font-mono tracking-widest uppercase font-semibold scale-100"
            : isHovered
            ? "w-8 h-8 bg-white/20 border border-white/60 backdrop-invert-[0.1]"
            : "w-2.5 h-2.5 bg-brand-white/80"
        }`}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </div>
  );
}
