import { expect, test } from "@playwright/test";

test("backfilled articles never expose modification dates before publication", async ({ page }) => {
  await page.goto("/blog/raee-elettronica-fine-vita", { waitUntil: "networkidle" });

  await expect(page.locator('meta[property="article:published_time"]'))
    .toHaveAttribute("content", "2026-11-03");
  await expect(page.locator('meta[property="article:modified_time"]'))
    .toHaveAttribute("content", "2026-11-03");

  const scripts = await page.locator('script[type="application/ld+json"]').allTextContents();
  const schemas = scripts.flatMap((value) => {
    const parsed = JSON.parse(value) as { "@graph"?: Array<Record<string, unknown>>; "@type"?: string };
    return parsed["@graph"] ?? [parsed];
  });
  const article = schemas.find((item) => item["@type"] === "BlogPosting");
  expect(article).toBeDefined();
  expect(article?.datePublished).toBe("2026-11-03");
  expect(article?.dateModified).toBe("2026-11-03");

  const sitemap = await page.request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  const xml = await sitemap.text();
  expect(xml).toContain(
    "<loc>https://alessandroguelpa.it/blog/raee-elettronica-fine-vita</loc><lastmod>2026-11-03</lastmod>",
  );
});

test("updated specialist article exposes accurate modification metadata", async ({ page }) => {
  await page.goto("/blog/shopify-inventario-scritture-concorrenti", { waitUntil: "networkidle" });

  await expect(page.locator('meta[property="article:published_time"]'))
    .toHaveAttribute("content", "2026-11-03");
  await expect(page.locator('meta[property="article:modified_time"]'))
    .toHaveAttribute("content", "2026-11-11");
});
