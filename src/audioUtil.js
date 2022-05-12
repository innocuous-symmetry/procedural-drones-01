import { soundChord } from "../app.js";
import { getRandomPitches } from "./vector_logic/getRandomPitches.js";
import { extractPitchset } from "./vector_logic/extractPitchset.js";
import { getProceduralPitches } from "./vector_logic/getProceduralPitches.js";

// initial test: generate a single, random chord
export const fullRandomChord = () => {
    let pitches = getRandomPitches();
    soundChord(pitches);
    let pitchset = extractPitchset(pitches);

    return pitchset;
}

export const evaluatedChord = (prevPitches = ["C3", "G3", "C4", "G4"]) => {
    let pitches = getProceduralPitches(prevPitches);
    soundChord(pitches);
    let pitchset = extractPitchset(pitches);

    return pitchset;
}