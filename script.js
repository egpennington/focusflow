// Get references to HTML elements
const timeInput = document.getElementById('timeInput');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const timerDisplay = document.getElementById('timer');
const buzzer = document.getElementById('buzzer');

let countdown; // Variable to store the interval ID
let time; // Variable to store the remaining time

// Function to start the timer
function startTimer() {
    if (countdown) clearInterval(countdown); // Clear any existing interval
    time = timeInput.value * 60; // Convert minutes to seconds

    // Function to update the timer every second
    countdown = setInterval(() => {
        const minutes = Math.floor(time / 60); // Calculate remaining minutes
        const seconds = time % 60; // Calculate remaining seconds

        // Display the time in MM:SS format
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // Check if the time is up
        if (time <= 0) {
            clearInterval(countdown); // Stop the timer
            buzzer.play(); // Play the buzzer sound
            
        } else {
            time--; // Decrease the time by one second
        }
    }, 1000); // Set the interval to 1000 milliseconds (1 second)
}

// Function to stop the timer
function stopTimer() {
    clearInterval(countdown); // Clear the interval to stop the timer
}

// Function to reset the timer
function resetTimer() {
    clearInterval(countdown); // Clear the interval
    time = timeInput.value * 60; // Reset the time to the input value in seconds
    const minutes = Math.floor(time / 60); // Calculate minutes
    const seconds = time % 60; // Calculate seconds
    // Display the reset time in MM:SS format
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Add event listeners to the buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
