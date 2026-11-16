A working local application can fail after deployment because of configuration, runtime versions, permissions, missing assets or access to a remote service. Reproduce the failure on the deployed URL before changing the code. Record what the response actually shows and compare it with what the local build expects.

## Check the first HTTP response

A Vite development server and a static host can handle routes differently. A link inside the app may work after the router has loaded, while opening the same path directly returns a 404. Check the status and body for a direct navigation. Then verify rewrite rules, the base URL and the presence and exact case of generated filenames.

## Compare the build and execution environments

Build with the same Node version and dependencies from the lockfile. Review the build logs, type check and generated assets. Some [environment variables](/blog/quando-luniverso-ti-cambia-le-variabili-in-produzione) are read while building the frontend and others at runtime by a server. Check which stage requires the value and supply private keys through the server environment. The [Docker build guide](/blog/principio-di-archimede-e-i-container-docker) covers ways to reproduce the runtime and dependencies.

Use the Network tab to distinguish a missing file from an API that returns 401 or 403, or a browser request blocked by CORS. For each external dependency, test a normal response, an error and a slow response. Keep diagnostic context such as the request path and status without recording secret values.

## Confirm the fix through the same entry point

After a fix, repeat the direct navigation or request on the preview domain. Then run the same check on production, where permissions and environment values may differ. If only one domain fails, compare the settings and HTTP evidence for that domain to narrow down the remaining difference.

## Sources

- [Vite — Environment variables and modes](https://vite.dev/guide/env-and-mode)
- [Vercel — Build and deployment](https://vercel.com/docs/deployments)
