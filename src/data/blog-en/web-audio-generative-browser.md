A music generator can vary its output within rules about pitch, rhythm and density. Start with a small selection of notes and an occasional rest. The [oscillator waveform](/blog/web-audio-oscillatore-forme-onda) defines the starting timbre. A library such as [Tone.js](/blog/web-audio-tone-js) can supply the musical transport when more parts need to share the grid.

## Put random choices on a steady grid

The example assumes a running audio context and an output gain connected to its destination. Use it after the user starts the player.

```javascript
function startPattern(ctx, output, random = Math.random) {
  const scale = [220, 261.63, 293.66, 329.63, 392];
  const step = 0.5;
  let time = ctx.currentTime + 0.05;

  const timer = setInterval(() => {
    const now = ctx.currentTime;
    if (time < now) time += Math.ceil((now - time) / step) * step;

    while (time < now + 0.1) {
      if (random() > 0.3) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = scale[Math.floor(random() * scale.length)];
        gain.gain.setValueAtTime(0.08, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 1.2);
        osc.connect(gain).connect(output);
        osc.start(time);
        osc.stop(time + 1.2);
      }
      time += step;
    }
  }, 25);

  return () => clearInterval(timer);
}
```

The five notes form A minor pentatonic across the selected register. The timer looks ahead on the audio clock. A rest still occupies a step, and missed steps are skipped if the timer runs late. Each note has a fixed end, so the number of overlapping voices is limited by the spacing. If you shorten the step or lengthen the release, check the maximum overlap again before raising the level. The returned function stops scheduling. Give the player control over its output gain as well if stop should silence previously scheduled notes immediately.

## Compare a variation you can reproduce

Change one rule, such as which register can play or how often to leave a rest. Record several cycles and listen for whether the character survives the changes. Pass a seeded random function when you need to compare the same choices across experiments. The example defaults to the browser's random generator, which does not give you a repeatable sequence. Add another layer only after checking density and output level with the first one alone.

## Sources

- [MDN — Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
