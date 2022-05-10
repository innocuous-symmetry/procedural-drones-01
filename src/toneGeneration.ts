// we start with a selection of pitches that generally work okay together
const sopranoTones = ["B5", "A5", "G5", "F#5", "F5", "E5", "D5", "C5", "B4", "Bb4", "A4", "G4", "F#4", "F4", "E4"];
const altoTones = ["E5", "D5", "C5", "B4", "Bb4", "A4", "G4", "F#4", "F4", "E4", "D4", "C4", "B3", "Bb3", "A3", "G3"];
const tenorTones = ["G4", "F#4", "F4", "E4", "D4", "C4", "B3", "Bb3", "A3", "G3", "F3", "E3", "D3", "C3"];
const bassTones = ["C2", "D2", "E2", "F2", "G2", "A2", "Bb2", "B2", "C3", "D3", "E3", "F3", "G3"];

export const pitchsets: string[][] = [sopranoTones, altoTones, tenorTones, bassTones];

/**
 * now we define some rules to allow for the program to follow so it can some basic tenets of music theory
 * we include all pitches, so that it can use semitone-based pitch logic focused on base-12
 * 
 * some basic rules:
 * no tritones
 * no minor 2nds or major 7ths
*/

export const evaluateVector = (vector: number[]): boolean => ((vector.includes(1) || vector.includes(6)));

export const rejectDissonance = (vector: number[]) => {
    
}
