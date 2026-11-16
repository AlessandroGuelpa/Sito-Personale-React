You can build an echo in Web Audio by delaying a signal and sending some of the delayed output back to the delay’s input. A `DelayNode` sets the spacing between repeats. A `GainNode` determines how much of each repeat cycles back through the graph.

A delay produces distinct repetitions. A [convolution reverb](/blog/web-audio-convolver-riverbero) can reproduce a room’s longer response to a short sound. Decide which kind of tail you want to hear before building the graph.

~~~javascript
const delay = ctx.createDelay();
delay.delayTime.value = 0.3;       // 300 ms between repeats

const feedback = ctx.createGain();
feedback.gain.value = 0.4;         // fraction sent back into the delay

source.connect(delay);
delay.connect(feedback);
feedback.connect(delay);
delay.connect(ctx.destination);   // delayed signal
source.connect(ctx.destination);  // direct signal
~~~

## Set the level of each repeat

In the simple graph above, a feedback gain of 0.4 sends 40% of the delayed signal back into the node. Each pass is quieter. At unity gain the repeats can persist, and a higher gain can make the level grow. Filters and other effects in the loop can change how the signal behaves, so check the actual output of the complete graph.

Keep a separate path for the direct signal and put volume control on the final bus. This gives you control of the mix and reduces the chance of summing the delayed output twice.

## Check automation and preset changes

Try the graph with a short sound and listen to how each repeat decays over several seconds. Time a repeat to the beat to hear how it changes the groove. Abrupt changes in delay time can cause pitch shifts or other artefacts, so test the movement you plan to automate.

In a [generative Web Audio patch](/blog/web-audio-generative-browser), several tails can overlap. Test the maximum number of layers you expect. Stop playback and switch presets as separate checks. Confirm that old feedback paths are disconnected when they no longer belong to the current sound.

## Source

- [MDN DelayNode reference](https://developer.mozilla.org/en-US/docs/Web/API/DelayNode)
