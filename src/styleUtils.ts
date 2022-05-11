export const startButton = document.getElementById("start-tone");
export const synthButton = document.getElementById("synth-button");

export const showStart = document.getElementsByClassName('show-on-start') as HTMLCollectionOf<HTMLElement>;
export const hideStart = document.getElementsByClassName('hide-on-start') as HTMLCollectionOf<HTMLElement>;

export const showMore = document.getElementById('info-button');
export const moreInfo = document.getElementsByClassName('more-info') as HTMLCollectionOf<HTMLElement>;

export let appReady = false;

showMore.onclick = () => {
    if (showMore.innerHTML === 'Show more info...') {
        for (let element of moreInfo) {
            element.style.display = 'block';
            document.querySelector('#info-button').innerHTML = "Hide info";
        }
    } else if (showMore.innerHTML === 'Hide info') {
        for (let element of moreInfo) {
            element.style.display = 'none';
            document.querySelector('#info-button').innerHTML = "Show more info...";
        }
    }
}

startButton.onclick = async () => {
    // @ts-expect-error - namespace again, failed import from Tone
    await Tone.start()
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
}
