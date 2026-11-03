import { expect, test } from "@playwright/test";

const articleTitle = "JavaScript: salvare dati nel browser con localStorage";

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
