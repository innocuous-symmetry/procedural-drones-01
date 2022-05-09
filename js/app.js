// element identifiers
const startButton = document.getElementById("start-tone");
const synthButton = document.getElementById("synth-button");

const showStart = document.getElementsByClassName('show-on-start');
const hideStart = document.getElementsByClassName('hide-on-start');

const showMore = document.getElementById('info-button');
const moreInfo = document.getElementsByClassName('more-info');

let initialized = false;

// style utilities
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



// application start, show synth play button
startButton.onclick = async () => {
    await Tone.start()
    .then(() => {
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

// initialize four voices
const soprano = new Tone.Synth().toDestination();
const alto = new Tone.Synth().toDestination();
const tenor = new Tone.Synth().toDestination();
const bass = new Tone.Synth().toDestination();

// test
const audioTest = () => {
    soprano.triggerAttackRelease("C5", "8n");
    alto.triggerAttackRelease("F4", "8n");
    tenor.triggerAttackRelease("E4", "8n");
    bass.triggerAttackRelease("G3", "8n");
}

synthButton.onclick = audioTest;

// set up transport
let clock = 0;
let slowClock = 0;

const transportStart = document.getElementById('transport-start');

Tone.Transport.schedule((time) => {
    clock += 2;
    slowClock += 1;

    console.log(`clock: ${clock}, slow: ${slowClock}`);

    if (clock % 4 === 0) {
        console.log('caught');
    }
    
    if (slowClock % 4 === 0) {
        console.log("slow");
        audioTest();
    }
}, 1);

transportStart.onclick = Tone.Transport.start();
