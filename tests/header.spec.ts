import { expect, test } from "@playwright/test";

for (const width of [320, 375, 480, 639, 640, 768, 1023, 1024, 1280, 1440]) {
  test(`navigation remains usable at ${width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (
        message.type() === "error" &&
        /hydrat|Minified React error/i.test(message.text())
      )
        errors.push(message.text());
    });
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });
    const header = page.getByRole("banner");
    const primary = header.getByRole("navigation", {
      name: "Navigazione principale",
    });
    const toggle = header.getByRole("button", { name: "Apri il menu" });

    await expect(
      header.getByRole("link", { name: "Alessandro Guelpa — home" }),
    ).toBeVisible();
    await expect(
      header.getByRole("link", { name: "Contatti", exact: true }),
    ).toBeVisible();
    if (width >= 1024) {
      await expect(primary).toBeVisible();
      await expect(toggle).toBeHidden();
      await expect(
        primary.getByRole("link", { name: "VEHRT", exact: true }),
      ).toBeVisible();
      await expect(
        primary.getByRole("link", { name: "Sport", exact: true }),
      ).toBeVisible();
    } else {
      await expect(primary).toBeHidden();
      await expect(toggle).toBeVisible();
      const before = await page.getByRole("main").boundingBox();
      await toggle.click();
      const mobile = header.getByRole("navigation", {
        name: "Navigazione mobile",
      });
      await expect(mobile).toBeVisible();
      await expect(mobile.getByRole("link")).toHaveCount(6);
      const after = await page.getByRole("main").boundingBox();
      expect(after?.y).toBe(before?.y);
      await page.keyboard.press("Escape");
      await expect(mobile).toBeHidden();
      await expect(toggle).toBeFocused();
    }

    const layout = await header.evaluate((element) => {
      const row = element.querySelector(".header-row")!;
      const bounds = row.getBoundingClientRect();
      const boxes = Array.from(row.children)
        .map((child) => child.getBoundingClientRect())
        .filter((box) => box.width > 0)
        .map((box) => ({ left: box.left, right: box.right }));
      return {
        left: bounds.left,
        right: bounds.right,
        boxes,
        viewport: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
      };
    });
    expect(layout.left).toBeGreaterThanOrEqual(0);
    expect(layout.right).toBeLessThanOrEqual(width);
    expect(layout.scrollWidth).toBeLessThanOrEqual(layout.viewport);
    for (const [index, box] of layout.boxes.entries()) {
      expect(box.left).toBeGreaterThanOrEqual(layout.left);
      expect(box.right).toBeLessThanOrEqual(layout.right);
      if (index > 0)
        expect(box.left).toBeGreaterThanOrEqual(layout.boxes[index - 1].right);
    }
    expect(errors).toEqual([]);
  });
}

test("mobile menu closes outside, on navigation and when focus leaves", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });
  const header = page.getByRole("banner");
  const toggle = header.getByRole("button", { name: "Apri il menu" });
  const mobile = header.getByRole("navigation", { name: "Navigazione mobile" });

  await toggle.click();
  await page.mouse.click(4, 700);
  await expect(mobile).toBeHidden();

  await toggle.click();
  await mobile.getByRole("link", { name: "Chi sono", exact: true }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(
    page.getByRole("main").getByRole("heading", { level: 1 }),
  ).toBeVisible();
  await expect(mobile).toBeHidden();

  await toggle.click();
  await mobile.getByRole("link", { name: "Chi sono", exact: true }).click();
  await expect(mobile).toBeHidden();
  await expect(toggle).toBeFocused();

  await toggle.click();
  await header.getByRole("link", { name: "Alessandro Guelpa — home" }).focus();
  await page.keyboard.press("Shift+Tab");
  await expect(mobile).toBeHidden();
});

test("resizing an open menu restores desktop navigation and visible focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 768, height: 900 });
  await page.goto("/blog", { waitUntil: "networkidle" });
  const header = page.getByRole("banner");
  const mobile = header.getByRole("navigation", { name: "Navigazione mobile" });
  await header.getByRole("button", { name: "Apri il menu" }).click();
  await mobile.getByRole("link", { name: "Blog", exact: true }).focus();
  await page.setViewportSize({ width: 1280, height: 900 });
  await expect(mobile).toBeHidden();
  await expect(
    header
      .getByRole("navigation", { name: "Navigazione principale" })
      .getByRole("link", { name: "Blog", exact: true }),
  ).toBeFocused();
  await page.setViewportSize({ width: 768, height: 900 });
  await expect(
    header.getByRole("button", { name: "Apri il menu" }),
  ).toHaveAttribute("aria-expanded", "false");
  await expect(mobile).toBeHidden();
});

test("the Blog link stays active while reading an article", async ({
  page,
}) => {
  await page.goto("/blog/principio-di-archimede-e-i-container-docker", {
    waitUntil: "networkidle",
  });
  const primary = page.getByRole("navigation", {
    name: "Navigazione principale",
  });
  await expect(
    primary.getByRole("link", { name: "Blog", exact: true }),
  ).toHaveAttribute("aria-current", "page");
});

test("light and dark desktop previews and persistent theme", async ({
  page,
}, testInfo) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.screenshot({ path: testInfo.outputPath("desktop-light.png") });
  await page
    .getByRole("banner")
    .getByRole("button", { name: "Attiva il tema scuro" })
    .click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload({ waitUntil: "networkidle" });
  await expect(
    page
      .getByRole("banner")
      .getByRole("button", { name: "Attiva il tema chiaro" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.screenshot({ path: testInfo.outputPath("desktop-dark.png") });
});

test("mobile menu preview and theme control", async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });
  const header = page.getByRole("banner");
  await header.getByRole("button", { name: "Apri il menu" }).click();
  await page.screenshot({ path: testInfo.outputPath("mobile-menu-light.png") });
  await header.getByRole("button", { name: "Attiva il tema scuro" }).click();
  await expect(
    header.getByRole("navigation", { name: "Navigazione mobile" }),
  ).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath("mobile-menu-dark.png") });
});
