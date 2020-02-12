const form = document.querySelector("#guesser-form");
const userGuess = document.querySelector("#guesser");
const cardBody = document.querySelector(".card-body");
const userMessage = document.createElement("p");
const minNum = document.querySelector(".min-number");
const maxNum = document.querySelector(".max-number");

let min = 1;
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
    numberToGuess = Math.round(Math.random() * 10);
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

    decideToGenerate();
1
    if (document.getElementById("submit-button").value === "Play Again") {
        document.getElementById("guesser").disabled = false;
        document.getElementById("submit-button").value = "Submit";
    } else {
        // Check if the input value is between 0 and 10
        if ((userGuess.value >= min) && (userGuess.value <= max)) {
            // Check user guess to number
            if (numberOfGuesses < 3) {
                if (parseInt(userGuess.value) === decideToGenerate()) {
                    userMessage.textContent = "You guessed correctly.";
                    userMessage.style.color = "green";
                    document.getElementById("guesser").disabled = true;
                    document.getElementById("submit-button").disabled = true;
                } else {
                    userMessage.textContent = `Wrong guess, ${3 - decideToGenerate()} remaining, try again.`;
                    userMessage.style.color = "red";
                }
            }

            if (numberOfGuesses === 3) {
                if (parseInt(userGuess.value) === decideToGenerate()) {
                    userMessage.textContent = "You guessed correctly.";
                    userMessage.style.color = "green";
                    document.getElementById("guesser").disabled = true;
                    document.getElementById("submit-button").disabled = true;
                } else {
                    userMessage.textContent = `Wrong guess. The correct answer is ${decideToGenerate()}.`;
                    userMessage.style.color = "red";
                    numberOfGuesses = 0;
                    document.getElementById("submit-button").value = "Play Again";
                    document.getElementById("guesser").disabled = true;
                    // loadEventListeners();
                }
            }

            numberOfGuesses++;
        } else {
            userMessage.textContent = "The number should be between 0 and 10!";
            userMessage.style.color = "red";
        }
    }

    cardBody.appendChild(userMessage);

    // Prevent default event behaviour that submits and refreshes
    e.preventDefault();
}
