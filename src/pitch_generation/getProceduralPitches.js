import { pitchsets, musicalPitches } from "../harmonyUtil.js";
import { extractPitchName } from "../vector_logic/extractPitchName.js";
import { getRandomIndex } from "./getRandomPitches.js";

// an additional method based on the structure of getRandomPitches,
// but taking some principles of music theory into account.
export const getProceduralPitches = (prevPitches) => {
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
