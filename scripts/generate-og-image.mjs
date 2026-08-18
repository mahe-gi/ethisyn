import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const brandDir = path.resolve(__dirname, "../public/brand");

async function generateAssets() {
  const whiteLogoPath = path.join(brandDir, "ethisyn-monogram-white.png");

  // 1. Generate 1200x630 OpenGraph Image
  const logoResizedBuffer = await sharp(whiteLogoPath)
    .resize(160, 160, { fit: "contain" })
    .toBuffer();

  const svgOverlay = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#050505"/>
      <rect x="30" y="30" width="1140" height="570" fill="none" stroke="rgba(245,244,239,0.12)" stroke-width="1"/>
      
      <!-- Top Metadata -->
      <text x="80" y="90" fill="rgba(245,244,239,0.4)" font-family="monospace" font-size="14" letter-spacing="3" font-weight="500">
        ETHISYN / INDEPENDENT PRODUCT TECHNOLOGY
      </text>
      <text x="1000" y="90" fill="rgba(245,244,239,0.4)" font-family="monospace" font-size="14" letter-spacing="3" font-weight="500">
        HYD / EST. 2025
      </text>

      <!-- Center Typography -->
      <text x="80" y="390" fill="#FFFFFF" font-family="sans-serif" font-size="48" font-weight="600" letter-spacing="6">
        ETHISYN
      </text>
      <text x="80" y="445" fill="#F5F4EF" font-family="Georgia, serif" font-size="34" font-style="italic" font-weight="400">
        Building technology with purpose.
      </text>
      <text x="80" y="500" fill="rgba(245,244,239,0.6)" font-family="sans-serif" font-size="18" font-weight="300">
        Intelligent digital products across software, artificial intelligence and cloud systems.
      </text>

      <!-- Bottom Tag -->
      <text x="80" y="560" fill="rgba(245,244,239,0.3)" font-family="monospace" font-size="13" letter-spacing="2">
        INDEPENDENT / PRODUCT-LED / PURPOSE-BUILT
      </text>
    </svg>
  `;

  const ogBuffer = await sharp(Buffer.from(svgOverlay))
    .composite([
      {
        input: logoResizedBuffer,
        top: 170,
        left: 80,
      },
    ])
    .png()
    .toFile(path.join(brandDir, "opengraph-image.png"));

  console.log("✓ Generated OpenGraph Image (1200x630):", ogBuffer);

  // 2. Generate Apple Touch Icon (180x180)
  await sharp(whiteLogoPath)
    .resize(180, 180, { fit: "contain" })
    .png()
    .toFile(path.join(brandDir, "apple-touch-icon.png"));

  // 3. Generate Favicon 32x32 & 192x192
  await sharp(whiteLogoPath)
    .resize(32, 32, { fit: "contain" })
    .png()
    .toFile(path.join(brandDir, "favicon-32x32.png"));

  await sharp(whiteLogoPath)
    .resize(192, 192, { fit: "contain" })
    .png()
    .toFile(path.join(brandDir, "icon-192.png"));

  console.log("✓ Generated Touch and Favicon assets.");
}

generateAssets().catch(console.error);
