import { expect, test } from "@playwright/test";

const PROFILE = "https://www.instagram.com/vehrt_audio/";
const SDK = "https://www.instagram.com/embed.js";

// The external provider is exercised manually with its real public profile.
// CI isolates the page's loading, layout and SPA lifecycle from Meta outages.
const sdkFixture = `
  window.instgrm = { Embeds: { process() {
    document.querySelectorAll('blockquote.instagram-media').forEach(quote => {
      const frame = document.createElement('iframe');
      frame.src = quote.dataset.instgrmPermalink + 'embed/';
      frame.style.cssText = 'display:block;width:100%;height:640px;border:0';
      quote.replaceWith(frame);
    });
  } } };
`;

async function mockProvider(page: import("@playwright/test").Page) {
  await page.route("https://w.soundcloud.com/**", (route) =>
    route.fulfill({ body: "" }),
  );
  await page.route(SDK, (route) =>
    route.fulfill({ contentType: "text/javascript", body: sdkFixture }),
  );
  await page.route(`${PROFILE}embed/**`, (route) =>
    route.fulfill({
      contentType: "text/html",
      body: "<!doctype html><html><body>Instagram test frame</body></html>",
    }),
  );
}

for (const width of [320, 390, 1280]) {
  test(`Instagram fits the VEHRT page at ${width}px`, async ({
    page,
  }, testInfo) => {
    await mockProvider(page);
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (
        message.type() === "error" &&
        /hydrat|Minified React error/i.test(message.text())
      )
        errors.push(message.text());
    });
    await page.goto("/vehrt#instagram", { waitUntil: "networkidle" });
    const section = page.getByRole("region", { name: "From the feed." });
    const frame = section.locator("iframe");
    await expect(frame).toHaveAttribute("title", "VEHRT posts on Instagram");
    await expect(frame).toBeVisible();
    await expect(frame).toHaveCount(1);
    await expect(
      section.getByRole("link", { name: "@vehrt_audio", exact: false }),
    ).toHaveAttribute("href", PROFILE);
    const layout = await frame.evaluate((element) => {
      const box = element.getBoundingClientRect();
      return {
        left: box.left,
        right: box.right,
        scrollWidth: document.documentElement.scrollWidth,
      };
    });
    expect(layout.left).toBeGreaterThanOrEqual(0);
    expect(layout.right).toBeLessThanOrEqual(width);
    expect(layout.scrollWidth).toBeLessThanOrEqual(width);
    for (const link of await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link")
      .all()) {
      const box = await link.boundingBox();
      expect(box!.x).toBeGreaterThanOrEqual(0);
      expect(box!.x + box!.width).toBeLessThanOrEqual(width);
    }
    expect(errors).toEqual([]);
    await page.screenshot({
      path: testInfo.outputPath(`instagram-${width}.png`),
    });
  });
}

test("Instagram loads near its section and reuses one SDK after SPA navigation", async ({
  page,
}) => {
  await mockProvider(page);
  let requests = 0;
  page.on("request", (request) => {
    if (request.url() === SDK) requests++;
  });
  await page.goto("/", { waitUntil: "networkidle" });
  expect(requests).toBe(0);
  await page
    .getByRole("navigation", { name: "Navigazione principale" })
    .getByRole("link", { name: "VEHRT" })
    .click();
  await expect(
    page.getByRole("heading", { level: 1, name: "VEHRT" }),
  ).toBeVisible();
  expect(requests).toBe(0);
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Instagram" })
    .click();
  await expect(
    page.getByRole("region", { name: "From the feed." }).locator("iframe"),
  ).toBeVisible();
  expect(requests).toBe(1);
  await page.getByRole("link", { name: "Portfolio", exact: false }).click();
  await page
    .getByRole("navigation", { name: "Navigazione principale" })
    .getByRole("link", { name: "VEHRT" })
    .click();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Instagram" })
    .click();
  await expect(
    page.getByRole("region", { name: "From the feed." }).locator("iframe"),
  ).toHaveCount(1);
  expect(requests).toBe(1);
});

test("the public profile remains available when Instagram's SDK is blocked", async ({
  page,
}) => {
  await page.route("https://w.soundcloud.com/**", (route) =>
    route.fulfill({ body: "" }),
  );
  await page.route(SDK, (route) => route.abort());
  await page.goto("/vehrt#instagram", { waitUntil: "networkidle" });
  const section = page.getByRole("region", { name: "From the feed." });
  await expect(section.getByRole("status")).toHaveText(
    "Instagram could not load here. You can still view the posts on the profile.",
  );
  await expect(
    section.getByRole("link", { name: "@vehrt_audio", exact: false }),
  ).toBeVisible();
  await expect(
    section.getByRole("link", { name: "@vehrt_audio", exact: false }),
  ).toHaveAttribute("href", PROFILE);
});
