An application can build successfully and fail on its first production request. Configuration, service versions, access permissions and production data can differ from the local setup. Compare the deployed environment with the assumptions the code makes before changing the logic.

A [reproducible Docker image](/blog/principio-di-archimede-e-i-container-docker) reduces differences in dependencies. Explicit [Ruby error handling](/blog/ruby-gestione-errori) can preserve the cause if a service rejects the request.

## Make each configuration value explicit

Declare which endpoints, feature flags and credentials the application needs. Validate the presence and expected format of required values at startup where possible. Store secrets outside the repository and provide them to the process that needs them. A key can exist and still contain a credential for the wrong service or environment.

## Trace when a value is read

Suppose the first API request returns 401. Check whether the production runtime has the correct credential for that endpoint. A variable supplied at build time can be absent in a separate runtime, and a Vite value bundled for the browser is visible to users. Keep private credentials in server-side settings. Log the failure category, environment and request context without including the credential.

If opening a URL directly returns 404, look at the server's routing and the presence of a prerendered document. A route failure and a remote authorisation failure require different checks even when users report that both started after a release.

## Add a release check for the actual failure

After fixing the cause, automate a check for the affected configuration or route if the release process can run it safely. Monitor errors and latency after deployment and keep a way to restore the previous configuration. A repeatable check can catch the same difference before people depend on the release.

## Sources

- [The Twelve-Factor App — Config](https://12factor.net/config)
- [OWASP — Secrets Management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
