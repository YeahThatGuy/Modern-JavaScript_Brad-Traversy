// API Source and DOC: http://www.icndb.com/api/

document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
    // input[type='number'] grabs specifically only the number
    const number = document.querySelector("input[type='number']").value;

    const xhr = new XMLHttpRequest();

    // Get a number of jokes, depending on the number specified in the form
    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = "";

            // Check if the "type" field of the object is set to "success"
            if (response.type === "success") {
                // Loop through the "value" field of the object only, which is an array
                response.value.forEach((joke) => {
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += "<li>Something went wrong</li>";
            }

            document.querySelector(".jokes").innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}