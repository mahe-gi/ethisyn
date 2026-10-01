"use client";

import React, { useState, useEffect, useRef } from "react";
import { Logo } from "../ui/Logo";

export function MonogramField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) return;

    setIsInteractive(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      setOffset({
        x: Math.max(-12, Math.min(12, deltaX * 12)),
        y: Math.max(-12, Math.min(12, deltaY * 12)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[500px] aspect-square flex items-center justify-center select-none mx-auto"
      aria-hidden="true"
    >
      {/* Background Technical Linework & Coordinate Grid with Parallax */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-300 ease-out"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: isInteractive ? `translate(${offset.x}px, ${offset.y}px)` : "none",
        }}
      >
        <circle cx="250" cy="250" r="230" stroke="rgba(245, 244, 239, 0.08)" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="250" cy="250" r="170" stroke="rgba(245, 244, 239, 0.05)" strokeWidth="1" />

        {/* Crosshair hairlines terminating outside monogram radius */}
        <line x1="250" y1="20" x2="250" y2="120" stroke="rgba(245, 244, 239, 0.18)" strokeWidth="1" />
        <line x1="250" y1="380" x2="250" y2="480" stroke="rgba(245, 244, 239, 0.18)" strokeWidth="1" />
        <line x1="20" y1="250" x2="120" y2="250" stroke="rgba(245, 244, 239, 0.18)" strokeWidth="1" />
        <line x1="380" y1="250" x2="480" y2="250" stroke="rgba(245, 244, 239, 0.18)" strokeWidth="1" />

        {/* Corner ticks */}
        <path d="M 80 90 L 80 80 L 90 80" stroke="rgba(245, 244, 239, 0.2)" strokeWidth="1" />
        <path d="M 420 90 L 420 80 L 410 80" stroke="rgba(245, 244, 239, 0.2)" strokeWidth="1" />
        <path d="M 80 410 L 80 420 L 90 420" stroke="rgba(245, 244, 239, 0.2)" strokeWidth="1" />
        <path d="M 420 410 L 420 420 L 410 420" stroke="rgba(245, 244, 239, 0.2)" strokeWidth="1" />

        {/* Coordinates */}
        <text x="30" y="40" fill="rgba(245, 244, 239, 0.35)" fontFamily="IBM Plex Mono, monospace" fontSize="9" letterSpacing="0.1em">
          SYS.V2 / 17.3850° N
        </text>
        <text x="370" y="40" fill="rgba(245, 244, 239, 0.35)" fontFamily="IBM Plex Mono, monospace" fontSize="9" letterSpacing="0.1em">
          78.4867° E
        </text>
        <text x="30" y="470" fill="rgba(245, 244, 239, 0.35)" fontFamily="IBM Plex Mono, monospace" fontSize="9" letterSpacing="0.1em">
          HYD / EST. 2025
        </text>
        <text x="360" y="470" fill="rgba(245, 244, 239, 0.35)" fontFamily="IBM Plex Mono, monospace" fontSize="9" letterSpacing="0.1em">
          STATUS / ACTIVE
        </text>
      </svg>

      {/* Central Visual Monogram Symbol (Static Anchor) */}
      <div className="relative z-10 p-6 flex items-center justify-center">
        <Logo
          variant="light"
          size={180}
          priority
          alt="Ethisyn Monogram Symbol"
          className="drop-shadow-[0_0_24px_rgba(255,255,255,0.06)]"
        />
      </div>
    </div>
  );
}
