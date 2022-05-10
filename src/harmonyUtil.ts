// interval definitions:
export interface IntervalDef {
    number: string
}

export const IntervalDefNames = {
    0: "unison",
    1: "minor second",
    2: "major second",
    3: "minor third",
    4: "major third",
    5: "perfect fourth",
    6: "tritone"
    // ... all intervals beyond this invert to one of the previous intervals
}

export const musicalPitches = ['A', "Bb", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

// helper functions
const transposePitches = (pitches: number[], interval: number) => {
    let transposed = [];
    pitches.forEach(pitch => transposed.push((pitch + interval) % 12));
    return transposed;
}

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

export const findVector = (pitches: number[]) => {
    let sorted = pitches.sort((x,y) => x - y);
    // sorted = sorted.filter((num, idx) => {
    //     return sorted.indexOf(num) === idx;
    // });

    // finds each interval and logs it as a duple
    let intervalClasses: number[] = [];
    for (let i = 0; i < sorted.length; i++) {
        let j = i+1;

        // does not allow out of range values in the proceeding loop
        if (j >= sorted.length) {
            break;
        }

        do {
            let thing: number = (sorted[j] - sorted[i]) % 6
            if (!(intervalClasses.includes(thing))) {
                intervalClasses.push(thing);
            }
            j++;
        } while (j < sorted.length);
    }

    intervalClasses = intervalClasses.sort((x,y) => x-y);
    return intervalClasses;
}

export const labelIntervals = (vector: number[]): [number, IntervalDef][] => {
    let result: [number, IntervalDef][] = [];

    for (let x of vector) {
        result.push([x, IntervalDefNames[x]]);
    }

    return result;
}

// analysis
let dMajor = extractPitchset(["D", "F#", "A", "D"]);
const eMajor = transposePitches(dMajor, 2);
console.log(eMajor);
console.log('');

/**
 * sample uses of these functions detailed below:
 * 
 * @var dMajVector = @function findVector(dMajor);
 * @param dMajor number[] ( result of earlier call to @function extractPitchset )
 * ... @returns [0,3,4,5]
 * this indicates this pitchset contains a unison, a minor third, a major third,
 * and a perfect fourth (or a corresponding inversion)
 * 
 * @var complexVector = @function findVector([0,3,4,7,8,11]);
 * @returns [1,2,3,4,5]
 * 
 * @var splitThird = @function findVector([0,3,4,7]);
 * @returns [1,3,4]
 * 
 * @function labelIntervals
 * @param vector = number[] corresponding to sorted vector
 * references @interface IntervalDef to select from @constant IntervalDefNames
 * @returns an array of duples, each containing a number and an entry from IntervalDef
 */
