"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface TrackingMascotProps {
  size?: number;
  className?: string;
  interactive?: boolean;
  showShadow?: boolean;
  showGlow?: boolean;
  onClick?: () => void;
}

export function TrackingMascot({
  size = 130,
  className = "",
  interactive = true,
  showShadow = true,
  showGlow = false,
  onClick,
}: TrackingMascotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pupilOffset, setPupilOffset] = useState({
    leftX: 0,
    leftY: 0,
    rightX: 0,
    rightY: 0,
  });
  const [bodyTilt, setBodyTilt] = useState({
    x: 0,
    y: 0,
    rotY: 0,
    rotX: 0,
  });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  // Active cursor tracking calculation
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current || !interactive) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const eyeLevelY = rect.top + rect.height * 0.3;

      const dx = e.clientX - centerX;
      const dy = e.clientY - eyeLevelY;
      const dist = Math.hypot(dx, dy);

      // Max pupil travel in 1024 viewBox space
      const maxTravel = 25;
      const angle = Math.atan2(dy, dx);
      const travel = Math.min(maxTravel, (dist / 240) * maxTravel);

      const pX = Math.cos(angle) * travel;
      const pY = Math.sin(angle) * travel * 0.85;

      // Natural convergence when cursor is close to mascot
      const convergence = Math.max(0, (1 - dist / 300) * 3.5);

      setPupilOffset({
        leftX: pX + convergence,
        leftY: pY,
        rightX: pX - convergence,
        rightY: pY,
      });

      // Subtle 3D perspective tilt
      const normX = dx / (window.innerWidth / 2);
      const normY = dy / (window.innerHeight / 2);

      setBodyTilt({
        x: Math.max(-6, Math.min(6, normX * 6)),
        y: Math.max(-5, Math.min(5, normY * 5)),
        rotY: Math.max(-6, Math.min(6, normX * 6)),
        rotX: Math.max(-5, Math.min(5, -normY * 5)),
      });
    },
    [interactive]
  );

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion || !interactive) return;

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, interactive]);

  // Organic blinking rhythm
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const scheduleNextBlink = () => {
      const delay = Math.random() * 3200 + 3500;
      timeoutId = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          if (Math.random() < 0.22) {
            setTimeout(() => {
              setIsBlinking(true);
              setTimeout(() => setIsBlinking(false), 90);
            }, 150);
          }
          scheduleNextBlink();
        }, 120);
      }, delay);
    };

    scheduleNextBlink();
    return () => clearTimeout(timeoutId);
  }, []);

  const handleClick = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 450);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          handleClick();
        }
      }}
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="Syn — Interactive Studio Assistant Mascot"
    >
      {/* Optional Soft Ambient Glow */}
      {showGlow && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-white/[0.08] blur-2xl pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Ground Contact Shadow */}
      {showShadow && (
        <div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-3 rounded-full bg-black/60 blur-md pointer-events-none transition-transform duration-300"
          style={{
            transform: `translateX(-50%) scale(${isBouncing ? 0.85 : 1})`,
          }}
          aria-hidden="true"
        />
      )}

      {/* 3D Parallax Mascot Container */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${bodyTilt.x * 0.5}px, ${bodyTilt.y * 0.5}px, 0px) rotateY(${bodyTilt.rotY}deg) rotateX(${bodyTilt.rotX}deg) ${
            isBouncing ? "scale(1.06, 0.94)" : "scale(1)"
          }`,
        }}
      >
        {/* Base 3D Plush Character (100% Transparent PNG) */}
        <Image
          src="/mascot/syn-mascot-base.png"
          alt="Syn Mascot"
          fill
          sizes={`${size}px`}
          priority
          className="object-contain pointer-events-none filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
        />

        {/* Dynamic Cursor-Tracking Eyes (1024x1024 viewBox matching image coords) */}
        <svg
          viewBox="0 0 1024 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            {/* Glossy Obsidian Pupil Gradient */}
            <radialGradient id={`pupilGrad-${size}`} cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="60%" stopColor="#090d16" />
              <stop offset="100%" stopColor="#020408" />
            </radialGradient>

            {/* Specular Catchlight Glow */}
            <filter id={`catchlightGlow-${size}`} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Socket Clipping Boundaries */}
            <clipPath id={`leftEyeClip-${size}`}>
              <ellipse cx="370" cy="305" rx="86" ry="70" transform="rotate(-6 370 305)" />
            </clipPath>

            <clipPath id={`rightEyeClip-${size}`}>
              <ellipse cx="630" cy="305" rx="86" ry="70" transform="rotate(6 630 305)" />
            </clipPath>
          </defs>

          {/* LEFT EYE */}
          <g clipPath={`url(#leftEyeClip-${size})`}>
            {isBlinking ? (
              <path
                d="M 315 315 Q 370 345 425 315"
                stroke="#171717"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
              />
            ) : (
              <g
                transform={`translate(${404 + pupilOffset.leftX}, ${306 + pupilOffset.leftY})`}
                className="transition-transform duration-75 ease-out"
              >
                <circle cx="0" cy="0" r="30" fill={`url(#pupilGrad-${size})`} />
                <circle cx="-8" cy="-8" r="9" fill="#ffffff" filter={`url(#catchlightGlow-${size})`} />
                <circle cx="7" cy="7" r="4.5" fill="#ffffff" fillOpacity="0.8" />
              </g>
            )}
          </g>

          {/* RIGHT EYE */}
          <g clipPath={`url(#rightEyeClip-${size})`}>
            {isBlinking ? (
              <path
                d="M 575 315 Q 630 345 685 315"
                stroke="#171717"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
              />
            ) : (
              <g
                transform={`translate(${626 + pupilOffset.rightX}, ${307 + pupilOffset.rightY})`}
                className="transition-transform duration-75 ease-out"
              >
                <circle cx="0" cy="0" r="30" fill={`url(#pupilGrad-${size})`} />
                <circle cx="-8" cy="-8" r="9" fill="#ffffff" filter={`url(#catchlightGlow-${size})`} />
                <circle cx="7" cy="7" r="4.5" fill="#ffffff" fillOpacity="0.8" />
              </g>
            )}
          </g>
        </svg>
      </div>
    </div>
  );
}
