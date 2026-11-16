A wheel in a video can appear to stop or spin backwards. The camera records a sequence of discrete images, so you only see each recorded position. Different motions can pass through those same positions between frames. The ambiguity is a visible example of aliasing.

[Measurement uncertainty](/blog/misure-incertezza-cifre-decimali) describes another limit on what an observation supports. The article on [displaying spectra with Web Audio](/blog/web-audio-analyser-visualizzare) shows what it looks like to examine a sampled signal in the frequency domain.

## Different frequencies can produce the same samples

At a fixed sampling rate, more than one sine wave can pass through the same recorded points. Without assumptions about the original signal, the samples cannot tell you which one produced them. The sampling theorem states that an ideally band-limited signal can be reconstructed from uniform samples taken at more than twice its highest frequency, under the theorem's ideal conditions. The bandwidth and sampling assumptions are part of what makes reconstruction possible.

## Filter before collecting the samples

Real signals can contain energy outside the frequency range you want to measure. An anti-alias filter attenuates those components before sampling. Otherwise they can fold into the range you care about. Once different frequencies have produced the same recorded points, filtering the stored samples cannot generally recover their separate origins. Choose the acquisition rate with the actual signal and filter response in mind as well as the range you want to display.

## Check what an observation can miss

Imagine monitoring a process with brief CPU bursts and regular pauses. A sparse sample may repeatedly land in the pauses and suggest little load. The dashboard example shares the broader observation problem. I would look for the measurement interval, any aggregation and the filters before using a smooth line as evidence that the process never spikes.

## Sources

- [MIT — Sampling lecture](https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/resources/lecture-16-sampling/)
- [MIT — Sampling, reconstruction and aliasing](https://visionbook.mit.edu/sampling_and_aliasing.html)

*From the July–November 2026 editorial archive.*
