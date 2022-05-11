import { soundChord } from '../app.js';
import { getRandomPitches } from "./harmonyUtil.js";

import { evaluateVector, rejectDissonance } from "./vector_logic/evaluateVector.js";
import { findVector } from "./vector_logic/findVector.js";
import { extractPitchset } from "./vector_logic/extractPitchset.js";

export const fullRandomChord = () => {
    let pitches: string[] = getRandomPitches();
    soundChord(pitches);

    let pitchValues: number[] = extractPitchset(pitches);
    pitchValues = findVector(pitchValues);

    let evaluated = evaluateVector(pitchValues);
    return evaluated;
}

export const evaluatedChord = () => {
    let pitches: string[] = getRandomPitches();
    let pitchNums: number[] = extractPitchset(pitches);
    let firstVector = findVector(pitchNums);
    let finalVector = rejectDissonance(firstVector);

    if (finalVector !== firstVector) console.log('caught');

    soundChord(pitches);
}