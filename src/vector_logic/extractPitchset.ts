import { musicalPitches } from "../harmonyUtil.js";

export const extractPitchset = (pitches: string[]) => {
    // 1) determine pitch set from given array of pitches
    let pitchset: number[] = [];

    for (let each of pitches) {
        // filters numbers from above tones
        const str = each;
        const regex = /[0-9]/g;
        const withoutNums = str.replace(regex, '');
        const pitchNumber = musicalPitches.indexOf(withoutNums);

        // ... so that they may be mapped onto numbers corresponding to the chromatic scale
        pitchset.push(pitchNumber);
    }

    // these are sorted from lowest to highest index (something like an interval vector)
    pitchset.sort((a,b) => a - b);
    return pitchset;
}