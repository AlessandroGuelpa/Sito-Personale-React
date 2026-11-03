import { useState } from "react";

import feed from "@/data/instagram-feed.json";

export const VEHRT_INSTAGRAM_URL = "https://www.instagram.com/vehrt_audio/";

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
});

function InstagramPost({ post }: { post: (typeof feed.posts)[number] }) {
  const [unavailable, setUnavailable] = useState(false);
  const kind =
    post.kind === "reel"
      ? "Reel"
      : post.kind === "carousel"
        ? "Carousel"
        : "Post";

  return (
    <li className="vehrt-instagram-item">
      <a
        className="vehrt-instagram-card"
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${post.title} — ${kind} on Instagram (opens in a new tab)`}
      >
        <div
          className="vehrt-instagram-media"
          style={{ aspectRatio: `${post.width} / ${post.height}` }}
        >
          {unavailable ? (
            <span className="vehrt-instagram-unavailable">
              View on Instagram ↗
            </span>
          ) : (
            <img
              src={post.image}
              width={post.width}
              height={post.height}
              loading="lazy"
              decoding="async"
              alt=""
              onError={() => setUnavailable(true)}
            />
          )}
          <span className="vehrt-instagram-kind" aria-hidden="true">
            {kind} ↗
          </span>
        </div>
        <div className="vehrt-instagram-caption">
          <p>{post.title}</p>
          <time dateTime={post.publishedOn}>
            {dateFormat.format(new Date(`${post.publishedOn}T12:00:00Z`))}
          </time>
        </div>
      </a>
    </li>
  );
}

export function InstagramFeed() {
  return (
    <ul
      className="vehrt-instagram-feed"
      aria-label="Latest posts from @vehrt_audio"
    >
      {feed.posts.map((post) => (
        <InstagramPost key={post.id} post={post} />
      ))}
    </ul>
  );
}
