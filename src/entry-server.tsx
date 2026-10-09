import { PassThrough } from "node:stream";

import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { MotionConfig } from "framer-motion";

import App from "./App";

export function render(
  url: string,
): Promise<{ html: string; head: string; attributes: string }> {
  const context = {} as { helmet: HelmetServerState };

  return new Promise((resolve, reject) => {
    const body = new PassThrough();
    let html = "";

    body.on("data", (chunk) => {
      html += chunk.toString();
    });
    body.on("error", reject);
    body.on("end", () => {
      clearTimeout(timeout);
      const helmet = context.helmet;

      resolve({
        html,
        head: [helmet.title, helmet.meta, helmet.link, helmet.script]
          .map((item) => item.toString())
          .join("\n"),
        attributes: helmet.htmlAttributes.toString(),
      });
    });
    const stream = renderToPipeableStream(
      <HelmetProvider context={context}>
        <StaticRouter future={{ v7_relativeSplatPath: true }} location={url}>
          <MotionConfig reducedMotion="user">
            <App />
          </MotionConfig>
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          stream.pipe(body);
        },
        onShellError: reject,
        onError(error) {
          reject(error);
        },
      },
    );
    const timeout = setTimeout(() => {
      stream.abort();
      reject(new Error(`Prerender timed out: ${url}`));
    }, 20000);
  });
}
