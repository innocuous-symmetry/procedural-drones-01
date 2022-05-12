import { pitchsets } from "../harmonyUtil.js";
import { extractPitchName } from "./extractPitchName.js";

export const getRandomPitches = () => {
    // pitches stored in Tone.js string format
    let pitches = [];
    let formattedPitches = [];
    
    for (let voice of pitchsets) {
        // finds a random index, excluding any which may already exist in the array
        let index;
        let formattedPitch;

        // loops until four distinct chord members are received
        while (formattedPitches.length <= pitchsets.indexOf(voice)) {
            index = Math.floor(Math.random() * 100) % voice.length;

            formattedPitch = extractPitchName(voice[index]);
            if (!formattedPitches.includes(formattedPitch)) {
                formattedPitches.push(formattedPitch);
                pitches.push(voice[index]);
            }
        }
    }

    console.log(formattedPitches);
    console.log(pitches);
    return pitches;
}
