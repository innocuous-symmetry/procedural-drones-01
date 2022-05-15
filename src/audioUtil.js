import { soundChord } from "../app.js";
import { getRandomPitches } from "./pitch_generation/getRandomPitches.js";
import { getProceduralPitches } from "./pitch_generation/getProceduralPitches.js";
import { extractPitchset } from "./data_conversions/extractPitchset.js";

// initial test: generate a single, random chord
export const fullRandomChord = () => {
    let pitches = getRandomPitches();
    soundChord(pitches);
    let pitchset = extractPitchset(pitches);

    return pitchset;
}

export const evaluatedChord = (prevPitches = ["C3", "G3", "C4", "G4"]) => {
    let pitches = getProceduralPitches(prevPitches);
    if (pitches) soundChord(pitches);
    let pitchset = extractPitchset(pitches);

    return pitchset;
}