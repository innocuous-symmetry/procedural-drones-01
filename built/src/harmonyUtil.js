import { extractPitchset } from "./toneGeneration.js";
// interval definitions:
const intervals = {
    0: "unison",
    1: "minor second",
    2: "major second",
    3: "minor third",
    4: "major third",
    5: "perfect fourth",
    6: "tritone"
    // all intervals beyond this invert to one of the previous intervals
};
// helper functions
const transposePitches = (pitchNames, interval) => {
    let transposed = [];
    pitchNames.forEach(pitch => transposed.push((pitch + interval) % 12));
    return transposed;
};
const findVector = (pitches) => {
    let sorted = pitches.sort((x, y) => x - y);
    // sorted = sorted.filter((num, idx) => {
    //     return sorted.indexOf(num) === idx;
    // });
    // finds each interval and logs it as a duple
    let intervalClasses = [];
    for (let i = 0; i < sorted.length; i++) {
        let j = i + 1;
        // does not allow out of range values in the proceeding loop
        if (j >= sorted.length) {
            break;
        }
        do {
            let thing = (sorted[j] - sorted[i]) % 6;
            if (!(intervalClasses.includes(thing))) {
                intervalClasses.push(thing);
            }
            j++;
        } while (j < sorted.length);
    }
    intervalClasses = intervalClasses.sort((x, y) => x - y);
    return intervalClasses;
};
// analysis
let dMajor = extractPitchset(["D", "F#", "A", "D"]);
const eMajor = transposePitches(dMajor, 2);
console.log(eMajor);
console.log('');
let dMajVector = findVector(dMajor);
console.log(dMajVector);
let complexVector = findVector([0, 3, 4, 7, 8, 11]);
console.log(complexVector);
let splitThird = findVector([0, 3, 4, 7]);
console.log(splitThird);
