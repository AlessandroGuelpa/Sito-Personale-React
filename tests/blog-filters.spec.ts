import { expect, test } from "@playwright/test";

const articleTitle = "localStorage: persistenza e sicurezza nel browser";

test("the archive offers five categories and combines them with search", async ({ page }) => {
  await page.goto("/blog");
  const category = page.getByRole("combobox", { name: "Categoria" });
  await expect(category.locator("option")).toHaveText([
    "Tutte le categorie",
    "Sviluppo software",
    "Ingegneria",
    "Spazio",
    "Ambiente",
    "Musica e audio",
  ]);

  await category.selectOption({ label: "Musica e audio" });
  await page.getByRole("searchbox", { name: "Cerca nell’archivio" }).fill(articleTitle);
  await expect(page.getByText("Nessun articolo corrisponde alla ricerca.")).toBeVisible();
  await category.selectOption({ label: "Sviluppo software" });
  await expect(page.locator("#blog-results")).toContainText("1 articolo trovato");
  await expect(page.getByRole("heading", { name: articleTitle })).toBeVisible();

  await page.reload();
  await expect(category).toHaveValue("sviluppo-software");
  await expect(page.getByRole("searchbox", { name: "Cerca nell’archivio" })).toHaveValue(articleTitle);
  await expect(page.locator("#blog-results")).toContainText("1 articolo trovato");
});

test("specific tag links stay usable and switching category resets tag and pagination", async ({ page }) => {
  await page.goto("/blog?tag=Ruby&page=2");
  await expect(page.getByRole("button", { name: "Rimuovi filtro Ruby" })).toBeVisible();
  await expect(page.locator("#blog-results")).toContainText(/Pagina 2 di \d+/);

  await page.getByRole("combobox", { name: "Categoria" }).selectOption({ label: "Spazio" });
  await expect(page.getByRole("button", { name: "Rimuovi filtro Ruby" })).toHaveCount(0);
  await expect(page.locator("article")).not.toHaveCount(0);
  await expect(page.locator("#blog-results")).toContainText(/Pagina 1 di \d+/);
  expect(new URL(page.url()).searchParams.has("tag")).toBe(false);
  expect(new URL(page.url()).searchParams.has("page")).toBe(false);

  await page.getByRole("combobox", { name: "Categoria" }).selectOption({ label: "Sviluppo software" });
  await page.getByRole("button", { name: "Successiva →" }).click();
  expect(new URL(page.url()).searchParams.get("category")).toBe("sviluppo-software");
  expect(new URL(page.url()).searchParams.get("page")).toBe("2");
  await page.getByRole("searchbox", { name: "Cerca nell’archivio" }).fill(articleTitle);
  await expect(page.locator("#blog-results")).toContainText("Pagina 1 di 1");
  expect(new URL(page.url()).searchParams.has("page")).toBe(false);
});

test("the English archive paginates, searches and links to the equivalent Italian article", async ({
  page,
}) => {
  await page.goto("/en/blog");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("article")).toHaveCount(12);

  await page.getByRole("link", { name: "Next →", exact: true }).click();
  await expect(page).toHaveURL(/\/en\/blog\/page\/2$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://alessandroguelpa.it/en/blog/page/2",
  );

  const search = page.getByRole("searchbox", { name: "Search the archive" });

  await search.pressSequentially("metal fatigue");
  await expect(search).toBeFocused();
  await expect(search).toHaveValue("metal fatigue");
  await expect(page).toHaveURL(/\/en\/blog\/page\/2\?q=metal\+fatigue$/);
  await expect(page.getByRole("article")).toHaveCount(1);
  await page
    .getByRole("link", {
      name: "Metal Fatigue Under Cyclic Loading",
      exact: true,
    })
    .click();
  await expect(page).toHaveURL(/\/en\/blog\/metal-fatigue-cyclic-loading$/);
  await page.getByRole("link", { name: "Read in Italian" }).click();
  await expect(page).toHaveURL(/\/blog\/fatica-metalli-carichi-ciclici$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "it");
});

test("English topic guides lead to English articles and have reciprocal language links", async ({ page }) => {
  await page.goto("/en/blog");
  await page.getByRole("region", { name: "Browse by topic" })
    .getByRole("link", { name: /^Shopify API and ERP Integrations/ }).click();
  await expect(page).toHaveURL(/\/en\/blog\/topics\/shopify-integrations$/);
  await expect(page.getByRole("heading", { name: "Webhooks, idempotency and reconciliation" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Manage the GraphQL query budget" })).toHaveAttribute("href", "/en/blog/shopify-graphql-query-cost-rate-limits");
  await page.getByRole("link", { name: "Read in Italian" }).click();
  await expect(page).toHaveURL(/\/blog\/temi\/shopify-integrazioni$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "it");
  await expect(page.getByRole("link", { name: "Leggi in inglese" })).toHaveAttribute("href", "/en/blog/topics/shopify-integrations");

  await page.goto("/en/blog/topics/rails-backend");
  await page.getByRole("link", { name: "Next →", exact: true }).click();
  await expect(page).toHaveURL(/\/en\/blog\/topics\/rails-backend\/page\/2$/);
  await expect(page.locator('link[rel="alternate"][hreflang="it"]')).toHaveAttribute("href", "https://alessandroguelpa.it/blog/temi/rails-backend/page/2");
  await page.getByRole("link", { name: "Read in Italian" }).click();
  await expect(page).toHaveURL(/\/blog\/temi\/rails-backend\/page\/2$/);
});
