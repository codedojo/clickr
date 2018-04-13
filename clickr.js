const TIMEOUT = 5000;

let clicks = 0;
let started = false;
let ended = false;

const timer = document.querySelector('#timer');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);
}

function start() {
    let start = Date.now();

    started = true;
    display.textContent = formatTime(TIMEOUT);
    button.onclick = handleClick;

    let interval = setInterval(() => {
        let delta = Date.now() - start;
        display.textContent = formatTime(TIMEOUT - delta);
    }, 100);

    let timeout = setTimeout(() => {
        button.onclick = null;
        display.textContent = 'Game Over';
        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT);
}

function handleClick(event) {
    counter.textContent = clicks++;
}

button.onclick = start;