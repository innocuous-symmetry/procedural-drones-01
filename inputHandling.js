const sopranoVol = document.getElementById('soprano-vol');
const sopranoVolTarget = document.getElementById('soprano-vol-target');

sopranoVol.oninput = (e) => {
    sopranoVolTarget.innerHTML = e.target.value;
}