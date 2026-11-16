A hypothetical exporter generates a CSV without errors. The columns match the specification, the file opens and every test passes. Then the person importing the orders finds that the identifiers do not match those in the ERP. The exporter meets the written requirements and the intended workflow still needs manual work.

I find the difference between verification and validation useful here. [Measurement uncertainty](/blog/misure-incertezza-cifre-decimali) affects what evidence can support a requirement. An [architecture decision record](/blog/adr-decisioni-architetturali) helps preserve why a proposed approach was chosen for the situation.

## Ask two questions about the result

Verification asks whether the product meets its specified requirements. Validation asks whether it meets the intended need under the conditions in which it will be used. NASA's Systems Engineering Handbook explicitly distinguishes the two. A test of the CSV separator verifies a criterion. Having an operator import representative records in their normal environment helps validate the workflow.

## Describe what success looks like in use

For the export, I would write one check for the agreed rows and fields and another for what the operator can do with them. For example, confirm that orders can be imported without retyping IDs or editing columns by hand. That brings practical questions into the design while they can still affect it. Which system assigns the customer code? What happens to cancelled orders? Who handles a rejected record?

## Choose evidence from a representative case

Start with an example that includes realistic data and define what you expect the operator to accomplish. Compare the results with the named requirements and with the task itself. If the file passes its conformance checks but the operator still has to reconcile records manually, that evidence can feed back into the requirements. A complete handover needs evidence for both questions.

## Sources

- [NASA — Product verification and product validation](https://www.nasa.gov/reference/2-4-distinctions-between-product-verification-and-product-validation/)

*From the July–November 2026 editorial archive.*
