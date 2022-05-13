export const extractPitchName = (tonePitchName) => tonePitchName.match(/[A-Gb#]/g).join('');
