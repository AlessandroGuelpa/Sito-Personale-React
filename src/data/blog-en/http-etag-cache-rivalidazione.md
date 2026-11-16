A browser can have a copy of a resource without knowing whether it is still current. It can ask the server whether that representation has changed before downloading the whole response again. An ETag is the value the client and server compare in that exchange.

[HTTP caching and CDNs](/blog/velocita-della-luce-ping-e-content-delivery-network) deal with how long a response stays fresh and what happens when it expires. [React prerendering](/blog/react-prerender-html-metadati) determines what the first HTML response contains. An ETag can help the browser reuse that HTML safely when the URL stays the same.

## Checking a copy with If-None-Match

The server associates an opaque identifier with a representation and sends it in the `ETag` header. The client can send it back as `If-None-Match` when it revalidates a cached copy.

```http
GET /catalog.json HTTP/1.1
Host: example.com
If-None-Match: "catalog-v7"
```

If the identifier matches the selected representation, the server can answer this conditional GET with `304 Not Modified`, without sending the body. The client reuses the stored body according to the cache rules. If the representation has changed, the usual successful response carries the new body.

## Choosing between no-cache and no-store

`Cache-Control: no-cache` permits storage and requires revalidation before a cache reuses the response. A stored response can therefore benefit from a 304. With `Cache-Control: no-store`, the client and intermediary caches are instructed to avoid storing the response. Browser history and the back-forward cache follow their own rules, so verify their behaviour separately if it matters to your application.

## Pick a policy for the resource

A static asset with a content hash in its filename can have a long freshness lifetime because a changed file gets a new URL. HTML or JSON that changes at a stable URL can use a shorter lifetime or revalidation. For personalised responses, decide who may store the response and which request headers identify different variants. Check that policy for both browsers and shared caches before applying it to authenticated routes.

## Sources

- [MDN — ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag)
- [MDN — HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)
