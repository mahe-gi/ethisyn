import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Ethisyn Production E2E & Accessibility Suite", () => {
  test("loads homepage with exact H1, metadata, and approved logo", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    // Title Check
    await expect(page).toHaveTitle(/Ethisyn — Building Technology with Purpose/);

    // H1 Check
    const h1 = page.locator("h1");
    await expect(h1).toContainText("Building technology with");

    // Monogram presence
    const logos = page.locator("img[src*='ethisyn-monogram']");
    expect(await logos.count()).toBeGreaterThanOrEqual(1);

    // Core sections present
    await expect(page.locator("#thesis")).toBeVisible();
    await expect(page.locator("#domains")).toBeVisible();
    await expect(page.locator("#products")).toBeVisible();
    await expect(page.locator("#principles")).toBeVisible();
    await expect(page.locator("#process")).toBeVisible();
    await expect(page.locator("#company")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("runs automated axe accessibility check on Homepage", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toBeVisible();

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("verifies no horizontal overflow at 320px mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 600 });
    await page.goto("/", { waitUntil: "networkidle" });

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });

  test("tests mobile menu toggle, accessibility, and Escape key closing", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/", { waitUntil: "networkidle" });

    const menuButton = page.getByRole("button", { name: /open navigation menu/i });
    if (await menuButton.isVisible()) {
      await menuButton.click();

      const dialog = page.getByRole("dialog", { name: /site navigation menu/i });
      await expect(dialog).toBeVisible();

      // Run axe on open mobile dialog
      const dialogAxeResults = await new AxeBuilder({ page })
        .include("div[role='dialog']")
        .analyze();
      expect(dialogAxeResults.violations).toEqual([]);

      // Press Escape key
      await page.keyboard.press("Escape");
      await expect(dialog).not.toBeVisible();
    }
  });

  test("tests contact form validation, error summary, and axe accessibility", async ({ page }) => {
    await page.goto("/#contact", { waitUntil: "networkidle" });

    const submitBtn = page.getByRole("button", { name: /start a conversation/i });
    await submitBtn.click();

    // Expect validation error message
    const errorSummary = page.getByRole("alert").filter({ hasText: /We couldn’t send your message/i });
    await expect(errorSummary).toBeVisible();

    // Check axe on form error state
    const formAxeResults = await new AxeBuilder({ page })
      .include("form")
      .analyze();
    expect(formAxeResults.violations).toEqual([]);
  });

  test("navigates to 404 page for nonexistent routes and passes axe audit", async ({ page }) => {
    await page.goto("/nonexistent-route-verification", { waitUntil: "networkidle" });
    const h1 = page.locator("h1");
    await expect(h1).toContainText("This page isn’t here.");

    const homeBtn = page.getByRole("link", { name: /return home/i });
    await expect(homeBtn).toBeVisible();

    const notFoundAxe = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(notFoundAxe.violations).toEqual([]);
  });

  test("verifies Privacy page content and passes axe audit", async ({ page }) => {
    await page.goto("/privacy", { waitUntil: "networkidle" });
    const h1 = page.locator("h1");
    await expect(h1).toContainText("Privacy Policy");

    const privacyAxe = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(privacyAxe.violations).toEqual([]);
  });

  test("verifies redirects for consolidated routes", async ({ page }) => {
    // /about should redirect to /#company
    await page.goto("/about", { waitUntil: "networkidle" });
    expect(page.url()).toContain("/#company");

    // /products should redirect to /#products
    await page.goto("/products", { waitUntil: "networkidle" });
    expect(page.url()).toContain("/#products");

    // /contact should redirect to /#contact
    await page.goto("/contact", { waitUntil: "networkidle" });
    expect(page.url()).toContain("/#contact");
  });
});
