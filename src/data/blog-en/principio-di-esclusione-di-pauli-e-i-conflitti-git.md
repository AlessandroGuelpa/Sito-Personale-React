Git reports a merge conflict when it cannot combine changes automatically. The edits may touch the same lines or affect a structure that has changed on the other branch. Start by reading what each change was trying to achieve. The file that resolves the conflict has to express the intended combined behaviour.

A [debugging approach based on hypotheses and tests](/blog/effetto-osservatore-fisica-quantistica-e-l-arte-del-debugging) helps after the merge. Check areas such as [external API integrations](/blog/rails-consumare-api-esterne) when the edits affect a shared contract.

## Read the conflict in context

Use `git status` to see which paths are unresolved, then read the diffs. Conflict markers show regions Git needs a person to resolve. Replace the marked region with the desired code and make sure the markers are removed. Check dependencies in nearby files, since a textual merge can succeed while leaving an incompatible caller or a stale test.

For example, one branch may tighten form validation and another may change how the same function reports an error. Keeping the whole function from one side could drop the other behaviour. Combine the revised rule with the agreed error path, then test both the ordinary submission and the failure.

## Coordinate updates to shared history

Integrating main regularly can keep the conflicting changes smaller. Merging and rebasing have different effects on branch history. If rebasing would rewrite commits someone else uses, coordinate with them before updating the remote branch. Use a pull request and the available checks for changes to main, where a forced update can disrupt other work.

## Review the result as a change

Run the relevant tests after resolving the conflict and inspect the final diff. Verify both intentions, even if Git only marked one file. Small branches and a clear description of the conflict keep that review manageable.

## Sources

- [GitHub Docs — About merge conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)
- [Git — git-merge](https://git-scm.com/docs/git-merge)
