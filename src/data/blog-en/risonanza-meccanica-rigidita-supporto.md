A small mechanical assembly vibrates on its support. You add a brace and, with the machine stopped, the structure deflects less when you push it. During operation, though, the motion increases over a certain speed range. The brace has also changed the system’s natural frequency and may have moved it closer to one of the frequencies exciting it.

## Natural frequency depends on mass and stiffness

To understand the mechanism, imagine a mass moving in one direction, attached to a fixed base through a linear spring and a viscous damper. The spring represents the support’s equivalent stiffness. The damper dissipates energy through a force proportional to velocity.

The undamped natural frequency is **fₙ = √(k/m) ÷ (2π)**, with mass m in kg and stiffness k in N/m. For a fixed mass, increasing stiffness raises this frequency. With light damping, a periodic force close to the natural frequency can produce a strongly amplified response.

## A brace that moves the system closer to resonance

Take a hypothetical example with a **10 kg** mass, a damping coefficient c of **8 N·s/m** and a sinusoidal force with an amplitude of **1 N at 5 Hz**. The brace increases stiffness from 4,000 to 9,000 N/m. Keep mass, damping and force unchanged to isolate the effect of stiffness.

| Configuration | Natural frequency | Displacement under a constant 1 N force | Displacement amplitude at 5 Hz |
| --- | --- | --- | --- |
| k = 4,000 N/m | 3.18 Hz | 0.25 mm | 0.17 mm |
| k = 9,000 N/m | 4.77 Hz | 0.11 mm | 1.10 mm |

Under a constant force, the braced support deflects less. At 5 Hz, the amplitude increases by roughly six and a half times. The natural frequency has moved from 3.18 to 4.77 Hz, much closer to the excitation. The table gives peak amplitudes after the transient response has died away.

## Checking the calculation and its assumptions

For this linear model, the steady-state amplitude X follows the equation below, with ω = 2πf.

$$
X = \frac{F_0}{\sqrt{(k-m\omega^2)^2+(c\omega)^2}}
$$

Entering the values in SI units gives X in metres. The static displacement in the table is F₀/k. In a real machine, a brace can also change mass and damping, and the structure can have several vibration modes. Measurements are needed to check how well the model describes the observed motion.

The force can also vary with speed. For a rotating imbalance, its amplitude grows with the square of angular speed. Interpreting a test in which you vary shaft speed requires accounting for that effect as well.

## Comparing changes on the same test bench

In a bench test, I would record the amplitude and frequency of motion across the intended operating range, documenting the sensor position and mounting conditions. When acquiring a signal, [sampling choices and the risk of aliasing](/blog/campionamento-aliasing-segnali) affect which frequencies you can identify.

I would repeat the measurement after the modification, checking both whether the previous peak falls and whether other peaks appear. Vibration can also create [cyclic stresses that matter for metal fatigue](/blog/fatica-metalli-carichi-ciclici).

Before testing, I would set an acceptable displacement limit and identify the measurement points. The final comparison should cover startup and shutdown if they cross critical frequencies, as well as the usual operating speed.

## Sources

- [University of Alberta on spring-mass systems and natural frequency](https://engcourses-uofa.ca/books/vibrations-and-sound/forced-vibrations-of-undamped-single-degree-of-freedom-systems/9155-2/)
- [University of Alberta on damped harmonic response and rotating imbalance](https://engcourses-uofa.ca/books/vibrations-and-sound/forced-vibrations-of-damped-single-degree-of-freedom-systems/damped-spring-mass-system/)
- [MIT OpenCourseWare on vibration isolation and systems with multiple degrees of freedom](https://ocw.mit.edu/courses/2-003sc-engineering-dynamics-fall-2011/pages/reducing-problem-vibration-and-intro-to-multi-dof-vibration/)
