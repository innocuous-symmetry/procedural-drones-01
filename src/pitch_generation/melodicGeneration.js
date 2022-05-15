import { getRandomPitches } from './getRandomPitches.js';
import { extractOctave, extractPitchName } from '../dataConversions.js';
import { musicalPitches, pitchsets } from '../harmonyUtil.js';

// reads the pitch of the previous sonority and determines appropriate melodic movement for the soprano
// returns a boolean which triggers a recursive call if the interval received is out of expected values

let callCount = 0;
export const melodicGeneration = (prevPitches) => {
    let result;

    // direction: boolean; true refers to ascending motion; false refers to descending motion
    let direction;
    let isMelodic = true;
    const preferredMotion = [0,1,2,3,4,12];

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

    let interval = pitchNumOne - pitchNumTwo;

    // when the octave number is the same
    if (octaveOne === octaveTwo) {
        if (pitchNumOne === pitchNumTwo) {
            interval = 0;
        } else if (pitchNumTwo === 0) {
            interval = 12 - pitchNumOne;
        } else if (pitchNumOne > pitchNumTwo) {
            interval = pitchNumTwo - pitchNumOne;
        } else if (pitchNumOne < pitchNumTwo) {
            interval *= -1;
        }
    }
    
    // when the first octave number is higher
    if (octaveOne > octaveTwo) {
        if (pitchNumOne === pitchNumTwo) {
            interval = 0;
        } else if (pitchNumTwo === 0) {
            interval = pitchNumOne * -1;
        } else if (pitchNumOne > pitchNumTwo) {
            const wrapperCheckOne = (pitchNumOne + 9) % 12;
            const wrapperCheckTwo = (pitchNumTwo + 9) % 12;

            if (interval !== (wrapperCheckOne - wrapperCheckTwo)) {
                interval *= -1;
            } else {
                interval = pitchNumTwo - pitchNumOne - 12;
            }
        } else if (pitchNumOne < pitchNumTwo) {
            interval = (interval + 12) * -1;
        } else {
            console.log("NO CONDITION APPLIES");
        }
    // when the second octave number is higher
    } else if (octaveOne < octaveTwo) {
        if (pitchNumOne > pitchNumTwo) {
            interval = 12 - Math.abs(interval);
        } else if (pitchNumOne < pitchNumTwo) {
            interval *= -1;
        } else if (pitchNumTwo === 0) {
            interval = (12 - pitchNumOne) + 12;
        }
    }
    
    direction = interval > 0;
    // this boolean evaluates first, but may be changed to false pending the following conditional flow
    isMelodic = preferredMotion.includes(Math.abs(interval));

    // edge case: does not allow augmented triads to be considered "consonant"
    if ((pitchNameOne === 'F#' || pitchNameTwo === 'Bb') && (pitchNameOne === 'Bb' || pitchNameTwo === 'F#')) {
        isMelodic = false;
    }

    if (!isMelodic) {
        callCount++;
        result = melodicGeneration(prevPitches);
    } else {
        callCount = 0;
        result = newPitches;
    }

    return result;
}
