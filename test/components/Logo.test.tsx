import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Logo } from "@/components/ui/Logo";
import fs from "node:fs";
import path from "node:path";

describe("Brand Asset Integrity & Logo Component", () => {
  it("confirms the approved source assets exist in public/brand", () => {
    const originalAsset = path.resolve(__dirname, "../../public/brand/ethisyn-monogram-original.png");
    const whiteAsset = path.resolve(__dirname, "../../public/brand/ethisyn-monogram-white.png");
    const blackAsset = path.resolve(__dirname, "../../public/brand/ethisyn-monogram-black.png");

    expect(fs.existsSync(originalAsset)).toBe(true);
    expect(fs.existsSync(whiteAsset)).toBe(true);
    expect(fs.existsSync(blackAsset)).toBe(true);
  });

  it("renders light variant pointing to white approved asset", () => {
    const { container } = render(<Logo variant="light" size={32} alt="Ethisyn" />);
    const img = container.querySelector("img");
    expect(img).toBeInTheDocument();
    expect(img?.getAttribute("src")).toContain("ethisyn-monogram-white.png");
    expect(img?.getAttribute("alt")).toBe("Ethisyn");
  });

  it("renders dark variant pointing to black approved asset", () => {
    const { container } = render(<Logo variant="dark" size={48} alt="Ethisyn" />);
    const img = container.querySelector("img");
    expect(img).toBeInTheDocument();
    expect(img?.getAttribute("src")).toContain("ethisyn-monogram-black.png");
  });

  it("supports decorative aria-hidden treatment when alt is empty", () => {
    const { container } = render(<Logo size={24} alt="" />);
    const img = container.querySelector("img");
    expect(img?.getAttribute("aria-hidden")).toBe("true");
  });
});
