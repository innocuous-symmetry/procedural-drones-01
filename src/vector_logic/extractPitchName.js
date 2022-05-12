const regex = /[A-Gb#]/g;
export const extractPitchName = (tonePitchName) => tonePitchName.match(regex).join('');
