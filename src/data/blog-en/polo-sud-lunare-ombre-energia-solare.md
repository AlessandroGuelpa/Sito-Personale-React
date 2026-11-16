Imagine two sites near the lunar south pole that both receive sunlight for 80% of the time. At the first site, the Sun disappears for eight consecutive hours. At the second, those eight hours are split into four short periods. A solar-powered instrument needs different amounts of energy in reserve when it enters shadow at the two sites.

## Why a few metres can change the light

Near the south pole, the Sun stays low over the horizon and the terrain casts long shadows. A ridge can receive sunlight for long periods while the floor of a nearby crater stays in permanent shadow. That is one reason some craters can [preserve lunar ice](/blog/ghiaccio-lunare-risorsa-utilizzabile).

For Artemis surface planning, NASA can simulate illumination using topography measured by the LOLA laser altimeter on the Lunar Reconnaissance Orbiter. Some NASA models of polar sites evaluate light at several heights above the ground. A panel’s position therefore includes its height. Structures built on the site can also cast new shadows onto nearby panels.

## Equal hours of sunlight, different batteries

Consider two hypothetical sites observed over 40 hours. Each gets 32 hours of light and must keep an instrument running at 250 W. Assume the solar panels produce zero power in shadow.

- **Site A.** Eight consecutive hours of shadow require 250 W × 8 h, or **2 kWh** delivered to the instrument.
- **Site B.** Four shadows of two hours each require **0.5 kWh per interval**. If the battery fully recovers that energy between shadows, it only has to cover two hours at a time.

The instrument uses 2 kWh in darkness at both sites. The useful amount stored between recharges differs. The distinction between [power in kW and energy in kWh](/blog/kw-kwh-potenza-energia) helps explain the battery requirements. It needs to support the load in shadow and hold enough energy until the next recharge.

## Work out what the panels can restore

Suppose the panels have 500 W available to charge the battery after powering the instrument. In this idealised case, recovering 0.5 kWh takes an hour. Half an hour of sunlight restores 0.25 kWh. To get through two shadows of two hours separated by that half hour, the battery needs 0.75 kWh available at the start of the first shadow.

To compare two positions, I would estimate generation at panel height, define a load profile and use a time step short enough to capture the recharge windows. I would then follow the battery’s state of charge through light and darkness, allowing for conversion losses, usable capacity in the cold and any power drawn by heaters. The figure I would look for is the minimum charge reached during the planned operation.

## Sources

- [NASA on the lunar south pole environment](https://www.nasa.gov/reference/moonbase-environment/)
- [NASA Scientific Visualization Studio on south pole illumination](https://svs.gsfc.nasa.gov/4930/)
- [NASA Goddard models of illumination at different heights](https://pgda.gsfc.nasa.gov/products/78)
