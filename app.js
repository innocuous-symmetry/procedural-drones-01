// element identifiers

const element = document.getElementById("start-tone");
const synthButton = document.getElementById("synth-button");

element.onclick = async () => {
    await Tone.start()
    .then(synthButton.style.display = "block");
}

const synth = new Tone.Synth().toMaster();

synthButton.onclick = () => {
    synth.triggerAttackRelease("C4", "8n")
}

