After writing about Sonic Pi, Ruby, Rails, JavaScript and Web Audio, I keep coming back to the same idea. A few lines of code can describe a sound and when to play it. Sonic Pi and Web Audio share that idea and give the programmer different controls.

In [a first Sonic Pi sketch](/blog/sonic-pi-primo-suono-play-sleep), `play` and `sleep` let you work directly with notes and beats. An [AudioContext and oscillator](/blog/web-audio-primo-oscillatore-audiocontext) offer building blocks for making those decisions inside a browser.

## Play the same pitch in each environment

```ruby
use_synth :saw
play :e3, cutoff: 90, release: 0.3, amp: 0.4
```

```javascript
// With a running AudioContext and a gain connected to the output
const osc = ctx.createOscillator();
osc.type = "sawtooth";
osc.frequency.value = 164.81; // E3
osc.connect(outputGain);
osc.start();
osc.stop(ctx.currentTime + 0.3);
```

The two examples share a pitch and a sawtooth source. Sonic Pi also applies the synth's filter and release. To match those parts in Web Audio, connect a filter and automate gain over the life of the note. When comparing duration, remember that Sonic Pi's envelope follows its tempo while Web Audio schedules in seconds. The comparison shows where the environment gives you a musical shortcut and where the application needs to define the graph itself.

## Choose where people will play it

For a live set, Sonic Pi gives me a way to edit loops as the performance runs. For a synthesiser embedded in a React page, Web Audio gives the application control over the browser's nodes and interaction model. A Sonic Pi script runs in its own environment. A web instrument needs to handle browser support and audio starting after user interaction.

I explored this way of making music as DJ_QBIT, now VEHRT. Ideas about frequency, envelopes, repetition and controlled variation carry across both environments. A sketch in one can suggest what to build in the other.

## Sources

- [Sonic Pi — Tutorial](https://sonic-pi.net/tutorial.html)
