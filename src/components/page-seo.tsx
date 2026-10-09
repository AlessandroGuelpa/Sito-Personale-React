import { Helmet } from "react-helmet-async";

import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/utils/seo";

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
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const pageTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <html lang="it" />
      <title>{pageTitle}</title>
      <meta content={description} name="description" />
      <meta
        content={
          noindex ? "noindex, follow" : "index, follow, max-image-preview:large"
        }
        name="robots"
      />
      <link href={url} rel="canonical" />
      <meta content={SITE_NAME} property="og:site_name" />
      <meta content={pageTitle} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={url} property="og:url" />
      <meta content={type} property="og:type" />
      <meta content="it_IT" property="og:locale" />
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
