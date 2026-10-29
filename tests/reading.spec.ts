import { expect, test } from "@playwright/test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ReactMarkdown from "react-markdown";

import { rehypeArticleNavigation } from "../src/utils/article-navigation";
import { selectRelatedPosts } from "../src/utils/related-posts";
import type { BlogSummary } from "../src/types/blog";

test("the outline handles formatted, accented and repeated headings without indexing code", () => {
  const markdown = [
    "# Introduzione",
    "## Déjà vu & `API`",
    "## Déjà vu & `API`",
    "### Dettagli",
    "```md\n## Questo è codice\n```",
  ].join("\n\n");
  const html = renderToStaticMarkup(
    createElement(ReactMarkdown, {
      rehypePlugins: [[rehypeArticleNavigation, { showOutline: true }]],
      children: markdown,
    }),
  );

  expect(html).not.toContain("<h1");
  expect(html).toContain('href="#sezione-deja-vu-api"');
  expect(html).toContain('href="#sezione-deja-vu-api-2"');
  expect(html).toContain('id="sezione-deja-vu-api-2"');
  expect(html).not.toContain('href="#sezione-questo-e-codice"');
  expect(html).toContain('aria-label="Indice dell’articolo"');

  const short = renderToStaticMarkup(
    createElement(ReactMarkdown, {
      rehypePlugins: [[rehypeArticleNavigation, { showOutline: true }]],
      children: "## Una sezione\n\nBreve appunto.",
    }),
  );
  expect(short).not.toContain("<details");
});

test("related reading prefers shared subjects, excludes the current post and falls back by date", () => {
  const summary = (
    id: string,
    title: string,
    tags: string[],
    date: string,
  ): BlogSummary => ({
    id,
    title,
    tags,
    date,
    excerpt: "",
    minutes: 1,
  });
  const current = summary(
    "current",
    "Rails: autenticazione",
    ["Ruby on Rails"],
    "2026-07-01",
  );
  const index = [
    summary("unrelated", "Un brano con Sonic Pi", ["Musica"], "2026-07-21"),
    current,
    summary("rails", "Rails: API", ["ruby on rails"], "2026-06-01"),
    summary("older", "Paesaggi e natura", [], "2026-01-01"),
  ];
  expect(selectRelatedPosts(current, index).map(({ id }) => id)).toEqual([
    "rails",
  ]);
  expect(
    selectRelatedPosts(
      summary("unique", "Argomento distinto", [], "2026-01-01"),
      index,
    ).map(({ id }) => id),
  ).toEqual(["unrelated", "current", "rails"]);
});

test("a long article has working keyboard-accessible section links", async ({
  page,
}) => {
  await page.goto("/blog/principio-di-archimede-e-i-container-docker", {
    waitUntil: "networkidle",
  });
  const outline = page.locator(".article-outline");
  await expect(outline).toBeVisible();
  await outline.locator("summary").focus();
  await page.keyboard.press("Enter");
  const link = page
    .getByRole("navigation", { name: "Indice dell’articolo" })
    .getByRole("link")
    .last();
  const href = await link.getAttribute("href");
  await link.click();
  await expect(page).toHaveURL(new RegExp(`${href}$`));
  const target = page.locator(href!);
  await expect(target).toBeFocused();
  expect((await target.boundingBox())!.y).toBeGreaterThanOrEqual(
    (await page.getByRole("banner").boundingBox())!.height,
  );
});

test("copying a code block preserves its full text and reports success", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/blog/javascript-localstorage-persistenza", {
    waitUntil: "networkidle",
  });
  await expect(page.locator(".article-outline")).toHaveCount(0);
  const block = page.locator(".article-code-block").first();
  const code = await block.locator("pre").textContent();
  await block.getByRole("button", { name: "Copia codice" }).click();
  await expect(block.getByRole("button", { name: "Copiato ✓" })).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(code);
});

test("unavailable clipboard access leaves the code readable and explains the failure", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: () => Promise.reject(new Error("Clipboard unavailable")),
      },
    });
  });
  await page.goto("/blog/javascript-localstorage-persistenza", {
    waitUntil: "networkidle",
  });
  const block = page.locator(".article-code-block").first();
  await block.getByRole("button", { name: "Copia codice" }).click();
  await expect(
    block.getByText("Non riesco ad accedere agli appunti.", { exact: false }),
  ).toBeVisible();
  await expect(block.locator("pre")).toBeVisible();
});

test("related reading navigates to another article and restores page focus", async ({
  page,
}) => {
  await page.goto("/blog/javascript-localstorage-persistenza", {
    waitUntil: "networkidle",
  });
  const related = page.getByRole("region", { name: "Continua a leggere" });
  const links = related.getByRole("link");
  expect(await links.count()).toBeGreaterThan(0);
  expect(await links.count()).toBeLessThanOrEqual(3);
  const link = links.first();
  const title = await link.locator("strong").textContent();
  const href = await link.getAttribute("href");
  expect(href).not.toBe("/blog/javascript-localstorage-persistenza");
  await link.click();
  await expect(page).toHaveURL(new RegExp(`${href}$`));
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(title!);
  await expect(page.getByRole("main")).toBeFocused();
});

test("an article opens from the archive without getting stuck in Suspense", async ({
  page,
}) => {
  await page.goto("/blog", { waitUntil: "networkidle" });
  await page
    .getByRole("searchbox", { name: "Cerca nell’archivio" })
    .fill("localStorage");
  await page
    .getByRole("heading", {
      name: "JavaScript: salvare dati nel browser con localStorage",
    })
    .getByRole("link")
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "JavaScript: salvare dati nel browser con localStorage",
  );
  await expect(
    page
      .locator(".article-code-block")
      .first()
      .getByRole("button", { name: "Copia codice" }),
  ).toBeVisible();
  await expect(page.getByRole("main")).toBeFocused();
});

for (const width of [320, 1280]) {
  test(`about and article layouts stay inside the viewport at ${width}px`, async ({
    page,
  }, testInfo) => {
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
    for (const route of [
      "/about",
      "/blog/principio-di-archimede-e-i-container-docker",
    ]) {
      await page.goto(route, { waitUntil: "networkidle" });
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth),
      ).toBeLessThanOrEqual(width);
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
      if (route === "/about") {
        await expect(
          page
            .getByRole("list", { name: "Evoluzione del ruolo" })
            .getByRole("heading"),
        ).toHaveCount(2);
        await expect(
          page.getByRole("link", { name: "Scarica il CV", exact: false }),
        ).toHaveAttribute("href", "/AlessandroGuelpa_CV.pdf");
      }
      await page.screenshot({
        path: testInfo.outputPath(
          `${route === "/about" ? "about" : "article"}-${width}-light.png`,
        ),
        fullPage: true,
      });
      await page
        .getByRole("banner")
        .getByRole("button", { name: "Attiva il tema scuro" })
        .click();
      await page.screenshot({
        path: testInfo.outputPath(
          `${route === "/about" ? "about" : "article"}-${width}-dark.png`,
        ),
        fullPage: true,
      });
      await page
        .getByRole("banner")
        .getByRole("button", { name: "Attiva il tema chiaro" })
        .click();
    }
    expect(errors).toEqual([]);
  });
}
