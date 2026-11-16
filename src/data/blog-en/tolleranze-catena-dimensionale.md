Three spacers are meant to add up to 30 millimetres. Each is specified as 10 ± 0.2 mm. Every spacer can meet its drawing and the whole stack can still reach a dimension the assembly cannot accommodate. The fit depends on the combination of values.

A [design margin or resource budget](/blog/margine-progetto-budget-capacita) makes the remaining room explicit. [Measurement uncertainty](/blog/misure-incertezza-cifre-decimali) affects what you can conclude from the measured dimension of any individual part.

## Add the limits across the stack

If all three spacers are near their upper limit of 10.2 mm, their combined thickness is 30.6 mm. If all are at the lower limit of 9.8 mm, it is 29.4 mm. The nominal 30 mm is the midpoint of that possible range for a simple linear stack. An actual assembly may also have clearance, deformation, geometry or thermal effects that change the calculation.

## Distinguish what is allowed from what was measured

The tolerance sets the permitted range for a characteristic. Measurement uncertainty describes the doubt associated with a particular measurement result. Both affect an acceptance decision. They enter that decision in different ways, especially for a part measured near its limit.

A statistical stack-up can model how parts vary in practice. It needs assumptions about the distributions and about whether the dimensions vary independently. Check these assumptions before using the result to judge what fraction of assemblies will fit.

## Design around the interface

Find the dimension that needs a guarantee before tightening every part specification. A design might allow adjustment, use a different reference or have fewer dimensions in the stack. I look for the same kind of boundary in software integrations, where individually valid components can disagree about an interface. For the spacers, check the assembled range against the functional fit. The three part inspections are inputs to that check.

## Sources

- [NIST — Measurement uncertainty terminology](https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-d1-terminology)

*From the July–November 2026 editorial archive.*
