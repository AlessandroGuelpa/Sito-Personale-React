A metal bracket supports a machine lever. Each time the lever moves, the bracket flexes slightly and springs back. It passes the first test. After months of service, a crack can appear near a mounting hole.

The design details matter. [Tolerances and dimensional chains](/blog/tolleranze-catena-dimensionale) help explain why a nominal dimension alone cannot describe a component’s behaviour. [Requirements verification](/blog/verifica-validazione-requisiti) helps identify what the component must demonstrate in a test.

## Where a crack can start

**Fatigue** is damage that accumulates under repeated loading. It can occur when the nominal stress stays below the yield strength, the level above which permanent deformation starts. Nominal stress leaves out local peaks. The actual stress near a hole or a sudden change in cross-section can be higher.

A crack can start at one of those points and grow over successive cycles. Once it reaches a critical size for the load, material and geometry, it can propagate quickly until the part breaks.

## One bracket at two duty cycles

Imagine one load and unload cycle per lever operation, with 250 operating days a year. At 60 operations a day, the bracket sees **15,000 cycles a year**. At 600 operations a day, it sees **150,000 cycles** under the same load per cycle.

A 75,000-cycle test would represent five years in the first scenario and about six months in the second, assuming the machine keeps operating at the same rate.

## What an S–N curve tells you

An **S–N curve** relates cyclic stress amplitude to the number of cycles to failure measured on test specimens under defined conditions. Stress amplitude is half the difference between maximum and minimum stress.

A cycle from 0 to 60 MPa and one from 30 to 90 MPa both have an amplitude of 30 MPa. Their mean stresses are 30 and 60 MPa respectively. Use fatigue data that accounts for that difference when estimating service life.

Manufacturing matters as well. In tests on 2024-T3 aluminium sheet, a NASA technical report documented different fatigue lives for specimens with holes produced using different machining methods.

## Set up a representative test

On the test bench, I would mount the bracket with the specified fasteners and apply the minimum and maximum load for the required number of cycles. Before starting, I would set inspection intervals and choose how to record detectable cracks around the holes.

To compare designs, for example two fillet radii at a change in cross-section, keep the material, machining, mounting and load cycle the same. At each inspection, record the cycle count and the position of any crack.

If vibration drives the repeated load, the [resonance example for a stiff support](/blog/risonanza-meccanica-rigidita-supporto) shows how a change in stiffness can amplify displacement.

## Sources

- [MIT OpenCourseWare on fatigue and S–N curves](https://ocw.mit.edu/courses/3-11-mechanics-of-materials-fall-1999/f678e01017186c53d45845ad93c07938_MIT3_11F99_fatigue.pdf)
- [NASA Engineering and Safety Center on metal fatigue](https://nescacademy.nasa.gov/video/eb24e80551684a74838ab675cf9fd6be1d)
- [NASA technical report on hole machining and fatigue](https://ntrs.nasa.gov/citations/20040110776)
