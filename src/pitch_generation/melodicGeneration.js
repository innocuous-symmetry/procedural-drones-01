import { getRandomPitches } from './getRandomPitches.js';
import { extractPitchName } from '../data_conversions/extractPitchName.js';
import { extractOctave } from '../data_conversions/extractOctave.js';
import { musicalPitches, pitchsets } from '../harmonyUtil.js';

// reads the pitch of the previous sonority and determines appropriate melodic movement for the soprano
// returns a boolean which triggers a recursive call if the interval received is out of expected values

let callCount = 0;

export const melodicGeneration = (prevPitches) => {
    console.clear();

    callCount++;

    // direction: boolean; true refers to ascending motion; false refers to descending motion
    let direction;
    let isMelodic = true;
    const preferredMotion = [0,1,2,3,4,12];
    const sopranoLength = pitchsets[3].length;

    let newPitches = getRandomPitches();

    let prevSoprano = prevPitches[3];
    let newSoprano = newPitches[3];

    let octaveOne = extractOctave(prevSoprano);
    let octaveTwo = extractOctave(newSoprano);

    let pitchNameOne = extractPitchName(prevSoprano);
    let pitchNameTwo = extractPitchName(newSoprano);

    // 3 is added here to account for the octave wrap associated with octave wrap as the number in pitch
    // notation shifts; i.e. B4 to C5 being only a semitone, despite the octave marker completely changing
    let pitchNumOne = musicalPitches.indexOf(pitchNameOne);
    let pitchNumTwo = musicalPitches.indexOf(pitchNameTwo);

    let interval = pitchNumTwo - pitchNumOne;
    direction = interval > 0;

    if (octaveOne === octaveTwo) console.log("OCTAVE: same");

    if (octaveOne > octaveTwo) {
        console.log('OCTAVE: first is higher');
        if ((pitchNumTwo + 3) % 12 <= (pitchNumOne + 3) % 12) {
            console.log('CAUGHT OCTAVE SHIFT');
            console.log(interval);
            interval = Math.abs(interval) * -1;
        }
        console.log(interval);

        // interval = 12 - interval;
    } else if (octaveOne < octaveTwo) {
        console.log('OCTAVE: second is higher');
        console.log(`pre shift: ${interval}`);
        if (interval < pitchNumOne) (interval = 12 + Math.abs(interval));
        console.log(`post shift: ${interval}`);
    }
    
    // this boolean evaluates first, but may be changed to false pending the following conditional flow
    isMelodic = preferredMotion.includes(Math.abs(interval));

    // edge case: does not allow augmented triads to be considered "consonant"
    if ((pitchNameOne === 'F#' || pitchNameTwo === 'Bb') && (pitchNameOne === 'Bb' || pitchNameTwo === 'F#')) {
        isMelodic = false;
    }

    console.log(prevSoprano, newSoprano);
    console.log(pitchNumOne, pitchNumTwo);

    console.log(`interval: ${interval}`);
    console.log(`direction: ${direction ? 'ascending' : 'descending'}`);
    console.log(`isMelodic: ${isMelodic}`);
    console.log(`melody call count: ${callCount}`);

    callCount = 0;
}
