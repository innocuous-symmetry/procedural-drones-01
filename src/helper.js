import { pitchsets } from "./harmonyUtil.js";

let index;
let pitch;
let formattedPitch = 'caught';
let regex = /[A-Gb#]/g;

let pitches = [];
let formattedPitches = [];

// index = Math.floor(Math.random() * 100) % pitchsets[0].length;

// const toParse = pitchsets[0][index];
// const parsed = toParse.match(regex).join('');
// console.log(parsed);

for (let voice of pitchsets) {
    while (formattedPitches.length < 4) {
        index = Math.floor(Math.random() * 100) % voice.length;
        pitch = voice[index];
        formattedPitch = pitch.match(regex).join('');
        if (!formattedPitches.includes(formattedPitch)) {
            formattedPitches.push(formattedPitch);
            pitches.push(pitch);
        }
    }
}

console.log(formattedPitches)
console.log(pitches);