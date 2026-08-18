import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const brandDir = path.resolve(__dirname, "../public/brand");

const originalPath = path.join(brandDir, "ethisyn-monogram-original.png");
const whitePath = path.join(brandDir, "ethisyn-monogram-white.png");
const blackPath = path.join(brandDir, "ethisyn-monogram-black.png");

async function generateMonochromeTransparentVariants() {
  const { data, info } = await sharp(originalPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const numPixels = width * height;

  // Buffer for White logo on transparent background
  const whiteBuffer = Buffer.alloc(numPixels * 4);
  // Buffer for Black logo on transparent background
  const blackBuffer = Buffer.alloc(numPixels * 4);

  for (let i = 0; i < numPixels; i++) {
    const srcIdx = i * channels;
    const destIdx = i * 4;

    // Luminance of original grayscale pixel (0 = black mark, 255 = white canvas)
    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];
    const lum = Math.round((r + g + b) / 3);

    // Alpha is opacity of the mark: 255 for black strokes, 0 for white background
    const alpha = 255 - lum;

    // White Mark: R=255, G=255, B=255, A=alpha
    whiteBuffer[destIdx] = 255;
    whiteBuffer[destIdx + 1] = 255;
    whiteBuffer[destIdx + 2] = 255;
    whiteBuffer[destIdx + 3] = alpha;

    // Black Mark: R=0, G=0, B=0, A=alpha
    blackBuffer[destIdx] = 0;
    blackBuffer[destIdx + 1] = 0;
    blackBuffer[destIdx + 2] = 0;
    blackBuffer[destIdx + 3] = alpha;
  }

  // Save White Transparent PNG
  await sharp(whiteBuffer, {
    raw: { width, height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toFile(whitePath);

  // Save Black Transparent PNG
  await sharp(blackBuffer, {
    raw: { width, height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toFile(blackPath);

  console.log("✓ Generated pure transparent white and black monogram variants with subpixel antialiasing.");
}

generateMonochromeTransparentVariants().catch(console.error);
