import { soundChord } from '../app.js';
import { pitchsets } from "./harmonyUtil.js";

import { evaluateVector } from "./vector_logic/evaluateVector.js";
import { findVector } from "./vector_logic/findVector.js";
import { extractPitchset } from "./vector_logic/extractPitchset.js";

export const fullRandomChord = () => {
    let pitches: string[];
    for (let voice of pitchsets) {
        // finds a random index, excluding any which may already exist in the array
        let index: number;
        
        do {
            if (!pitches) pitches = [];
            index = Math.floor(Math.random() * 100) % voice.length;
        } while (pitches.includes(voice[index]) ?? false);

        pitches ? pitches.push(voice[index]) : pitches = [voice[index]];
        console.log(voice[index]);
    }

    for (let i = 0; i < pitches.length; i++) {
        if (pitches[i] === pitches[i+1]) {
            console.log("CAUGHT");
        }
    }

    soundChord(pitches);
    let pitchValues: number[] = extractPitchset(pitches);
    pitchValues = findVector(pitchValues);

    let evaluated = evaluateVector(pitchValues);

    console.log(pitches);
    console.log(evaluated);
    return evaluated;
}