import { pitchsets, musicalPitches } from '../harmonyUtil.js';
import { extractPitchName } from './extractPitchName.js';
import { getRandomIndex } from '../pitch_generation/getRandomPitches.js';
import { findVector } from './findVector.js';

let callCount = 0;

const iteratePitchsets = () => {
    callCount++;

    if (callCount >= 10) {
        return ["E3", "C4", "D4", "G4"];
    }

    const bass = pitchsets[0];
    let bassNote = bass[getRandomIndex(bass)];

    let pitches = [bassNote];
    let result = [];

    for (let i = 1; i < 4; i++) {
        let voice = pitchsets[i];
        let idx = getRandomIndex(voice);
        let pitch = voice[idx];
        pitches.push(pitch);
    }

    let pitchNames = pitches.map(x => extractPitchName(x));
    let pitchNums = pitchNames.map(x => musicalPitches.indexOf(x));
    
    console.log(pitches);
    console.log(pitchNames);
    console.log(pitchNums);

    let isDissonant = false;

    for (let i = 0; i < pitchNums.length; i++) {
        for (let j = i; j < pitchNums.length; j++) {
            let interval = Math.abs(pitchNums[i] - pitchNums[j]);
            if (interval > 6) {
                interval = 12 - interval;
            }

            let intervalIsDissonant = ((interval === 1) || (interval === 6));
            // console.log(`pitches: ${[pitches[i], pitches[j]]} interval: ${interval}, dissonant: ${isDissonant}, positions: [${i}, ${j}]: ${[pitchNums[i], pitchNums[j]]}`);
            
            if (!intervalIsDissonant) {
                continue;
            } else {
                isDissonant = true;
            }
        }
    }
    
    if (isDissonant) {
        console.log('bad');
        let newValues = iteratePitchsets();
        return newValues;
    } else {
        console.log('good');
        console.log(pitches);
        return pitches;
    }
}

function twoPointIteration() {
    let caught = false;
    let data = [1,2,3,4,5,6];

    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        for (let j = 0; j < data.length; j++) {
            if (data[i] === data[j]) continue;

            let difference = Math.abs(data[j] - data[i]);

            if (difference === 3) {
                difference = "caught: 3";
            }

            console.log([difference, [data[i], data[j]]]);
        }

        console.log('next');
    }

    return caught;
}

function selfReferentialPointer() {
    for (let i = 0; i < 5; i++) {
        console.log(`i: ${i}`);
        for (let j = i; j < i+2; j++) {
            console.log(`jjjjjjj: ${j % 3}`);
        }
    }
}
