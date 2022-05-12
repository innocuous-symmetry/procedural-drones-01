import { audioTest } from '../app.js';
import { fullRandomChord } from './audioUtil.js';

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
    sopranoVolTarget.innerHTML = e.target.value;
}

sopLFO.oninput = (e) => {
    sopLFOTarget.innerHTML = ` ${e.target.value} Hz.`;
}

// A
altoVol.oninput = (e) => {
    altoVolTarget.innerHTML = e.target.value;
}

altoLFO.oninput = (e) => {
    altoLFOTarget.innerHTML = ` ${e.target.value} Hz.`;
}

// T
tenVol.oninput = (e) => {
    tenVolTarget.innerHTML = e.target.value;
}

tenLFO.oninput = (e) => {
    tenLFOTarget.innerHTML = ` ${e.target.value} Hz.`;
}

// B
bassVol.oninput = (e) => {
    bassVolTarget.innerHTML = e.target.value;
}

bassLFO.oninput = (e) => {
    bassLFOTarget.innerHTML = ` ${e.target.value.toString()} Hz.`;
}

// audio-adjacent input handling
const synthButton = document.getElementById('synth-button');
synthButton.onclick = audioTest;

const randChord = document.getElementById('rand-chord');
randChord.onclick = fullRandomChord;
