Two tasks can consume the same number of kilowatt-hours and be associated with different emissions. Energy use gives one input to the calculation. The emission factor tells you how much greenhouse gas is associated with a unit of electricity, typically expressed in grams of carbon dioxide equivalent per kilowatt-hour.

Start with the distinction between [power and energy](/blog/kw-kwh-potenza-energia). The [flexibility of electricity demand](/blog/rete-elettrica-flessibilita-domanda) can matter if a load can run at different times.

## What is the carbon intensity of electricity?

It measures the greenhouse gas emissions associated with a unit of electricity within a defined boundary. A value of 250 g CO₂e/kWh assigns 250 grams of carbon dioxide equivalent to each kilowatt-hour. Multiply measured kWh by the factor and divide by 1,000 to obtain kilograms. If the source reports g CO₂ instead of g CO₂e, keep its units and check which gases it counts.

## Multiply by an applicable factor

As a hypothetical example, 10 kWh at 100 g CO₂e per kWh gives 1 kg CO₂e. Using 400 g per kWh for the same consumption gives 4 kg CO₂e. The factors here illustrate the arithmetic. A real calculation should identify the source of the factor and what it represents. The European Environment Agency publishes an electricity generation intensity indicator along with its methodology and time coverage.

## Check the period and the system boundary

An annual average supports some comparisons. For a single hour, you would need a factor appropriate to that hour and location. National generation and national electricity use can have different mixes because countries also import and export electricity. Check which one the figure describes.

Operational emissions and life cycle emissions also cover different processes. A factor that includes plant construction and fuel supply can differ from one focused on generation. Compare estimates that use the same boundary or describe the difference explicitly.

## Make the calculation reproducible

When I read an estimate, I look for the measured energy, the origin of the factor and its reference year or hour. I also check the exclusions. Those details let someone repeat the calculation and see whether changing the time, electricity mix or underlying data would change the result.

## Calculate emissions from hourly readings

Suppose charging uses 2 kWh in one hour at 150 g CO₂e/kWh and 6 kWh in the next hour at 450 g CO₂e/kWh. Add 300 and 2,700 grams. The attributed emissions are 3 kg and the weighted intensity is 375 g CO₂e/kWh. The arithmetic mean of the two factors would give 300, ignoring that the second hour carries three times as much consumption. In a spreadsheet, keep one row for each interval and sum the products of energy and intensity.

## Choose a factor that matches the question

For an annual estimate based on a bill, start with an annual factor appropriate to the electricity consumed. Comparing two charging schedules calls for energy and intensity data aligned to the same intervals and region. Estimating the change in system emissions after shifting the load calls for a marginal analysis or a scenario that models which generators change output. An hourly average can attribute emissions to electricity use, but it cannot by itself identify the generator that responds to additional demand.

## Sources

- [EEA — Greenhouse gas emission intensity of electricity generation](https://www.eea.europa.eu/en/analysis/indicators/greenhouse-gas-emission-intensity-of-1)

*From the July–November 2026 editorial archive.*
