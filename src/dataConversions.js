import { musicalPitches } from './harmonyUtil.js';

// inline functions for converting between data types
export const extractPitchName = (tonePitchName) => tonePitchName.match(/[A-Gb#]/g).join('');
export const extractOctave = (pitchName) => pitchName.match(/[0-9]/g).join('');
export const getRandomIndex = (voice) => Math.floor(Math.random() * 100) % voice.length;

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
