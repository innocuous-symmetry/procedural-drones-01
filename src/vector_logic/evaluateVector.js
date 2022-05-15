import { getRandomPitches } from '../pitch_generation/getRandomPitches.js';
import { extractPitchset } from "../dataConversions.js";
import { findVector } from "./findVector.js";

export const evaluateVector = (vector) => {
    return ((vector.includes(1) || vector.includes(6)));
}

export const rejectDissonance = (pitchset) => {
    const vector = findVector(pitchset);

    // returns the pitchset and its vector if evaluateVector returns true,
    if (evaluateVector(vector)) return vector;

    // and recursively calls the function otherwise.
    if (!evaluateVector(vector)) {
        let newPitches = getRandomPitches();
        let newPitchset = extractPitchset(newPitches);
        rejectDissonance(newPitchset);
    };
}