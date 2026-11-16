An AI coding assistant can draft code, tests or explanations. A plausible suggestion can still refer to a method from another library version or assume a data shape the application never receives. Treat the output as a proposed change and review it against the same evidence you would want for another contribution.

Reviewing a [Git diff and merge](/blog/principio-di-esclusione-di-pauli-e-i-conflitti-git) helps catch unrelated changes. [Rails request specs](/blog/rails-request-specs-testare-api) can exercise the promised behaviour through the actual HTTP endpoint.

## Check the API the project actually uses

Look up the dependency versions in the lockfile and check the official documentation for those versions. If a suggested method is unavailable, identify how the installed library expresses the needed operation. Review the expected input, what happens on a boundary value and which paths write data or call another service.

## Test the requirement and its failures

Start with a test that describes the result the user needs. Run the relevant type checks, unit tests and integration tests. For a change involving an API, exercise an ordinary response, a failure and the application's permissions or rate-limit handling where relevant. Review which branch each test actually covers. A type check can verify interfaces while leaving an incorrect business result untouched.

## Keep context and responsibility visible

Exclude credentials, unnecessary personal data and restricted code when preparing prompts, in line with the rules for the tools and project. In review, explain the technical decision and discuss what the change does, including its effect on files, queries or authorisation. If the generated code passes a narrow test and still leaves the expected workflow untested, exercise that workflow before integrating it.

## Sources

- [GitHub Docs — Responsible use of Copilot](https://docs.github.com/en/copilot/responsible-use)
- [OWASP — Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)
