// pitchset definitions, grouped into matrix before export
const sopranoTones = ["B5", "A5", "G5", "F#5", "F5", "E5", "D5", "C5", "B4", "Bb4", "A4", "G4", "F#4", "F4", "E4"];
const altoTones = ["E5", "D5", "C5", "B4", "Bb4", "A4", "G4", "F#4", "F4", "E4", "D4", "C4", "B3", "Bb3", "A3", "G3"];
const tenorTones = ["G4", "F#4", "F4", "E4", "D4", "C4", "B3", "Bb3", "A3", "G3", "F3", "E3", "D3", "C3"];
const bassTones = ["C2", "D2", "E2", "F2", "G2", "A2", "Bb2", "B2", "C3", "D3", "E3", "F3", "G3"];

export const pitchsets: string[][] = [sopranoTones, altoTones, tenorTones, bassTones];

// mapping of musical pitches, refer to this by index, maps onto base 12
export const musicalPitches = ['A', "Bb", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

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

// helper functions
const transposePitches = (pitches: number[], interval: number) => {
    let transposed = [];
    pitches.forEach(pitch => transposed.push((pitch + interval) % 12));
    return transposed;
}

// quality-of-life tool for debugging
export const labelIntervals = (vector: number[]): [number, IntervalDef][] => {
    let result: [number, IntervalDef][] = [];

    for (let x of vector) {
        result.push([x, IntervalDefNames[x]]);
    }

    return result;
}

// iterates through each voice's pitchset, and selects a random pitch from each
export const getRandomPitches = (): string[] => {
    let pitches: string[];
    for (let voice of pitchsets) {
        // will store a random index
        let index: number;

        const regex = /[0-9]/g;
        
        // repeat this iteration until it returns a number not already included in the list
        do {
            if (!pitches) pitches = [];

            index = Math.floor(Math.random() * 100) % voice.length;

            console.log(`${voice[0]}: ${index}`);
        } while (pitches.includes(voice[index]));

        // if pitches is not already initialized to an empty array, do so; otherwise, push the received value
        pitches ? pitches.push(voice[index]) : pitches = [voice[index]];
        console.log(voice[index]);
    }

    return pitches;
}
