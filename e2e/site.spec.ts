import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Ethisyn Web Platform E2E & Accessibility Suite", () => {
  test("homepage renders with correct brand title and all sections", async ({ page }) => {
    await page.goto("/");

    // Document title
    await expect(page).toHaveTitle(/Ethisyn/i);

    // H1 Heading
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("We engineer high-speed digital products");

    // All key section landmarks
    await expect(page.locator("#services")).toBeVisible();
    await expect(page.locator("#ai")).toBeVisible();
    await expect(page.locator("#products")).toBeVisible();
    await expect(page.locator("#process")).toBeVisible();
    await expect(page.locator("#company")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("homepage passes strict WCAG accessibility audit with zero violations", async ({ page }) => {
    await page.goto("/");
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("/team page renders team members, rules, and passes accessibility audit", async ({ page }) => {
    await page.goto("/team");

    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("The people who actually");

    // Check team leader presence
    await expect(page.getByText("Mahesh Ch")).toBeVisible();

    // Toggle AI Lab tab
    await page.getByRole("button", { name: /AI Lab \(Coming Soon\)/i }).click();
    await expect(page.getByText("Sentry Agent")).toBeVisible();

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("mobile 320px viewport has zero horizontal scrollbar overflow", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 600 });
    await page.goto("/");

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

    // Allow max 1px rounding difference
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });

  test("mobile menu drawer opens and closes with Escape key", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: /open navigation menu/i });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    const dialog = page.getByRole("dialog", { name: /site navigation menu/i });
    await expect(dialog).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
  });

  test("/privacy page renders and passes accessibility audit", async ({ page }) => {
    await page.goto("/privacy");

    await expect(page.locator("h1")).toContainText("Privacy Policy");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("/blog and /blog/[slug] render with correct content and pass accessibility audit", async ({ page }) => {
    await page.goto("/blog");

    await expect(page.locator("h1")).toContainText("Perspectives on software craft");
    await expect(page.getByText("Engineering Autonomous AI Agents with LangGraph, Python & Next.js 15")).toBeVisible();

    // Navigate to article
    await page.goto("/blog/engineering-autonomous-ai-agents");
    await expect(page.locator("h1")).toContainText("Engineering Autonomous AI Agents with LangGraph, Python & Next.js 15");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
