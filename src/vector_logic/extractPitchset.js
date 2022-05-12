import { musicalPitches } from '../harmonyUtil.js';
import { extractPitchName } from './extractPitchName.js';

// converts pitches in Tone.js string format to base-12 number pitchsets
export const extractPitchset = (pitches) => {
    // 1) determine pitch set from given array of pitches
    let pitchset = [];

    for (let each of pitches) {
        // filters numbers from above tones
        const str = each;
        const withoutNums = extractPitchName(str);
        const pitchNumber = musicalPitches.indexOf(withoutNums);

        // ... so that they may be mapped onto numbers corresponding to the chromatic scale
        pitchset.push(pitchNumber);
    }

    // these are sorted from lowest to highest index (something like an interval vector)
    pitchset.sort((a,b) => a < b);
    return pitchset;
}