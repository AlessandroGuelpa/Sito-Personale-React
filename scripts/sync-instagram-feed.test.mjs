import assert from "node:assert/strict";
import { mkdtemp, readFile, readdir, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { spawnSync } from "node:child_process";

import { jpegSize, normalizeRows, syncFeed } from "./sync-instagram-feed.mjs";

const currentFeed = JSON.parse(
  await readFile(
    new URL("../src/data/instagram-feed.json", import.meta.url),
    "utf8",
  ),
);
const jpeg = await readFile(
  new URL(`../public${currentFeed.posts[0].image}`, import.meta.url),
);
const row = (id, timestamp = "20261102180417", kind = "reel") => [
  timestamp,
  `Public caption ${id}.\n\nMore detail.`,
  "internal-id",
  `https://scontent.cdninstagram.com/${id}.jpg`,
  `https://www.instagram.com/${kind}/${id}/`,
  kind === "p" ? "FEED_CAROUSEL_ALBUM" : undefined,
];
const input = (rows) => ({ username: "vehrt_audio", rows });
const response = () =>
  new Response(jpeg, { headers: { "content-type": "image/jpeg" } });

test("a large portrait is optimized without changing its ratio or declared dimensions", async (t) => {
  const large = spawnSync(
    process.env.CODEX_PRIMARY_RUNTIME_PYTHON || "python3",
    [
      "-c",
      `
import sys
from PIL import Image
Image.new("RGB", (1080, 1350), "#a32937").save(sys.stdout.buffer, "JPEG")
`,
    ],
  );
  assert.equal(large.status, 0);
  const root = await directory(t);
  await syncFeed(input([row("portrait", "20261102180417", "p")]), {
    root,
    fetcher: async () =>
      new Response(large.stdout, { headers: { "content-type": "image/jpeg" } }),
  });
  const feed = JSON.parse(
    await readFile(path.join(root, "src/data/instagram-feed.json"), "utf8"),
  );
  const post = feed.posts[0];
  const actual = jpegSize(
    await readFile(path.join(root, "public", post.image)),
  );
  assert.deepEqual(actual, { width: 640, height: 800 });
  assert.equal(post.width / post.height, 1080 / 1350);
  assert.deepEqual(actual, { width: post.width, height: post.height });
});
async function directory(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), "vehrt-instagram-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  return root;
}

test("public posts and reels are ordered together, with untrusted rows rejected", () => {
  const rows = normalizeRows(
    input([row("older", "20261101180000", "p"), row("latest")]),
  );
  assert.deepEqual(
    rows.map((post) => [post.id, post.kind]),
    [
      ["latest", "reel"],
      ["older", "carousel"],
    ],
  );
  assert.equal(rows[0].title, "Public caption latest.");
  assert.throws(() =>
    normalizeRows({ username: "other_account", rows: [row("one")] }),
  );
  assert.throws(() => normalizeRows(input([row("one"), row("one")])));
  const untrusted = row("one");
  untrusted[3] = "https://example.com/private.jpg";
  assert.throws(() => normalizeRows(input([untrusted])));
});

test("the second sync is a no-op and does not redownload expiring CDN URLs", async (t) => {
  const root = await directory(t);
  let downloads = 0;
  const fetcher = async () => {
    downloads++;
    return response();
  };
  const source = input([row("one"), row("two", "20261101180000", "p")]);
  assert.deepEqual(await syncFeed(source, { root, fetcher }), {
    changed: true,
    posts: 2,
    images: 2,
  });
  const saved = await readFile(
    path.join(root, "src/data/instagram-feed.json"),
    "utf8",
  );
  source.rows[0][3] += "?new-signature=1";
  assert.deepEqual(await syncFeed(source, { root, fetcher }), {
    changed: false,
    posts: 2,
    images: 0,
  });
  assert.equal(downloads, 2);
  assert.equal(
    await readFile(path.join(root, "src/data/instagram-feed.json"), "utf8"),
    saved,
  );
  assert(!saved.includes("cdninstagram") && !saved.includes("internal-id"));
});

test("empty, incomplete and delayed responses preserve the current feed", async (t) => {
  const root = await directory(t);
  const fetcher = async () => response();
  await syncFeed(input([row("one"), row("two", "20261101180000")]), {
    root,
    fetcher,
  });
  const filename = path.join(root, "src/data/instagram-feed.json");
  const saved = await readFile(filename, "utf8");
  for (const rows of [
    [],
    [row("one")],
    [row("old1", "20261001000000"), row("old2", "20261002000000")],
  ]) {
    await assert.rejects(syncFeed(input(rows), { root, fetcher }));
    assert.equal(await readFile(filename, "utf8"), saved);
  }
});

test("a failed new cover leaves both the last good feed and images untouched", async (t) => {
  const root = await directory(t);
  await syncFeed(input([row("original")]), {
    root,
    fetcher: async () => response(),
  });
  const filename = path.join(root, "src/data/instagram-feed.json");
  const saved = await readFile(filename, "utf8");
  let downloads = 0;
  await assert.rejects(
    syncFeed(
      input([row("new1", "20261103180000"), row("new2", "20261103170000")]),
      {
        root,
        fetcher: async () =>
          ++downloads === 1
            ? response()
            : new Response("unavailable", { status: 503 }),
      },
    ),
  );
  assert.equal(await readFile(filename, "utf8"), saved);
  assert.deepEqual(await readdir(path.join(root, "public/vehrt/instagram")), [
    "original.jpg",
  ]);
});
