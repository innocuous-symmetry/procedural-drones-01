import { soundChord } from "../app.js";
import { getRandomPitches } from "./harmonyUtil.js";

// initial test: generate a single, random chord
export const fullRandomChord = () => {
    let pitches = getRandomPitches();

    soundChord(pitches);
    extractPitchset(pitches);
}