// initialize four synth voices
const soprano = new Tone.Synth().toDestination();
const alto = new Tone.Synth().toDestination();
const tenor = new Tone.Synth().toDestination();
const bass = new Tone.Synth().toDestination();

// test function for audio is armed
export const audioTest = () => {
    soprano.triggerAttackRelease("C5", "16n");
    alto.triggerAttackRelease("F4", "16n");
    tenor.triggerAttackRelease("E4", "16n");
    bass.triggerAttackRelease("G3", "16n");
}

// allows a chord to be generated with input from another function
// pitchNames: array of strings
export const soundChord = (pitchNames) => {
    const [s,a,t,b] = pitchNames;
    soprano.triggerAttackRelease(s, "8n");
    alto.triggerAttackRelease(a, "8n");
    tenor.triggerAttackRelease(t, "8n");
    bass.triggerAttackRelease(b, "8n");
}

// set up transport
const transportStart = document.getElementById('transport-start');

const loop = new Tone.Loop((time) => {
    audioTest();
}, "8n").start(0);

loop.probability = 0.8;
    
transportStart.onclick = () => {
    // @ts-expect-error
    Tone.Transport.start();
}
