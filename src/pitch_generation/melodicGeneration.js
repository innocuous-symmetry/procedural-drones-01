import { getRandomPitches } from './getRandomPitches.js';
import { extractPitchName } from '../data_conversions/extractPitchName.js';
import { extractOctave } from '../data_conversions/extractOctave.js';
import { musicalPitches } from '../harmonyUtil.js';

// reads the pitch of the previous sonority and determines appropriate melodic movement for the soprano
// returns a boolean which triggers a recursive call if the interval received is out of expected values

let callCount = 0;

export const melodicGeneration = (prevPitches) => {
    callCount++;

    // direction: boolean; true refers to ascending motion; false refers to descending motion
    let direction;
    
    const preferredMotion = [0,1,2,3,4];
    let isMelodic = true;

    let newPitches = getRandomPitches();
    let prevSoprano = prevPitches[3];
    let newSoprano = newPitches[3];

    let octaveOne = extractOctave(prevSoprano);
    let octaveTwo = extractOctave(newSoprano);

    let pitchNameOne = extractPitchName(prevSoprano);
    let pitchNameTwo = extractPitchName(newSoprano);

    let pitchNumOne = musicalPitches.indexOf(pitchNameOne);
    let pitchNumTwo = musicalPitches.indexOf(pitchNameTwo);

    console.log(prevSoprano, newSoprano);

    let interval = pitchNumOne - pitchNumTwo;
    direction = interval > 0;

    isMelodic = preferredMotion.includes(Math.abs(interval));

    console.log(`interval: ${interval}`);
    console.log(`direction: ${direction ? 'ascending' : 'descending'}`);
    console.log(`isMelodic: ${isMelodic}`);
    console.log(`melody call count: ${callCount}`);

    callCount = 0;
}
