import { audioTest } from '../app.js';
import { fullRandomChord, evaluatedChord } from './audioUtil.js';
import { sonorities, getNextSonority } from './pitch_generation/sonorityList.js';

// slider variables referring to DOM
export const sopranoVol = document.getElementById('soprano-vol');
const sopranoVolTarget = document.getElementById('soprano-vol-target');
export const sopLFO = document.getElementById('sop-lfo');
const sopLFOTarget = document.getElementById('sop-lfo-target');

export const altoVol = document.getElementById('alto-vol');
const altoVolTarget = document.getElementById('alto-vol-target');
export const altoLFO = document.getElementById('alto-lfo');
const altoLFOTarget = document.getElementById('alto-lfo-target');

export const tenVol = document.getElementById('ten-vol');
const tenVolTarget = document.getElementById('ten-vol-target');
export const tenLFO = document.getElementById('ten-lfo');
const tenLFOTarget = document.getElementById('ten-lfo-target');

export const bassVol = document.getElementById('bass-vol');
const bassVolTarget = document.getElementById('bass-vol-target');
export const bassLFO = document.getElementById('bass-lfo');
const bassLFOTarget = document.getElementById('bass-lfo-target');

// logic for displaying values on HTML labels
// S
sopranoVol.oninput = (e) => {
    const target = e.target;
    sopranoVolTarget.innerHTML = target.value;
}

sopLFO.oninput = (e) => {
    const target = e.target;
    sopLFOTarget.innerHTML = ` ${target.value} Hz.`;
}

// A
altoVol.oninput = (e) => {
    const target = e.target;
    altoVolTarget.innerHTML = target.value;
}

altoLFO.oninput = (e) => {
    const target = e.target;
    altoLFOTarget.innerHTML = ` ${target.value} Hz.`;
}

// T
tenVol.oninput = (e) => {
    const target = e.target;
    tenVolTarget.innerHTML = target.value;
}

tenLFO.oninput = (e) => {
    const target = e.target;
    tenLFOTarget.innerHTML = ` ${target.value} Hz.`;
}

// B
bassVol.oninput = (e) => {
    const target = e.target;
    bassVolTarget.innerHTML = target.value;
}

bassLFO.oninput = (e) => {
    const target = e.target;
    bassLFOTarget.innerHTML = ` ${target.value} Hz.`;
}

// audio-adjacent input handling
const synthButton = document.getElementById('synth-button');
synthButton.onclick = audioTest;

const randChord = document.getElementById('rand-chord');
randChord.onclick = fullRandomChord;

const evalChord = document.getElementById('eval-chord');
evalChord.onclick = evaluatedChord;

const nextChord = document.getElementById('next-chord');
nextChord.onclick = getNextSonority;
