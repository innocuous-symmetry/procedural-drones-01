import { soundChord } from "../app.js";
import { getRandomPitches } from "./harmonyUtil.js";
import { extractPitchset } from "./vector_logic/extractPitchset.js";

// initial test: generate a single, random chord
export const fullRandomChord = () => {
    let pitches = getRandomPitches();
    soundChord(pitches);
    let pitchset = extractPitchset(pitches);

    return pitchset;
}

export const evaluatedChord = () => {
    return fullRandomChord();
}