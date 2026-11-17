An AudioWorklet runs custom Web Audio processing in the audio rendering thread. It is useful when you need an algorithm the built-in nodes do not provide. For example, a [biquad filter](/blog/web-audio-biquadfilter) already covers common frequency shaping, and an [AnalyserNode](/blog/web-audio-analyser-visualizzare) can read a spectrum or waveform without a custom processor.

## Register a small processor

```javascript
// noise-processor.js
class NoiseProcessor extends AudioWorkletProcessor {
  process(inputs, outputs) {
    for (const channel of outputs[0]) {
      for (let i = 0; i < channel.length; i++) {
        channel[i] = (Math.random() * 2 - 1) * 0.05;
      }
    }
    return true;
  }
}

registerProcessor("noise", NoiseProcessor);
```

```javascript
// With an existing context started from a user action
await ctx.audioWorklet.addModule("noise-processor.js");
const noise = new AudioWorkletNode(ctx, "noise", { numberOfInputs: 0 });
noise.connect(ctx.destination);
```

The generator fills each output channel with low-level noise, one sample at a time. The main thread loads the registered module and attaches a node for it to the graph. Disconnect the test node when you finish. A running processor needs its own stop policy if you intend to reconnect or recreate it repeatedly. Check support and serving context before relying on the worklet, since loading can fail even if the rest of the audio graph is available.

## Work within the rendering deadline

Moving off the main thread gives the work a separate place to run. Every block still has to be ready on time. Keep the processing loop bounded and avoid work such as frequent allocations, blocking calls or unnecessary messages. Use the length of each provided channel when iterating over samples. A processor that misses its deadline can still produce audible dropouts.

## Choose how controls reach the processor

Keep user interface work on the main thread. Use a message port for changes that suit discrete messages, and choose appropriate audio parameters when values need precisely timed automation. Start with a minimal effect and compare its output with a known signal or standard node. Test disposal as well as sound, particularly when a page can create and remove the processor more than once.

## Sources

- [MDN — AudioWorklet](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet)
