A React site can work after you navigate from the homepage and behave differently when someone opens an article link directly. If the server sends an empty shell for every request, the page’s content and metadata depend on the browser downloading and running JavaScript.

When the routes and articles are known at build time, you can prerender them. The build generates HTML for each URL ahead of the request. The first response can already contain the article, title, metadata and links, while React adds navigation and interactions after hydration. A cart or another interactive feature still needs the correct [derived state on the client](/blog/react-stato-derivato-carrello).

## Choose when to generate HTML

Prerendering generates HTML in advance for known routes. Server-side rendering can generate it when a request comes in. Both approaches can deliver useful initial content. The choice depends on how often pages change and whether they depend on authentication or personalised data.

Search engines that render JavaScript can process a shell-based site, and rendering is a distinct step from crawling the response. Supplying the content in the first response reduces its dependency on that step. It also makes it easier to check what the first response actually contains.

## Serve the right file and HTTP status

The build for this portfolio generates a file for each public route and article. Hosting needs to map the URL to that file. A global rewrite to the homepage can serve a plausible response even for a URL that does not exist, so check that missing pages return HTTP 404 and present a useful recovery path.

Open an article directly in a fresh session and check the status and initial response. The browser DOM after hydration can show content that was absent from the original HTML. Check for the H1, a page-specific title and description, canonical URL, relevant structured data and real links to other pages.

~~~bash
# Inspect the HTTP status and initial HTML.
curl -I https://alessandroguelpa.it/blog
curl -s https://alessandroguelpa.it/blog | grep -E 'canonical|<title|<h1'
~~~

This is a quick manual check. Use an HTML parser when asserting exact link counts, attributes or structured data. In a preview environment, verify that the production page’s canonical points to the intended public URL. Include pages in the sitemap and link to them from the visible archive and related content so people and crawlers can discover them.

## Test what a successful build can miss

Compilation can succeed with duplicate titles, canonicals pointing to the wrong page, or direct URLs that return 404. For each template, open a real deep link and inspect the server response. Also test an invalid URL and compare its status with the valid one.

This gives a reproducible check of what a visitor gets before any navigation inside the app. [Progressive enhancement](/blog/progressive-enhancement-funzione-base) helps keep the basic experience available with limited JavaScript. [Measuring the initial bundle](/blog/equazione-del-razzo-e-il-problema-del-bundle-da-830kb) helps control the work the browser still needs to do after that response.

## Sources

- [Google Search Central on JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [React server rendering APIs](https://react.dev/reference/react-dom/server)
- [The portfolio’s prerender script](https://github.com/AlessandroGuelpa/Sito-Personale-React/blob/main/scripts/prerender.mjs)
