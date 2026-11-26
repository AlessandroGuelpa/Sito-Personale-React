A delayed reply on a video call often makes us think of the network. Between Earth and the Moon, some waiting remains even with ideal equipment. A radio signal has to cross the intervening distance. The delay sets a floor for how quickly someone on Earth can send a command and hear back.

The [Deep Space Network](/blog/deep-space-network-collegamento) illustrates how ground infrastructure makes the link possible. [Spacecraft navigation](/blog/navigazione-spaziale-posizione-orientamento) also has to account for when observations are available and which decisions can be made locally.

## Count both legs of a reply

At the average Earth–Moon distance, light takes about 1.3 seconds to travel one way. The distance varies, so this is an approximation. A question followed immediately by a reply needs about 2.6 seconds of propagation alone. Real systems also have processing and transmission delays, contact schedules and periods when antennas cannot see each other.

## Give bandwidth its own job

Imagine transferring a photograph. A higher bit rate reduces the time required to put all the bits onto the link. The first bit still takes the same time to cross the distance at the same speed. Bandwidth tells you how much data can move over time. Propagation delay tells you how soon any part of it can arrive.

## Design around the gap

In a hypothetical remote system, I would use commands that group related work and give the remote side clear procedures for expected events. I would attach timestamps to status updates so operators can see how old the displayed state is. An interface that waits for a confirmation from Earth after each small action would spend much of its time idle. The expected delay helps decide which operations can continue locally and what information people need while a reply is on its way.

[Lunar laser ranging](/blog/luna-distanza-laser-retroriflettori) applies the calculation in reverse, using measured travel time to infer distance.

## Sources

- [ESA — Communication beyond low Earth orbit](https://nebula.esa.int/4000136202)
- [NASA — Light travel time](https://science.nasa.gov/mission/webb/science-overview/science-explainers/how-does-webb-see-back-in-time/)

*From the July–November 2026 editorial archive.*
