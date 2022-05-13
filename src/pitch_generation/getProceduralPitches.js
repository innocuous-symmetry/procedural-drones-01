import { pitchsets, musicalPitches } from "../harmonyUtil.js";
import { extractPitchName } from "../vector_logic/extractPitchName.js";
import { getRandomIndex } from "./getRandomPitches.js";

// iterator to prevent stack overflow
let callCount = 0;

export const getProceduralPitches = () => {
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
    
    // console.log(pitches);
    // console.log(pitchNames);
    // console.log(pitchNums);

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
        return newPitches;
    // otherwise, the original value itself is returned
    } else {
        console.log(`call count: ${callCount}`);
        callCount = 0;
        console.log(pitches);
        return pitches;
    }
}

// an additional method based on the structure of getRandomPitches,
// but taking some principles of music theory into account.
export const old_getProceduralPitches = (prevPitches) => {
    // prevPitches is passed in to ensure there is no linear dissonance within voices
    let pitches = [];
    let formattedPitches = [];
    
    for (let voice of pitchsets) {
        let index;
        let formattedPitch;
        
        while (pitches.length <= pitchsets.indexOf(voice)) {
            // the first section of this while loop is more free.
            index = getRandomIndex(voice);
            formattedPitch = extractPitchName(voice[index]);

            // this initial condition will apply only to the bass voice,
            if (!pitches.length) {
                pitches.push(voice[index]);
            } else {
                // now we need some repeating logic for the remaining four voices
                while (pitches.length !== (pitchsets.indexOf(voice) + 1)) {
                    index = getRandomIndex(voice);
                    pitches.push(voice[index]);

                    
                    for (let i = 0; i < pitches.length; i++) {
                        let numVals = [];

                        for (let j = i; j < i + 2; j++) {
                            console.log(pitches[j]);
                            let extracted = extractPitchName(pitches[j]);
                            numVals.push(musicalPitches.indexOf(extracted) + 1);
                        }

                        let difference = Math.abs(numVals.reduce((x,y) => x - y));
                        if (difference === 1 || difference === 6) {
                            pitches.pop();
                        } else {
                            continue;
                        }
                    }
                }
            }
        }
    }

    console.log(pitches);
    return pitches;
}
