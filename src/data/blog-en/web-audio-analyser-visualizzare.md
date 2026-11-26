An `AnalyserNode` exposes data in the time and frequency domains. The time-domain samples show the shape of the digital signal, while frequency data shows how its energy is distributed across bands. Add it to the part of the audio graph you want to inspect. A typical visualiser can use this node directly. An [AudioWorklet](/blog/web-audio-audioworklet) is available for custom processing.

```javascript
const analyser = ctx.createAnalyser();
analyser.fftSize = 2048;
source.connect(analyser);
analyser.connect(ctx.destination);

const bins = new Uint8Array(analyser.frequencyBinCount);
let frame;

function draw() {
  analyser.getByteFrequencyData(bins);
  // Draw the current bins to a canvas.
  frame = requestAnimationFrame(draw);
}

draw();
// Call cancelAnimationFrame(frame) when stopping the visualiser.
```

The array holds one scaled value for each frequency bin. Low frequencies appear at the beginning. To draw a waveform, allocate a time-domain buffer of length `analyser.fftSize` and read it with `getByteTimeDomainData`. Keep separate buffers if the display allows switching between both views.

## Check with signals you can recognise

Try a sine wave at a known frequency and then a richer [oscillator waveform](/blog/web-audio-oscillatore-forme-onda) at the same pitch. The frequency display should show energy in different bins when harmonics are present. A larger FFT gives finer frequency spacing and uses a longer portion of the signal. Increase it only as much as the display needs. Move the analyser before and after a filter and compare which peaks disappear in the filtered version.

## Manage redraw and interpret the scale

Use animation frames while the view is active and stop the redraw loop when the view goes away. Adjust smoothing to balance a readable display against preserving fast changes. The analyser describes the signal where it is connected. Speaker settings, acoustics and distance also affect the sound pressure at a listener, so the display is useful for inspecting a mix rather than measuring acoustic exposure.

## Convert a bin index into a frequency

Read sampleRate from the context and divide it by fftSize to get the spacing between bins. At 48 kHz with a 2,048-point FFT the spacing is 23.4375 Hz, so bin 32 is centred on 750 Hz. At 44.1 kHz the same index corresponds to about 689 Hz. Build chart labels from the actual context settings.

To check the chart, connect a 750 Hz oscillator and observe the strongest bar with the 48 kHz setup. Some energy can appear in neighbouring bars too. Move the analyser after a [low-pass filter](/blog/web-audio-biquadfilter) and lower its cutoff well below 750 Hz. The same peak should fall. If the sound changes while the chart stays the same, trace the [audio node connections](/blog/web-audio-grafo-nodi-connect) and see which point you are measuring.

## Sources

- [MDN — AnalyserNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode)
