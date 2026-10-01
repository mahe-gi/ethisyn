import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoProps {
  variant?: "light" | "dark";
  size?: number;
  alt?: string;
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
