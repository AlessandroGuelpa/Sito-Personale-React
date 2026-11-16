An HTTP request crosses several network links and devices before a server can process it. Propagation time puts a physical floor on the journey. Routing, queues, connection setup and server processing add to what a person experiences. A content delivery network can shorten part of the trip by serving a cached response closer to them.

Measure what happens after the response too. A large [initial JavaScript bundle](/blog/equazione-del-razzo-e-il-problema-del-bundle-da-830kb) still needs to be downloaded and executed. [ETag revalidation](/blog/http-etag-cache-rivalidazione) can avoid sending the full body again when a stored response is unchanged.

## What happens on a cache hit

A CDN keeps eligible responses at edge nodes. When a nearby node has a usable copy, it can serve the request without contacting the origin. On a miss, the edge may still have to fetch from the origin. The result depends on the response, the cache policy and where the request comes from.

A CSS file whose URL includes a content hash can typically stay fresh for a long time. When you change the file, the URL changes with it. HTML at a permanent URL needs a policy that matches how quickly edits should appear. Decide whether to expire, invalidate or revalidate it when you deploy.

## Keep personalised data out of shared responses

A basket API can return different data to every signed-in customer. Before configuring its `Cache-Control` headers, identify which fields depend on identity and which clients may reuse the result. Serving one customer's response to another would turn faster delivery into a privacy and correctness problem.

## Measure where the time goes

Compare time to first byte, transfer time and cache hit ratio across regions. Distinguish cache hits from misses and compare controlled tests with real-user data. If the slow part of a dynamic request is a database query, caching versioned assets closer to users can still help the page load, while the query needs its own investigation.

## Sources

- [MDN — HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)
- [web.dev — Time to First Byte](https://web.dev/articles/ttfb)
