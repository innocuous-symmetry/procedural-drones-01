import { pitchsets, musicalPitches } from "../harmonyUtil.js";
import { extractPitchName, getRandomIndex } from "../dataConversions.js";
import { melodicGeneration } from './melodicGeneration.js';
import { sonorityList } from "./sonorityList.js";

// variables to handle recursive logic
let callCount = 0;

export const getProceduralPitches = () => {
    let result;
    callCount++;

    if (callCount >= 10) {
        return ["E3", "C4", "D4", "G4"];
    }

    const bass = pitchsets[0];
    let bassNote = bass[getRandomIndex(bass)];

    // initialize pitches to an array holding only a bass note
    let pitches = [bassNote];

    for (let i = 1; i < 4; i++) {
        let voice = pitchsets[i];
        let idx = getRandomIndex(voice);
        let pitch = voice[idx];
        pitches.push(pitch);
    }

    let pitchNames = pitches.map(x => extractPitchName(x));
    let pitchNums = pitchNames.map(x => musicalPitches.indexOf(x));

    // this value is assigned true only if the loop below finds an interval value
    // which corresponds to a dissonance, 1 or 6
    let isDissonant = false;

    for (let i = 0; i < pitchNums.length; i++) {
        for (let j = i; j < pitchNums.length; j++) {
            let interval = Math.abs(pitchNums[i] - pitchNums[j]);
            if (interval > 6) {
                interval = 12 - interval;
            }

            let intervalIsDissonant = ((interval === 1) || (interval === 6));
            
            if (!intervalIsDissonant) {
                continue;
            } else {
                isDissonant = true;
            }
        }
    }
    
    // if a dissonance is found, the function is called recursively, and its value returned
    if (isDissonant) {
        let newPitches = getProceduralPitches();
        result = newPitches;
    // otherwise, the original value itself is returned
    } else {
        console.log(`call count: ${callCount}`);
        callCount = 0;

        let newValue = melodicGeneration(pitches);
        sonorityList(pitches, newValue);
        
        result = newValue;
    }

    if (result) return result;
}
