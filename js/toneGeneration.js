// we start with a selection of pitches that generally work okay together
export const sopranoTones = ["B5", "A5", "G5", "F#5", "F5", "E5", "D5", "C5", "B4", "Bb4", "A4", "G4", "F#4", "F4", "E4"];
export const altoTones = ["E5", "D5", "C5", "B4", "Bb4", "A4", "G4", "F#4", "F4", "E4", "D4", "C4", "B3", "Bb3", "A3", "G3"];
export const tenorTones = ["G4", "F#4", "F4", "E4", "D4", "C4", "B3", "Bb3", "A3", "G3", "F3", "E3", "D3", "C3"];
export const bassTones = ["C2", "D2", "E2", "F2", "G2", "A2", "Bb2", "B2", "C3", "D3", "E3", "F3", "G3"];

// now we define some rules to allow for the program to follow so it can some basic tenets of music theory
// we're going to include all pitches, so that it can use semitone-based pitch logic.
// this is focused on base-12, something computers understand quite well
const musicalPitches = ['A', "Bb", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

export const evaluateHarmony = (pitches) => {
    let sorted = [];
    for (let each of pitches) {
        let matches = each.match(/(\d+)/);
        if (matches) {
            sorted.push([each, matches]);
        }
    }

    sorted = sorted.sort((a,b) => a[1] < b[1]);
    console.log(sorted);
}

// no tritones
// no minor 2nds or major 7ths