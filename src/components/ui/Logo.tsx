import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoProps {
  /**
   * Visual variant:
   * - "light": White monogram for dark backgrounds (#050505)
   * - "dark": Black monogram for light/inverted backgrounds (#F5F4EF)
   */
  variant?: "light" | "dark";
  /**
   * Explicit pixel dimensions preserving 1:1 intrinsic aspect ratio.
   * Default: 32 (32x32px)
   */
  size?: number;
  /**
   * Accessible alternative label.
   * When decorative (e.g. adjacent to visible wordmark), pass "" or alt="".
   */
  alt?: string;
  /**
   * Priority loading for above-the-fold header & hero marks.
   */
  priority?: boolean;
  className?: string;
}

export function Logo({
  variant = "light",
  size = 32,
  alt = "Ethisyn Monogram",
  priority = false,
  className,
}: LogoProps) {
  const assetSrc =
    variant === "dark"
      ? "/brand/ethisyn-monogram-black.png"
      : "/brand/ethisyn-monogram-white.png";

  return (
    <div
      className={cn(
        "relative flex items-center justify-center select-none flex-shrink-0",
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src={assetSrc}
        alt={alt}
        width={size}
        height={size}
        priority={priority}
        className="w-full h-full object-contain pointer-events-none"
        aria-hidden={alt === "" ? "true" : undefined}
      />
    </div>
  );
}
