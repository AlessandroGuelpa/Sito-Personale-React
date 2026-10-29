import { useEffect, useRef, useState } from "react";

export const VEHRT_INSTAGRAM_URL = "https://www.instagram.com/vehrt_audio/";
const EMBED_SCRIPT = "https://www.instagram.com/embed.js";
// The native profile preview has six square tiles and a 64px footer.
// Adjust only its interface bands; the artwork and iframe controls stay intact.
const PROFILE_GRID_RATIO = 2 / 3;
const PROFILE_FOOTER_HEIGHT = 64;

type InstagramWindow = Window & {
  instgrm?: { Embeds: { process: () => void } };
};

let sdk: Promise<void> | undefined;

function loadInstagram() {
  if ((window as InstagramWindow).instgrm) return Promise.resolve();
  if (sdk) return sdk;

  sdk = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    script.onload = () => {
      if ((window as InstagramWindow).instgrm) resolve();
      else reject(new Error("Instagram embed unavailable"));
    };
    script.onerror = () => {
      script.remove();
      reject(new Error("Instagram embed could not load"));
    };
    document.body.append(script);
  }).catch((error) => {
    sdk = undefined;
    throw error;
  });

  return sdk;
}

export function InstagramFeed() {
  const viewport = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"waiting" | "embedded" | "unavailable">(
    "waiting",
  );
  const [size, setSize] = useState({ width: 326, height: 760, scale: 1 });

  useEffect(() => {
    const container = viewport.current!;
    const host = content.current!;
    let active = true;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    function resize() {
      const available = container.clientWidth;
      if (!available) return;
      const width = Math.max(326, available);
      const scale = Math.min(1, available / width);
      const height =
        host.querySelector("iframe") && host.offsetHeight > 1
          ? host.offsetHeight
          : 760;
      setSize((previous) =>
        previous.width === width &&
        previous.height === height &&
        previous.scale === scale
          ? previous
          : { width, height, scale },
      );
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resizeObserver.observe(host);
    resize();

    // Instagram owns only this empty host. React never reconciles the DOM
    // replaced by the SDK, including when returning to this route.
    const mutations = new MutationObserver(() => {
      const iframe = host.querySelector("iframe");
      if (iframe) {
        iframe.title = "VEHRT posts on Instagram";
        iframe.loading = "lazy";
        clearTimeout(timeout);
        if (active) setStatus("embedded");
      }
      resize();
    });
    mutations.observe(host, { childList: true, subtree: true });

    async function mount() {
      const quote = document.createElement("blockquote");
      quote.className = "instagram-media";
      quote.dataset.instgrmPermalink = VEHRT_INSTAGRAM_URL;
      quote.dataset.instgrmVersion = "14";
      const link = document.createElement("a");
      link.href = VEHRT_INSTAGRAM_URL;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "View @vehrt_audio on Instagram";
      quote.append(link);
      host.replaceChildren(quote);
      timeout = setTimeout(() => {
        if (active && !host.querySelector("iframe")) setStatus("unavailable");
      }, 15000);
      try {
        await loadInstagram();
        if (active) (window as InstagramWindow).instgrm?.Embeds.process();
      } catch {
        clearTimeout(timeout);
        if (active) setStatus("unavailable");
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          void mount();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(container);

    return () => {
      active = false;
      observer.disconnect();
      mutations.disconnect();
      resizeObserver.disconnect();
      clearTimeout(timeout);
      host.replaceChildren();
    };
  }, []);

  return (
    <div className="vehrt-instagram-widget">
      <div
        ref={viewport}
        className="vehrt-instagram-viewport"
        hidden={status === "unavailable"}
        style={{
          height:
            status === "unavailable" ? undefined : size.height * size.scale,
        }}
      >
        <div
          ref={content}
          className="vehrt-instagram-content"
          style={{ width: size.width, transform: `scale(${size.scale})` }}
        />
        {status === "embedded" &&
          size.height >
            size.width * PROFILE_GRID_RATIO + PROFILE_FOOTER_HEIGHT && (
            <>
              <span
                aria-hidden="true"
                className="vehrt-instagram-chrome vehrt-instagram-chrome-top"
                style={{
                  height:
                    Math.max(
                      0,
                      size.height -
                        size.width * PROFILE_GRID_RATIO -
                        PROFILE_FOOTER_HEIGHT,
                    ) * size.scale,
                }}
              />
              <span
                aria-hidden="true"
                className="vehrt-instagram-chrome vehrt-instagram-chrome-bottom"
                style={{ height: PROFILE_FOOTER_HEIGHT * size.scale }}
              />
            </>
          )}
      </div>
      <p
        className={status === "embedded" ? "sr-only" : "vehrt-instagram-note"}
        role="status"
      >
        {status === "waiting" && "Loading Instagram…"}
        {status === "unavailable" &&
          "Instagram could not load here. You can still view the posts on the profile."}
        {status === "embedded" &&
          "Content from the official VEHRT Instagram profile."}
      </p>
    </div>
  );
}
