let timer;
let isRunning = false;
let totalSeconds = 0;

const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

const inputHours = document.getElementById('inputHours');
const inputMinutes = document.getElementById('inputMinutes');
const inputSeconds = document.getElementById('inputSeconds');

function updateDisplay() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    if (isRunning) return;

    isRunning = true;
    const inputHrs = parseInt(inputHours.value, 10) || 0;
    const inputMins = parseInt(inputMinutes.value, 10) || 0;
    const inputSecs = parseInt(inputSeconds.value, 10) || 0;

    totalSeconds = inputHrs * 3600 + inputMins * 60 + inputSecs;

    timer = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timer);
            isRunning = false;
            alert("Time's up!");
        } else {
            totalSeconds--;
            updateDisplay();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    totalSeconds = 0;
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
