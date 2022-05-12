import { extractPitchset } from "./vector_logic/extractPitchset.js";

export const sopranoTones = ["B5", "A5", "G5", "F#5", "F5", "E5", "D5", "C5", "B4", "Bb4", "A4", "G4", "F#4", "F4", "E4"];
export const altoTones = ["E5", "D5", "C5", "B4", "Bb4", "A4", "G4", "F#4", "F4", "E4", "D4", "C4", "B3", "Bb3", "A3", "G3"];
export const tenorTones = ["G4", "F#4", "F4", "E4", "D4", "C4", "B3", "Bb3", "A3", "G3", "F3", "E3", "D3", "C3"];
export const bassTones = ["C2", "D2", "E2", "F2", "G2", "A2", "Bb2", "B2", "C3", "D3", "E3", "F3", "G3"];

export const pitchsets = [sopranoTones, altoTones, tenorTones, bassTones];

export const musicalPitches = ['A', "Bb", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

// interval definitions:
export const intervalNames = {
    0: "unison",
    1: "minor second",
    2: "major second",
    3: "minor third",
    4: "major third",
    5: "perfect fourth",
    6: "tritone"
    // all intervals beyond this invert to one of the previous intervals
}

// helper functions
const transposePitches = (pitchNames, interval) => {
    let transposed = [];
    pitchNames.forEach(pitch => transposed.push((pitch + interval) % 12));
    return transposed;
}

export const getRandomPitches = () => {
    // pitches stored in Tone.js string format
    let pitches = [];
    for (let voice of pitchsets) {
        // finds a random index, excluding any which may already exist in the array
        let index;
        
        do {
            index = Math.floor(Math.random() * 100) % voice.length;
        } while (pitches.includes(voice[index]));

        pitches.push(voice[index]);
    }

    return pitches;
}
