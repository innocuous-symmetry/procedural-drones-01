// initialize four synth voices
// @ts-expect-error: namespace, Tone, for all of the following "expect-error calls"
const soprano = new Tone.Synth().toDestination();
// @ts-expect-error
const alto = new Tone.Synth().toDestination();
// @ts-expect-error
const tenor = new Tone.Synth().toDestination();
// @ts-expect-error
const bass = new Tone.Synth().toDestination();

// test function for audio is armed
export const audioTest = () => {
    soprano.triggerAttackRelease("C5", "16n");
    alto.triggerAttackRelease("F4", "16n");
    tenor.triggerAttackRelease("E4", "16n");
    bass.triggerAttackRelease("G3", "16n");
}

// allows a chord to be generated with input from another function
export const soundChord = (pitches: string[]) => {
    const [s,a,t,b] = pitches;
    soprano.triggerAttackRelease(s, "8n");
    alto.triggerAttackRelease(a, "8n");
    tenor.triggerAttackRelease(t, "8n");
    bass.triggerAttackRelease(b, "8n");
}

// set up transport
const transportStart = document.getElementById('transport-start');

// @ts-expect-error
const loop = new Tone.Loop((time) => {
    audioTest();
}, "8n").start(0);

loop.probability = 0.8;
    
transportStart.onclick = () => {
    // @ts-expect-error
    Tone.Transport.start();
}
