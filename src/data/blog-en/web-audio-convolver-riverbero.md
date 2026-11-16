A `ConvolverNode` applies an impulse response to a signal. An impulse response is an audio recording or model of how a space responds to a brief sound. Convolving it with your signal can reproduce the character of that room, hall or other environment.

Compare the result with a [feedback delay in Web Audio](/blog/web-audio-delay-feedback). A delay sends discrete repeats travelling through a loop. Convolution reverb gives the sound the pattern of reflections and decay represented by the impulse response.

~~~javascript
const convolver = ctx.createConvolver();

const response = await fetch("/ir/hall.wav");
if (!response.ok) throw new Error("Impulse response could not be loaded");
const buffer = await response.arrayBuffer();
convolver.buffer = await ctx.decodeAudioData(buffer);

osc.connect(convolver);
convolver.connect(ctx.destination);
~~~

## Load the impulse response and control the mix

The convolver needs a valid `AudioBuffer`. For a controlled test, use an impulse response you know can be decoded, and route the original signal and the processed signal through separate gains. Adjust the dry and wet levels while listening to short notes. A long tail can give a useful sense of space and can also blur a quick pattern when the wet signal is too prominent.

An impulse response measured in a room carries the reflections of that particular recording. An algorithmic reverb generates a tail with its own model. To compare them, use the same short input and similar output levels, then listen to the time between the direct sound, the first reflections and the end of the tail.

## Prepare for a slow load or a missing asset

Long impulse responses can use more memory and processing. Test on the devices you expect people to use and show a sensible loading state while the sample downloads. If loading or decoding fails, make the failure visible and keep the dry path available. Before releasing the application, verify that you have the rights to distribute the chosen sample and decide when the browser should download it.

## Source

- [MDN ConvolverNode reference](https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode)
