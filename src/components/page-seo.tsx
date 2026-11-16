import { Helmet } from "react-helmet-async";

import {
  languageAlternates,
  languageForPath,
  siteLanguages,
} from "@/config/locales";
import { DEFAULT_OG_IMAGE, SITE_NAME, sitePageUrl } from "@/utils/seo";

export function PageSeo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  schema,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
  noindex?: boolean;
  schema?: unknown;
}) {
  const url = sitePageUrl(path);
  const pageTitle = `${title} | ${SITE_NAME}`;
  const language = languageForPath(path);
  const alternates = noindex ? undefined : languageAlternates(path);

  return (
    <Helmet>
      <html lang={language} />
      <title>{pageTitle}</title>
      <meta content={description} name="description" />
      <meta
        content={
          noindex ? "noindex, follow" : "index, follow, max-image-preview:large"
        }
        name="robots"
      />
      <link href={url} rel="canonical" />
      {alternates &&
        siteLanguages.map((alternateLanguage) => (
          <link
            key={alternateLanguage}
            href={sitePageUrl(alternates[alternateLanguage])}
            hrefLang={alternateLanguage}
            rel="alternate"
          />
        ))}
      <meta content={SITE_NAME} property="og:site_name" />
      <meta content={pageTitle} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={url} property="og:url" />
      <meta content={type} property="og:type" />
      <meta
        content={language === "en" ? "en_GB" : "it_IT"}
        property="og:locale"
      />
      <meta content={image} property="og:image" />
      {image === DEFAULT_OG_IMAGE && (
        <meta content="1200" property="og:image:width" />
      )}
      {image === DEFAULT_OG_IMAGE && (
        <meta content="630" property="og:image:height" />
      )}
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={pageTitle} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={image} name="twitter:image" />
      {schema ? (
        <script type="application/ld+json">
          {JSON.stringify(schema).replace(/</g, "\\u003c")}
        </script>
      ) : null}
    </Helmet>
  );
}
