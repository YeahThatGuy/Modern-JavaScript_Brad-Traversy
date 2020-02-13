const form = document.querySelector("#guesser-form");
const userGuess = document.querySelector("#guesser");
const cardBody = document.querySelector(".card-body");
const userMessage = document.createElement("p");
const minNum = document.querySelector(".min-number");
const maxNum = document.querySelector(".max-number");

let min = 4;
let max = 10;
let numberOfGuesses = 1;
// Default value before randomising with function
let numberToGuess = 0;

minNum.textContent = min;
maxNum.textContent = max;


loadEventListeners();

// Trigger events when form is submitted is clicked
function loadEventListeners() {
    form.addEventListener("submit", checkGuess);
}

// Generate a number to guess
function generateNumber() {
    numberToGuess = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(numberToGuess);
    return numberToGuess;
}

// Only generate a number when the counter resets (i.e. a new game was started)
function decideToGenerate() {
    if (numberOfGuesses === 1) {
        generateNumber();
    }
}

// Evaluate user guesses
function checkGuess(e) {

    if (document.getElementById("submit-button").value === "Play Again") {
        document.getElementById("guesser").disabled = false;
        document.getElementById("submit-button").value = "Submit";
    } else {
        // Generate the random number to guess
        decideToGenerate();

        // Check if the input value is between min and max
        if ((userGuess.value >= min) && (userGuess.value <= max)) {
            // Check user guess to number
            if (numberOfGuesses < 3) {
                if (parseInt(userGuess.value) === numberToGuess) {
                    userMessage.textContent = "You guessed correctly.";
                    userMessage.style.color = "green";
                    numberOfGuesses = 0;
                    document.getElementById("submit-button").value = "Play Again";
                    document.getElementById("guesser").disabled = true;
                } else {
                    userMessage.textContent = `Wrong guess, ${3 - numberOfGuesses} remaining, try again.`;
                    userMessage.style.color = "red";
                }
            }

            if (numberOfGuesses === 3) {
                if (parseInt(userGuess.value) === numberToGuess) {
                    userMessage.textContent = "You guessed correctly.";
                    userMessage.style.color = "green";
                    numberOfGuesses = 0;
                    document.getElementById("submit-button").value = "Play Again";
                    document.getElementById("guesser").disabled = true;
                } else {
                    userMessage.textContent = `Wrong guess. The correct answer is ${numberToGuess}.`;
                    userMessage.style.color = "red";
                    numberOfGuesses = 0;
                    document.getElementById("submit-button").value = "Play Again";
                    document.getElementById("guesser").disabled = true;
                    // loadEventListeners();
                }
            }

            numberOfGuesses++;
        } else {
            userMessage.textContent = `The number should be between ${min} and ${max}!`;
            userMessage.style.color = "red";
            document.getElementById("submit-button").value = "Play Again";
            document.getElementById("guesser").disabled = true;
        }
    }

    cardBody.appendChild(userMessage);
    // Prevent default event behaviour that submits and refreshes
    e.preventDefault();
}
