import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import { Logo } from "@/components/ui/Logo";

describe("Brand Assets & Logo Component", () => {
  it("verifies approved source brand assets exist in public/brand", () => {
    const brandDir = path.resolve(__dirname, "../../public/brand");
    expect(fs.existsSync(path.join(brandDir, "ethisyn-monogram-original.png"))).toBe(true);
    expect(fs.existsSync(path.join(brandDir, "ethisyn-monogram-white.png"))).toBe(true);
    expect(fs.existsSync(path.join(brandDir, "ethisyn-monogram-black.png"))).toBe(true);
  });

  it("renders light monogram for dark background by default", () => {
    render(<Logo variant="light" size={40} alt="Ethisyn Monogram" />);
    const img = document.querySelector("img");
    expect(img).toBeInTheDocument();
    expect(img?.getAttribute("src")).toContain("ethisyn-monogram-white.png");
  });
});
