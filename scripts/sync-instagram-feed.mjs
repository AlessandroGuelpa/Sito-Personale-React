import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const repoRoot = fileURLToPath(new URL("../", import.meta.url));
const feedPath = "src/data/instagram-feed.json";
const imageDirectory = "public/vehrt/instagram";

export function jpegSize(bytes) {
  assert(bytes[0] === 0xff && bytes[1] === 0xd8, "Expected a JPEG cover");
  const frames = new Set([
    0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce,
    0xcf,
  ]);
  let offset = 2;
  while (offset + 4 < bytes.length) {
    assert.equal(bytes[offset++], 0xff, "Invalid JPEG marker");
    while (bytes[offset] === 0xff) offset++;
    const marker = bytes[offset++];
    assert(marker !== 0xda && marker !== 0xd9, "JPEG dimensions missing");
    const length = bytes.readUInt16BE(offset);
    assert(
      length >= 2 && offset + length <= bytes.length,
      "Invalid JPEG segment",
    );
    if (frames.has(marker)) {
      assert(length >= 8, "Invalid JPEG frame");
      const height = bytes.readUInt16BE(offset + 3);
      const width = bytes.readUInt16BE(offset + 5);
      assert(
        width > 0 && height > 0 && width <= 10000 && height <= 10000,
        "Invalid image dimensions",
      );
      return { width, height };
    }
    offset += length;
  }
  throw new Error("JPEG dimensions missing");
}

export function normalizeRows(input) {
  assert.equal(input.username, "vehrt_audio", "Wrong Instagram account");
  assert(
    Array.isArray(input.rows) && input.rows.length > 0,
    "Empty source: keeping the last good feed",
  );
  const seen = new Set();
  return input.rows
    .map((row) => {
      assert(Array.isArray(row) && row.length >= 5, "Incomplete Metricool row");
      const [timestamp, caption, , imageUrl, permalink, type] = row;
      assert(/^\d{14}$/.test(timestamp), "Invalid publication date");
      const publishedOn = `${timestamp.slice(0, 4)}-${timestamp.slice(4, 6)}-${timestamp.slice(6, 8)}`;
      assert.equal(
        new Date(`${publishedOn}T00:00:00Z`).toISOString().slice(0, 10),
        publishedOn,
        "Invalid publication date",
      );
      assert(
        typeof caption === "string" && caption.trim(),
        "Missing public caption",
      );
      const match =
        /^https:\/\/www\.instagram\.com\/(?:vehrt_audio\/)?(p|reel)\/([A-Za-z0-9_-]+)\/?$/.exec(
          permalink,
        );
      assert(match, "Expected a public Instagram post or reel permalink");
      const id = match[2];
      assert(!seen.has(id), "Duplicate Instagram post");
      seen.add(id);
      const source = new URL(imageUrl);
      assert(
        source.protocol === "https:" &&
          !source.username &&
          !source.password &&
          !source.port &&
          (source.hostname.endsWith(".cdninstagram.com") ||
            source.hostname.endsWith(".fbcdn.net")),
        "Untrusted media host",
      );
      return {
        id,
        url: `https://www.instagram.com/${match[1]}/${id}/`,
        kind:
          match[1] === "reel"
            ? "reel"
            : /CAROUSEL/.test(type ?? "")
              ? "carousel"
              : "post",
        title: caption
          .trim()
          .split(/\n\s*\n/)[0]
          .replace(/\s+/g, " ")
          .slice(0, 180),
        publishedOn,
        image: `/vehrt/instagram/${id}.jpg`,
        source: source.href,
        timestamp,
      };
    })
    .sort((a, b) => b.timestamp.localeCompare(a.timestamp))
    .slice(0, 6);
}

export async function optimizeCover(bytes) {
  const size = jpegSize(bytes);
  if (size.width <= 640 && bytes.length <= 48 * 1024) return { bytes, ...size };
  // Pillow is already available in the scheduled task's managed runtime.
  const result = spawnSync(
    process.env.CODEX_PRIMARY_RUNTIME_PYTHON || "python3",
    [
      "-c",
      `
import io, sys
from PIL import Image, ImageOps
image = ImageOps.exif_transpose(Image.open(io.BytesIO(sys.stdin.buffer.read()))).convert("RGB")
image.thumbnail((640, 10000), Image.Resampling.LANCZOS)
image.save(sys.stdout.buffer, "JPEG", quality=80, optimize=True)
`,
    ],
    { input: bytes, maxBuffer: 6 * 1024 * 1024, timeout: 20000 },
  );
  assert(
    result.status === 0,
    "Cover optimization requires Python 3 with Pillow",
  );
  return { bytes: result.stdout, ...jpegSize(result.stdout) };
}

async function downloadCover(url, fetcher) {
  const response = await fetcher(url, {
    redirect: "error",
    signal: AbortSignal.timeout(20000),
  });
  assert(
    response.ok &&
      /^image\/jpeg(?:;|$)/i.test(response.headers.get("content-type") ?? ""),
    "Cover download failed",
  );
  const chunks = [];
  let size = 0;
  for await (const chunk of response.body) {
    size += chunk.length;
    assert(size <= 5 * 1024 * 1024, "Cover exceeds 5 MiB");
    chunks.push(chunk);
  }
  const bytes = Buffer.concat(chunks);
  return optimizeCover(bytes);
}

export async function syncFeed(
  input,
  { root = repoRoot, fetcher = fetch } = {},
) {
  const rows = normalizeRows(input);
  let previous;
  try {
    previous = JSON.parse(await readFile(path.join(root, feedPath), "utf8"));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  // A partial or delayed analytics response must not roll the feed backwards.
  if (previous?.posts?.length) {
    assert(
      rows[0].publishedOn >= previous.posts[0].publishedOn,
      "Source is older than the current feed",
    );
    assert(
      rows.length >= Math.min(6, previous.posts.length),
      "Incomplete source: keeping the last good feed",
    );
  }
  const pendingImages = [];
  const posts = [];
  for (const row of rows) {
    let cover;
    try {
      const bytes = await readFile(path.join(root, "public", row.image));
      cover = jpegSize(bytes);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      cover = await downloadCover(row.source, fetcher);
      pendingImages.push({
        file: `${imageDirectory}/${row.id}.jpg`,
        bytes: cover.bytes,
      });
    }
    const { source, timestamp, ...post } = row;
    posts.push({ ...post, width: cover.width, height: cover.height });
  }
  const next = `${JSON.stringify({ username: "vehrt_audio", posts }, null, 2)}\n`;
  if (
    previous &&
    JSON.stringify(previous) === JSON.stringify(JSON.parse(next)) &&
    !pendingImages.length
  ) {
    return { changed: false, posts: posts.length, images: 0 };
  }
  // Download and validate every new cover before changing any tracked file.
  await mkdir(path.join(root, imageDirectory), { recursive: true });
  await mkdir(path.join(root, path.dirname(feedPath)), { recursive: true });
  for (const image of pendingImages)
    await writeFile(path.join(root, image.file), image.bytes);
  await writeFile(path.join(root, feedPath), next);
  return { changed: true, posts: posts.length, images: pendingImages.length };
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  try {
    assert(
      process.argv.length === 3,
      "Usage: node scripts/sync-instagram-feed.mjs /absolute/path/to/metricool.json",
    );
    const input = JSON.parse(await readFile(process.argv[2], "utf8"));
    console.log(JSON.stringify(await syncFeed(input)));
  } catch (error) {
    console.error(`Instagram sync stopped: ${error.message}`);
    process.exitCode = 1;
  }
}
