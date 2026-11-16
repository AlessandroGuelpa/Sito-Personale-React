Legacy code becomes hard to change safely when important behaviour is implicit. It can contain business rules no one wrote down and dependencies that only show up after an edit. Start with the flow you need to change and establish what it does now.

[Rubber duck debugging](/blog/la-paperella-di-gomma-e-larte-di-sentirsi-stupidi) can help turn an uncertainty into a hypothesis. A [global CSS change](/blog/teoria-del-caos-effetto-farfalla-e-css-globale) is an example of a local edit that can affect a distant screen.

## Write down the behaviour people rely on

Identify the inputs, outputs, side effects and systems involved. If an old function calculates prices, collect examples of zero amounts, combined discounts and missing values. Add characterisation tests so those cases can be run against both the original and edited code. The tests capture what happens today, including behaviours the team may decide to change separately.

## Make a focused change

Choose a single problem such as repeated calculation or a difficult remote dependency. Isolate that piece behind a clear interface and check that the outputs you intend to preserve still match. Keep a way to revert the change and observe how it behaves after release. When a business requirement has changed, test the new rule separately from the refactoring so reviewers can see which differences are intentional.

## Use a gradual replacement if it fits

Sometimes ongoing maintenance cost or a documented technology constraint justifies replacing a larger part of the system. Plan to move one behaviour at a time where possible and compare its results with the old version using realistic inputs. Choose how to detect and recover from a difference before more traffic depends on the replacement. The goal is a system the team can change, observe and verify.

## Sources

- [Martin Fowler — Strangler Fig Application](https://martinfowler.com/bliki/StranglerFigApplication.html)
- [GitHub Docs — Reviewing changes in pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests)
