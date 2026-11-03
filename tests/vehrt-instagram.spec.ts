import { expect, test } from "@playwright/test";

const PROFILE = "https://www.instagram.com/vehrt_audio/";

for (const width of [320, 390, 1280]) {
  test(`Instagram preserves portrait covers and fits at ${width}px`, async ({
    page,
  }, testInfo) => {
    await page.route("https://w.soundcloud.com/**", (route) =>
      route.fulfill({ body: "" }),
    );
    await page.setViewportSize({ width, height: 1000 });
    const errors: string[] = [];
    const sdkRequests: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("request", (request) => {
      if (request.url().includes("instagram.com/embed.js"))
        sdkRequests.push(request.url());
    });
    await page.goto("/vehrt#instagram", { waitUntil: "networkidle" });
    const section = page.getByRole("region", { name: "From the feed." });
    const feed = section.getByRole("list", {
      name: "Latest posts from @vehrt_audio",
    });
    const cards = feed.getByRole("link");
    expect(await cards.count()).toBeGreaterThan(0);
    expect(await cards.count()).toBeLessThanOrEqual(6);
    await expect(section.locator("iframe")).toHaveCount(0);
    await expect(
      section.getByRole("link", { name: "@vehrt_audio", exact: false }),
    ).toHaveAttribute("href", PROFILE);

    for (const card of await cards.all()) {
      await expect(card).toHaveAttribute(
        "href",
        /^https:\/\/www\.instagram\.com\/(p|reel)\/[A-Za-z0-9_-]+\/$/,
      );
      await expect(card).toHaveAttribute("target", "_blank");
      await expect(card).toHaveAttribute(
        "aria-label",
        /on Instagram \(opens in a new tab\)$/,
      );
      const image = card.locator("img");
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
          ),
        )
        .toBe(true);
      const geometry = await image.evaluate((img: HTMLImageElement) => ({
        actualRatio: img.naturalWidth / img.naturalHeight,
        declaredRatio: img.width / img.height,
        displayedRatio:
          img.getBoundingClientRect().width /
          img.getBoundingClientRect().height,
        fit: getComputedStyle(img).objectFit,
      }));
      expect(geometry.displayedRatio).toBeCloseTo(geometry.actualRatio, 2);
      expect(geometry.declaredRatio).toBeCloseTo(geometry.actualRatio, 2);
      expect(geometry.fit).toBe("contain");
    }
    const layout = await feed.evaluate((element) => ({
      width: element.getBoundingClientRect().width,
      scrollWidth: element.scrollWidth,
      documentWidth: document.documentElement.scrollWidth,
    }));
    expect(layout.width).toBeLessThanOrEqual(width);
    expect(layout.documentWidth).toBeLessThanOrEqual(width);
    if (width <= 640 && (await cards.count()) > 1)
      expect(layout.scrollWidth).toBeGreaterThan(layout.width);
    expect(errors).toEqual([]);
    expect(sdkRequests).toEqual([]);
    await cards.first().scrollIntoViewIfNeeded();
    await page.screenshot({
      path: testInfo.outputPath(`instagram-${width}.png`),
    });
  });
}

test("an unavailable cover keeps the original post link readable", async ({
  page,
}) => {
  await page.route("https://w.soundcloud.com/**", (route) =>
    route.fulfill({ body: "" }),
  );
  await page.route("**/vehrt/instagram/*.jpg", (route) => route.abort());
  await page.goto("/vehrt#instagram", { waitUntil: "networkidle" });
  const section = page.getByRole("region", { name: "From the feed." });
  const first = section.getByRole("list").getByRole("link").first();
  await first.scrollIntoViewIfNeeded();
  await expect(first.getByText("View on Instagram ↗")).toBeVisible();
  await expect(first).toHaveAttribute(
    "href",
    /^https:\/\/www\.instagram\.com\/(p|reel)\//,
  );
  await first.focus();
  await expect(first).toBeFocused();
  await expect(
    section.getByRole("link", { name: "@vehrt_audio", exact: false }),
  ).toBeVisible();
});
