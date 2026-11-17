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

## Sources

- [MDN — AnalyserNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode)
