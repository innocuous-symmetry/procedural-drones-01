var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as Tone from 'tone';
export const startButton = document.getElementById("start-tone");
export const synthButton = document.getElementById("synth-button");
export const showStart = document.getElementsByClassName('show-on-start');
export const hideStart = document.getElementsByClassName('hide-on-start');
export const showMore = document.getElementById('info-button');
export const moreInfo = document.getElementsByClassName('more-info');
export let appReady = false;
showMore.onclick = () => {
    if (showMore.innerHTML === 'Show more info...') {
        for (let element of moreInfo) {
            element.style.display = 'block';
            document.querySelector('#info-button').innerHTML = "Hide info";
        }
    }
    else if (showMore.innerHTML === 'Hide info') {
        for (let element of moreInfo) {
            element.style.display = 'none';
            document.querySelector('#info-button').innerHTML = "Show more info...";
        }
    }
};
startButton.onclick = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Tone.start()
        .then(() => {
        appReady = true;
        synthButton.style.display = "block";
        startButton.style.display = "none";
        for (let element of showStart) {
            element.style.display = "flex";
        }
        for (let element of hideStart) {
            element.style.display = "none";
        }
    });
});
