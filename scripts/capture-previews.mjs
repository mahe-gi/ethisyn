import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const artifactDir = "/Users/mahesh/.gemini/antigravity/brain/8bb66ea1-4c50-4860-bca6-ce00a960f4aa";

async function capture() {
  const browser = await chromium.launch();

  // 1. Desktop Full-Page Screenshot (1440x900)
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await desktopPage.screenshot({
    path: path.join(artifactDir, "desktop_homepage_full.png"),
    fullPage: true,
  });

  // Desktop Hero Viewport
  await desktopPage.screenshot({
    path: path.join(artifactDir, "desktop_hero.png"),
    fullPage: false,
  });

  // Contact Page Desktop
  await desktopPage.goto("http://localhost:3000/contact", { waitUntil: "networkidle" });
  await desktopPage.screenshot({
    path: path.join(artifactDir, "desktop_contact.png"),
    fullPage: false,
  });

  // 2. Mobile Viewport Screenshot (375x812 iPhone / Pixel size)
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await mobilePage.screenshot({
    path: path.join(artifactDir, "mobile_hero.png"),
    fullPage: false,
  });

  await browser.close();
  console.log("✓ Captured high-resolution visual previews to artifact directory.");
}

capture().catch(console.error);
