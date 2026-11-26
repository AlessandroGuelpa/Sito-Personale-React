Chrome Music Lab brings musical ideas into browser experiments. The controls make concepts such as frequency, waveform and rhythm easier to hear and see. A developer can study these examples before designing a playable interface with Web Audio.

The guide to [oscillator waveforms](/blog/web-audio-oscillatore-forme-onda) explains some of the sound behind an experiment. [Generative browser audio](/blog/web-audio-generative-browser) extends the idea to patterns driven by a small set of rules.

## Show the effect of each musical action

In Spectrogram, changes in frequency content become visible over time. Oscillators links a gesture to a change you can hear. Sound Waves uses a visual model for vibration. Song Maker offers a grid with only a few rules, so you can create a phrase and immediately hear where the notes fall. Notice how each experiment gives the user a short path from action to result.

## Separate the score from the display

Start with four beats represented as data. Let each marked cell trigger a sound and use a playhead to show the position. The audio clock can schedule the sound while the browser draws the playhead on frames it has available. If the interface skips a frame, that separation helps the beat stay on time.

## Give the instrument clear controls

Provide an explicit play and stop action that also works from the keyboard. Use visible labels and checked or pressed states so colour is only one clue. If an animation helps show the rhythm, make sure the instrument can work with movement reduced. Test the first interaction on a mobile browser, where touch input and audio activation can behave differently. A small playable example makes these details easier to observe before the interface grows.

After the visual exercise, the guide to [teaching music with Sonic Pi](/blog/sonic-pi-didattica-codice-e-musica) offers a route into patterns written in code.

## Sources

- [Chrome Music Lab — Experiments](https://musiclab.chromeexperiments.com/)
