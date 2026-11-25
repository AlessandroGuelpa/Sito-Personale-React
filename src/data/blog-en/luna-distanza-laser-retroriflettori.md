An observatory sends a laser pulse towards the Moon. About two and a half seconds later, the telescope may collect only a few returning photons. By timing the trip, astronomers can calculate a distance. The result depends on two things: picking out the signal from the noise and knowing how much delay the instrument introduces.

## What sends the light back to Earth

Apollo 11, 14 and 15 left arrays of retroreflectors on the Moon. Each uses three perpendicular surfaces, like the inside corner of a box. Within its acceptance angle, the beam travels back in the direction it came from even if it strikes the device at a slight angle. An ordinary flat mirror would need much more precise alignment. The retroreflector is passive and can be observed even when the rest of the equipment is switched off.

For [Earth–Moon communications, distance determines the signal travel time](/blog/luna-latenza-comunicazioni). Lunar laser ranging works the other way round. The observatory measures the time and uses it to estimate the distance from the telescope to the retroreflector.

## How much difference a nanosecond makes

Take a hypothetical round-trip time of 2.56 seconds. Using the speed of light in a vacuum, about 299,792 km/s, and assuming both legs are the same length, the one-way distance is 299,792 × 2.56 ÷ 2, or about 383,734 km.

With the same formula, one nanosecond of delay in the electronics introduces about 15 centimetres of error in the distance. A real measurement requires calibrating that delay, accounting for the light passing through the atmosphere and allowing for the motion of the station and the target during the trip. The geometry to reconstruct starts at a specific station on Earth and ends at a specific point on the lunar surface.

## How to pick out such a weak return

The Apache Point observatory activates its detector in a short window around the predicted arrival time. This reduces the number of background photons it records. A single detection within the window can still be noise. When the observatory sends repeated pulses, lunar returns cluster around a delay consistent with the model. The researchers calibrate the timing and combine the detections into summary observations called *normal points*.

The technique has continued beyond Apollo. In 2025, the Blue Ghost lander carried the next-generation NGLR-1 retroreflector to the Moon through NASA’s Commercial Lunar Payload Services programme. When I read a precision figure in millimetres, the first thing I would check is which observation it describes. A timestamp from a single photon and an observation made by combining several returns after calibration have different uncertainties.

## Sources

- [International Laser Ranging Service — lunar laser ranging and retroreflectors](https://ilrs.cddis.eosdis.nasa.gov/science/scienceContributions/lunar.html)
- [NASA — NGLR-1 and the CLPS programme](https://www.nasa.gov/missions/artemis/nasa-anticipates-lunar-findings-from-next-generation-retroreflector/)
- [NASA Technical Reports Server — Apache Point data reduction and calibration](https://ntrs.nasa.gov/citations/20230015735)
- [UC San Diego — the APOLLO instrument and measurement model](https://physics.ucsd.edu/~tmurphy/apollo/0710.0890v2.pdf)
- [NIST — CODATA value for the speed of light in a vacuum](https://physics.nist.gov/cuu/Constants/Value/c.html)
