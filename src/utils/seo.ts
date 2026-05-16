import type { BlogPost } from "@/data/blogPosts";

export const SITE_URL = "https://alessandroguelpa.it";
export const SITE_NAME = "Alessandro Guelpa";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/logo_black.webp`;
export const AUTHOR_NAME = "Alessandro Guelpa";
export const TWITTER_HANDLE = "@AlessandroGuelpa";

const MARKDOWN_TOKEN_REGEX =
  /(```[\s\S]*?```)|(`[^`]*`)|(!\[[^\]]*\]\([^)]*\))|(\[[^\]]*\]\([^)]*\))|(^>\s?)|(^#{1,6}\s+)|([*_~]{1,3})|(\$\$[\s\S]*?\$\$)|(\$[^$]*\$)/gm;

export function stripMarkdown(input: string): string {
  return input
    .replace(MARKDOWN_TOKEN_REGEX, (_match, codeBlock, inlineCode, image, link) => {
      if (codeBlock || inlineCode || image) return "";
      if (link) {
        const text = link.match(/\[([^\]]*)\]/);

        return text ? text[1] : "";
      }

      return "";
    })
    .replace(/<[^>]+>/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/\n{2,}/g, "\n\n")
    .replace(/[ \t]+/g, " ")
    .trim();
}

export function buildExcerpt(post: BlogPost, maxLength = 160): string {
  if (post.excerpt && post.excerpt.trim().length > 0) {
    return post.excerpt.trim();
  }

  const plain = stripMarkdown(post.content);
  const firstParagraph = plain.split(/\n\n/).find((p) => p.trim().length > 0) ?? plain;
  const compact = firstParagraph.replace(/\s+/g, " ").trim();

  if (compact.length <= maxLength) return compact;

  const truncated = compact.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  const safe = lastSpace > maxLength - 30 ? truncated.slice(0, lastSpace) : truncated;

  return `${safe.replace(/[.,;:!?]+$/, "")}…`;
}

export function readingTimeMinutes(content: string): number {
  const words = content.trim().split(/\s+/).length;

  return Math.max(1, Math.ceil(words / 200));
}

export function blogPostUrl(id: string): string {
  return `${SITE_URL}/blog/${id}`;
}

export function blogPostJsonLd(post: BlogPost) {
  const url = blogPostUrl(post.id);
  const description = buildExcerpt(post, 200);
  const image = post.coverImage ?? DEFAULT_OG_IMAGE;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description,
    image,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "it-IT",
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo_black.webp`,
      },
    },
    keywords: post.tags?.join(", "),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
