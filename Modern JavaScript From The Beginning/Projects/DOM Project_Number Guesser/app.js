const numberToGuess = Math.round(Math.random() * 10);
const form = document.querySelector("#guesser-form");
let userGuess = document.querySelector("#guesser");
const cardBody = document.querySelector(".card-body");
const userMessage = document.createElement("p");
let numberOfGuesses = 1;
console.log(numberToGuess);

loadEventListeners();

// Trigger event when form is submitted is clicked
function loadEventListeners() {
    form.addEventListener("submit", checkGuess);
}

// Evaluate user guesses
function checkGuess(e) {

    userMessage.setAttribute("id", "p-message");

    // Check if the input value is between 0 and 10
    if ((userGuess.value >= 0) && (userGuess.value <= 10)) {
        // Check user guess to number
        if (numberOfGuesses < 3) {
            if (parseInt(userGuess.value) === numberToGuess) {
                userMessage.textContent = "You guessed correctly.";
                userMessage.style.color = "green";
                document.getElementById("guesser").disabled = true;
                document.getElementById("submit-button").disabled = true;
            } else {
                userMessage.textContent = `Wrong guess, ${3 - numberOfGuesses} remaining, try again.`;
                userMessage.style.color = "red";
            }
        }

        if (numberOfGuesses === 3) {
            if (parseInt(userGuess.value) === numberToGuess) {
                userMessage.textContent = "You guessed correctly.";
                userMessage.style.color = "green";
                document.getElementById("guesser").disabled = true;
                document.getElementById("submit-button").disabled = true;
            } else {
                userMessage.textContent = "Wrong guess. You don't have any more guesses.";
                userMessage.style.color = "red";
                document.getElementById("guesser").disabled = true;
                document.getElementById("submit-button").disabled = true;
            }
        }

        numberOfGuesses++;
    } else {
        userMessage.textContent = "The number should be between 0 and 10!";
        userMessage.style.color = "red";
    }

    cardBody.appendChild(userMessage);

    // Prevent default event behaviour that submits and refreshes
    e.preventDefault();
}
