Playing a sample through Web Audio usually starts with fetching a file and decoding it into an `AudioBuffer`. Keep the decoded buffer and create a new `AudioBufferSourceNode` for each playback. A [browser drum machine](/blog/web-audio-drum-machine-browser) may reuse one buffer for many hits. Its [step sequencer](/blog/web-audio-sequencer-step) can choose when to create and schedule each source.

```javascript
const response = await fetch("/samples/break.wav");
if (!response.ok) throw new Error(`Sample download failed: ${response.status}`);
const buffer = await ctx.decodeAudioData(await response.arrayBuffer());

function playSample(rate = 1, when = ctx.currentTime) {
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.playbackRate.value = rate;
  source.loop = true;
  source.connect(ctx.destination);
  source.start(when);
  return source;
}
```

Start playback only when the context can run following a user action. Keep the source returned by this example if you need to call `stop()` on the loop. A source can start once. A second playback uses another node with the same buffer. For a one-shot hit, leave `loop` disabled so playback ends with the sample.

## Decide which sounds should load first

Decoded audio uses memory even when the source file is small and compressed. With many long samples, separate the sounds needed immediately from the ones used later. Concurrent triggers can reuse the same decoded sound without downloading or decoding it for every hit. Check HTTP status and handle a decode failure or a missing file so the interface can explain why playback is unavailable.

## Listen to what the rate changes

A rate of two plays the material twice as fast and raises its pitch an octave. For a one-shot sample it also reduces playback duration. The `detune` parameter can make smaller pitch adjustments, and a dedicated time-stretch algorithm is needed to change duration independently of pitch. Try a normal start, a delayed start and a stopped loop. Also test leaving the page before a fetch or decode finishes so an obsolete result does not restart playback.

## Sources

- [MDN — AudioBufferSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode)
