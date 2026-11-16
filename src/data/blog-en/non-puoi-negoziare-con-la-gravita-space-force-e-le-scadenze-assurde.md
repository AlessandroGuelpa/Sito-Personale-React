A date can be agreed in a meeting. Delivering a reliable result still requires integrations, tests, review and deployment. An estimate should represent that work and the conditions it depends on. Set out the unknowns early enough for the team to make a meaningful scope or scheduling decision.

[Technical debt](/blog/entropia-del-codice) can explain part of the hidden effort. [Reproducible debugging](/blog/effetto-osservatore-fisica-quantistica-e-l-arte-del-debugging) makes it easier to investigate a failure that appears late in the process.

## Break the outcome into verifiable pieces

Record what needs to be built, what needs to be verified and where the work depends on something outside the team. A poorly documented API or an unavailable test environment can turn a familiar task into an uncertain one. Use a range and write down the assumptions behind it. Attach a concrete check to an important unknown, such as importing a representative record into the target system.

## Decide what a smaller release must still do

For an ecommerce migration, list the flows the service needs on day one. The catalogue, orders, payments and redirects may each have a minimum useful result. Identify which secondary behaviours can move to a later release. Keep the tests and deployment checks that protect data and make failures recoverable. A smaller release is viable when it still meets its stated purpose.

## Update the estimate when facts change

Tell the team when access is missing, requirements remain open or a provider's response differs from what the plan assumed. Update the date range and scope while there is still room to act. When time becomes fixed, make the remaining trade-off visible. That lets people agree on what will ship and which risk the release process must control.

## Sources

- [Atlassian — Agile estimation](https://www.atlassian.com/agile/project-management/estimation)
- [Google SRE — Embracing Risk](https://sre.google/sre-book/embracing-risk/)
