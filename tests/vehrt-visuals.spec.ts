import { expect, test } from "@playwright/test";

for (const width of [320, 390, 1280]) {
  test(`VEHRT visual system fits at ${width}px`, async ({ page }) => {
    await page.route("https://w.soundcloud.com/**", (route) =>
      route.fulfill({ body: "" }),
    );
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/vehrt");
    await expect(page.getByRole("heading", { name: "VEHRT", exact: true })).toBeVisible();
    await expect(page.locator(".vehrt-hero-art")).toBeVisible();
    await expect(page.locator(".vehrt-signal-strip")).toBeVisible();
    await expect(page.locator(".vehrt-step-grid > span")).toHaveCount(64);
    await expect(page.locator(".vehrt-signal-strip")).toHaveAttribute("aria-hidden", "true");
    const graphic = await page.request.get("/vehrt/fracture-field.svg");
    expect(graphic.ok()).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  });
}
