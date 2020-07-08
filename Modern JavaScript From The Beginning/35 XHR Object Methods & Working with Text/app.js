document.getElementById("button").addEventListener("click", loadData);

function loadData() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN the data from data.txt
    xhr.open("GET", "data.txt", true);

    // Checks the readyState progress
    // console.log("READYSTATE", xhr.readyState);

    // Optional - Used for spinners/loaders
    xhr.onprogress = function () {
        console.log("READYSTATE", xhr.readyState);
    }

    // GET the text after it has loaded successfully
    // onload = new way of getting data, which returns it when readyState is 4 in the background (i.e. request finished)
    xhr.onload = function () {
        console.log("READYSTATE", xhr.readyState);
        if (this.status === 200) {
            // console.log(this.responseText);
            document.getElementById("output").innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // onreadystatechange = old way, which needs to also check the status of the readyState
    // xhr.onreadystatechange = function () {
    //     console.log("READYSTATE", xhr.readyState);
    //     if((this.status === 200) && (this.readyState === 4)) {
    //         console.log(this.responseText);
    //     }
    // }

    // For errors
    xhr.onerror = function () {
        console.log("Request error");
    }

    // Return the request to the client
    xhr.send();


    // readyState Values
    // 0: request not initialised
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
}