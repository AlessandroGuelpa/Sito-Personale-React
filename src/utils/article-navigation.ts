// Operate on the parsed HTML tree so code fences, links and inline formatting
// cannot create false headings or different labels in the index.
interface ArticleNode {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: ArticleNode[];
}

function textContent(node: ArticleNode): string {
  return node.value ?? node.children?.map(textContent).join("") ?? "";
}

function element(
  tagName: string,
  children: ArticleNode[],
  properties: Record<string, unknown> = {},
): ArticleNode {
  return { type: "element", tagName, properties, children };
}

export function rehypeArticleNavigation({ showOutline = false } = {}) {
  return (tree: ArticleNode) => {
    const usedIds = new Map<string, number>();
    const headings: { id: string; label: string; nested: boolean }[] = [];

    function visit(node: ArticleNode) {
      if (node.type === "element" && /^h[123]$/.test(node.tagName ?? "")) {
        const label = textContent(node).replace(/\s+/g, " ").trim();
        const slug =
          label
            .normalize("NFKD")
            .replace(/\p{M}/gu, "")
            .toLocaleLowerCase("it")
            .replace(/[^\p{L}\p{N}]+/gu, "-")
            .replace(/^-|-$/g, "") || "titolo";
        const count = (usedIds.get(slug) ?? 0) + 1;
        const id = `sezione-${slug}${count > 1 ? `-${count}` : ""}`;

        usedIds.set(slug, count);
        node.properties = { ...node.properties, id, tabIndex: -1 };
        if (node.tagName === "h1") node.tagName = "h2";
        if (label) headings.push({ id, label, nested: node.tagName === "h3" });
      }
      node.children?.forEach(visit);
    }

    visit(tree);
    if (!showOutline || headings.length < 3) return;

    const links = headings.map(({ id, label, nested }) =>
      element(
        "li",
        [element("a", [{ type: "text", value: label }], { href: `#${id}` })],
        { className: nested ? ["article-outline-subsection"] : [] },
      ),
    );
    const outline = element(
      "details",
      [
        element("summary", [{ type: "text", value: "In questo articolo" }]),
        element("nav", [element("ol", links)], {
          "aria-label": "Indice dell’articolo",
        }),
      ],
      { className: ["article-outline", "not-prose"] },
    );

    tree.children?.unshift(outline);
  };
}
