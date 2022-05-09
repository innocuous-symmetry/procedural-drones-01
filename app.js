// element identifiers
const startButton = document.getElementById("start-tone");
const synthButton = document.getElementById("synth-button");

let initialized = false;

// application start, show synth play button
startButton.onclick = async () => {
    await Tone.start()
    .then(synthButton.style.display = "block");
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
