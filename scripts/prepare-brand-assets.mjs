import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceAsset = "/Users/mahesh/.gemini/antigravity/brain/8bb66ea1-4c50-4860-bca6-ce00a960f4aa/.user_uploaded/media_1787028528072.png";
const targetDir = path.resolve(__dirname, "../public/brand");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 1. Copy source file exactly
const originalDest = path.join(targetDir, "ethisyn-monogram-original.png");
fs.copyFileSync(sourceAsset, originalDest);

console.log("Copied exact brand asset to:", originalDest);

const srcStat = fs.statSync(sourceAsset);
const destStat = fs.statSync(originalDest);

console.log("Source size:", srcStat.size, "Dest size:", destStat.size);
if (srcStat.size === destStat.size) {
  console.log("✓ Bit-for-bit copy verified.");
} else {
  console.error("✕ Size mismatch!");
}
