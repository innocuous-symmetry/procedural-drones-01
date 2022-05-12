import { pitchsets, musicalPitches } from '../harmonyUtil.js';
import { extractPitchName } from './extractPitchName.js';
import { getRandomIndex } from './getRandomPitches.js';

const iteratePitchsets = () => {
    let pitches = [];
    let result = [];

    const tryNewPitch = () => {
        result = [];

        for (let voice of pitchsets) {
            let idx = getRandomIndex(voice);
            let pitchNum = musicalPitches.indexOf(extractPitchName(voice[idx]));
    
            pitches.push([pitchNum, voice[idx]]);
        }

        console.log(pitches);

        for (let i = 0; i < pitches.length; i++) {
            for (let j = i; j < pitches.length; j++) {
                let difference = Math.abs(pitches[i][0] - pitches[j][0]);
                if (difference === 1 || difference === 6) {
                    result.push(["BAD", [i, j], pitches[i], pitches[j]]);
                } else {
                    result.push(["GOOD", [i, j], pitches[i], pitches[j]]);
                }
            }
        }
        console.log(result);
    }

    tryNewPitch();

    for (let entry in result) {
        if (entry[0] === "BAD") {
            iteratePitchsets();
        }
    }

    console.log(pitches);
}

iteratePitchsets();



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
