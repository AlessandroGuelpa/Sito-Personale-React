A Web Audio graph works much like a guitar pedalboard. Sources generate sound, processing nodes change it, and a destination plays the result. The connections determine the order in which each processor receives the signal. A [GainNode](/blog/web-audio-gainnode-volume-envelope) controls its level, while a [BiquadFilterNode](/blog/web-audio-biquadfilter) changes the balance of frequencies.

```javascript
// Source → filter → gain → output
osc.connect(filter);
filter.connect(gain);
gain.connect(ctx.destination);
```

## Follow the path from source to output

In this chain the filter receives the oscillator's signal first. The gain receives the filtered signal and scales it before sending it to the output. You can build this chain once and automate its parameters without rebuilding the graph for every note.

One output can feed several inputs, which splits the signal between paths. Several outputs can also feed one input, which mixes them. Draw the connections if the order becomes hard to follow, especially when nodes are reused between instruments.

## Balance a parallel effect

A reverb or delay often needs two branches. One carries the dry signal from the source, and one carries the processed or wet signal. Give each a level control before mixing them. If both branches send the full signal to the destination, adding the effect can raise the total level and make it hard to judge what the processor is doing.

## Check how the graph changes over time

Mute the dry and wet branches one at a time and confirm that you hear the expected signal. When replacing an effect at runtime, disconnect the branch being removed while keeping the connections other instruments still need. Change presets several times and compare the level before and after. If the same input becomes progressively louder, inspect whether new effect nodes or parallel routes are being added while the previous ones remain connected.

## Sources

- [MDN — AudioNode.connect](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/connect)
