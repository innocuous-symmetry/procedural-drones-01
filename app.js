import { pitchsets } from "./src/harmonyUtil.js";
import { extractPitchset } from "./src/vector_logic/extractPitchset.js";

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

// initial test: generate a single, random chord
export const fullRandomChord = () => {
    let pitches = [];
    for (let voice of pitchsets) {
        // finds a random index, excluding any which may already exist in the array
        let index;
        
        do {
            index = Math.floor(Math.random() * 100) % voice.length;
        } while (pitches.includes(voice[index]));

        pitches.push(voice[index]);
        console.log(voice[index]);
    }

    for (let i = 0; i < pitches.length; i++) {
        if (pitches[i] === pitches[i+1]) {
            console.log("CAUGHT");
        }
    }

    soundChord(pitches);
    extractPitchset(pitches);
}

// set up transport
const transportStart = document.getElementById('transport-start');

const loop = new Tone.Loop((time) => {
    audioTest();
}, "8n").start(0);

loop.probability = 0.8;
    
transportStart.onclick = () => {
    Tone.Transport.start();
}