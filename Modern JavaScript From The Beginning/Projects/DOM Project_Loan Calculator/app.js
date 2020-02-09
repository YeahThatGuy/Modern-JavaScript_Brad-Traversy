const monthlyPayment = document.querySelector("#monthly-payment");
const totalPayment = document.querySelector("#total-payment");
const totalInterest = document.querySelector("#total-interest");
const loanAmount = document.querySelector("#amount");
const interestRatePerYear = document.querySelector("#interest");
const yearsToRepay = document.querySelector("#years");
const form = document.querySelector("#loan-form");

// Call all events
loadEventListeners();

// Run triggered events
function loadEventListeners() {
    // Listen for submit button click
    form.addEventListener("submit", calculateLoan);
}

// Run all functions that are tied to the submit button
function calculateLoan(e) {
    // Check for number of input errors, if none then run the calculating functions
    if (checkErrors() > 0) {
        stop();
    } else {
        calculateMonthlyPayment();
        calculateTotalPayment();
        calculateTotalInterest();
    }

    // Prevent submit and refresh (default behaviour of submit form event)
    e.preventDefault();
}

function calculateMonthlyPayment() {
    let interestRatePerPeriod = (interestRatePerYear.value / 12) / 100;
    let periods = yearsToRepay.value * 12;

    // Formula for monthly payment = P * (r * (1 + r)^n) / (1 + r)^n - 1; 
    // toFixed(2) to limit the decimal part to 2
    monthlyPayment.value = ((loanAmount.value * interestRatePerPeriod * Math.pow(1 + interestRatePerPeriod, periods)) /
        (Math.pow(1 + interestRatePerPeriod, periods) - 1)).toFixed(2);
}

function calculateTotalPayment() {
    let periods = yearsToRepay.value * 12;

    totalPayment.value = (monthlyPayment.value * periods).toFixed(2);
}

function calculateTotalInterest() {
    totalInterest.value = (totalPayment.value - loanAmount.value).toFixed(2);
}

// Check for number of input errors
function checkErrors() {
    // Display a general error on page and specific in console
    // Create a div error element and assign to top of page with prepend
    const cardBody = document.querySelector(".card-body");
    const errorElement = document.createElement("div");
    // Bootstrap alert and alert-danger clases for formatting
    errorElement.setAttribute("class", "alert");
    errorElement.setAttribute("class", "alert-danger");

    let numberOfErrors = 0;
    if (yearsToRepay.value > 100) {
        console.log("Years to repay should be less than 100.");
        errorElement.textContent = "Please check your inputs. Check console for details.";

        // Assign as first child to div.card-body with prepend
        cardBody.prepend(errorElement);

        numberOfErrors++;

    } if (loanAmount.value === "") {
        console.log("Specify a loan amount.");
        errorElement.textContent = "Please check your inputs. Check console for details.";
        cardBody.prepend(errorElement);
        numberOfErrors++;

    } if (interestRatePerYear.value === "") {
        console.log("Specify an interest rate");
        errorElement.textContent = "Please check your inputs. Check console for details.";
        cardBody.prepend(errorElement);
        numberOfErrors++;

    } if (yearsToRepay.value === "") {
        console.log("Specify the amount of years to repay");
        errorElement.textContent = "Please check your inputs. Check console for details.";
        cardBody.prepend(errorElement);
        numberOfErrors++;
    }
    return numberOfErrors;
}