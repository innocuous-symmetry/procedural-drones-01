import { pitchsets } from "../harmonyUtil.js";
import { extractPitchName } from "./extractPitchName.js";

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
            index = Math.floor(Math.random() * 100) % voice.length;
            formattedPitch = extractPitchName(voice[index]);

            // this initial condition will apply only to the bass voice,
            if (!pitches.length) {
                pitches.push(voice[index]);
            } else {
                // now we need some repeating logic for the remaining four voices
                while (pitches.length !== (pitchsets.indexOf(voice) + 1)) {
                    pitches.push(pitchsets.indexOf(voice));
                }
            }
        }
    }

    console.log(pitches);
    return pitches;
}
