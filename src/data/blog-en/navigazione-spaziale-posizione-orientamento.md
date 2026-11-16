Imagine knowing where a camera is in a room and having no idea which way it points. Or imagine knowing what direction it points without knowing its distance from the subject. Spacecraft navigation has the same distinction. Position locates the vehicle in a frame of reference. Attitude describes how it is oriented.

The frame also matters when considering [equilibrium near a Lagrange point](/blog/punti-lagrange-equilibrio-instabile). For a spacecraft near the Moon, [mass and inertia](/blog/luna-massa-peso-inerzia) shape how the vehicle responds when the control system changes its orientation or motion.

## Use stars to determine orientation

A star tracker matches observed stars against a catalogue. The measured directions help estimate the vehicle's attitude. NASA describes star trackers alongside other Orion sensors. A match tells the navigation system which way the instrument is pointing. Position and velocity still need to be estimated from observations that constrain them.

## Combine measurements that answer different questions

Radio measurements through links with Earth contribute to estimates of distance or motion. Optical navigation can use images of Earth, the Moon or other objects together with the expected geometry and a model. Each observation has uncertainties and can be available only under certain conditions. The system combines observations over time and updates the estimate when fresh information arrives.

## Identify what the image actually observes

In a photograph, an object taking up more of the field of view can suggest that it is closer. Turning that apparent size into a distance requires a calibrated camera and knowledge of the object's shape or dimensions. That is a geometric example of why the interpretation depends on the model and on what is already known.

I ask the same question when reviewing software telemetry. A live connection says that two endpoints can communicate. Freshness still depends on which data arrived and when it was produced. Before adding a sensor or a dashboard, write down what you measure directly and which conclusions need a separate estimate.

## Sources

- [NASA — Orion avionics and software](https://www.nasa.gov/reference/avionics-and-software/)
- [NASA — Orion navigation instruments](https://www.nasa.gov/missions/lasers-stars-and-sensors-will-guide-nasas-orion-spacecraft/)

*From the July–November 2026 editorial archive.*
