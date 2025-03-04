let isRunning = false;
let time = 0; // Time in seconds
let timerInterval = null;

// Select the elements
const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

// Function to update the time display
function updateDisplay() {
  const hours = String(Math.floor(time / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Function to start the stopwatch
function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(() => {
      time++;
      updateDisplay();
    }, 1000);
    
    startBtn.disabled = true;
    pauseBtn.disabled = false;
  }
}

// Function to pause the stopwatch
function pauseStopwatch() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timerInterval);
    
    startBtn.disabled = false;
    pauseBtn.disabled = true;
  }
}

// Function to reset the stopwatch
function resetStopwatch() {
  isRunning = false;
  time = 0;
  clearInterval(timerInterval);
  updateDisplay();
  
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}
