import { expect, test } from "@playwright/test";

const PROFILE = "https://www.instagram.com/vehrt_audio/";
const SDK = "https://www.instagram.com/embed.js";

// The external provider is exercised manually with its real public profile.
// CI isolates the page's loading, layout and SPA lifecycle from Meta outages.
const sdkFixture = (headerHeight: number) => `
  window.instgrm = { Embeds: { process() {
    document.querySelectorAll('blockquote.instagram-media').forEach(quote => {
      const frame = document.createElement('iframe');
      frame.src = quote.dataset.instgrmPermalink + 'embed/';
      frame.style.cssText = 'display:block;width:100%;border:0';
      quote.replaceWith(frame);
      const fit = () => { frame.style.height = (${headerHeight} + frame.clientWidth * 2 / 3 + 64) + 'px'; };
      new ResizeObserver(fit).observe(frame);
      fit();
    });
  } } };
`;

async function mockProvider(
  page: import("@playwright/test").Page,
  headerHeight = 156,
) {
  await page.route("https://w.soundcloud.com/**", (route) =>
    route.fulfill({ body: "" }),
  );
  await page.route(SDK, (route) =>
    route.fulfill({
      contentType: "text/javascript",
      body: sdkFixture(headerHeight),
    }),
  );
  await page.route(`${PROFILE}embed/**`, (route) =>
    route.fulfill({
      contentType: "text/html",
      body: `<!doctype html><html><body style="margin:0">
        <header style="height:${headerHeight}px;background:white">Instagram test profile</header>
        <main class="fixture-grid" style="display:grid;grid-template-columns:repeat(3,1fr)">
          ${Array.from({ length: 6 }, (_, index) => `<a href="#media-${index}" style="aspect-ratio:1;background:#a32937">Test media ${index + 1}</a>`).join("")}
        </main><footer style="height:64px;background:white"><a href="${PROFILE}">View profile</a></footer>
      </body></html>`,
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

for (const headerHeight of [156, 240]) {
  test(`the dark interface leaves media and links unobstructed with a ${headerHeight}px profile header`, async ({
    page,
  }) => {
    await mockProvider(page, headerHeight);
    await page.goto("/vehrt#instagram", { waitUntil: "networkidle" });
    const top = page.locator(".vehrt-instagram-chrome-top");
    const bottom = page.locator(".vehrt-instagram-chrome-bottom");
    await expect(top).toBeVisible();
    await expect(bottom).toBeVisible();
    const grid = page
      .frameLocator('iframe[title="VEHRT posts on Instagram"]')
      .locator(".fixture-grid");
    await expect
      .poll(async () => {
        const gridBox = await grid.boundingBox();
        const topBox = await top.boundingBox();
        const bottomBox = await bottom.boundingBox();
        return (
          gridBox &&
          topBox &&
          bottomBox &&
          Math.abs(topBox.y + topBox.height - gridBox.y) < 2 &&
          Math.abs(bottomBox.y - gridBox.y - gridBox.height) < 2
        );
      })
      .toBe(true);
    await expect(top).toHaveCSS("pointer-events", "none");
    await expect(bottom).toHaveCSS("pointer-events", "none");
  });
}

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
