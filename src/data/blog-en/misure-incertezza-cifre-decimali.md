A dashboard reports 23.1472 milliseconds. The display has four decimal places, but the observation is only meaningful in the conditions that produced it. Ask how many times it was measured, what else the machine was doing, and how much the results vary.

In a [tolerance stack](/blog/tolleranze-catena-dimensionale), uncertainty influences whether a dimension can be judged against its limit. [Requirements verification](/blog/verifica-validazione-requisiti) helps establish how precise a measurement needs to be for the decision you are making.

## Read resolution, repeatability and uncertainty separately

Resolution is the smallest change that an instrument or its indication can distinguish. Repeatability concerns how closely repeated measurements agree under specified conditions. Measurement uncertainty describes the spread of values that can reasonably be attributed to the quantity measured. A sensor can display many digits and still have systematic error. A software timer can also offer fine resolution while competing work causes much larger changes in observed duration.

## Put a timing difference in context

Suppose one function takes 20 ms in a run and another takes 19 ms. If repeated measurements for both range from 15 to 30 ms, that one pair gives little evidence of a consistent gain. Define the workload and input size, then repeat the measurements under comparable conditions. Separate cold starts from warm runs when they represent different behaviours. Inspect the distribution before selecting a summary.

## Report the method with the number

I would report a median over a stated number of runs together with the environment and workload. For a result near a requirement, I would also explain the variation and limits of the measurement. Round in a way that is consistent with what the method can distinguish. The reader can then decide whether a visible difference is large enough to support the conclusion.

## Sources

- [NIST — Measurement terminology](https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-d1-terminology)
- [NIST — Measurement uncertainty](https://www.nist.gov/itl/sed/topic-areas/measurement-uncertainty)

*From the July–November 2026 editorial archive.*
