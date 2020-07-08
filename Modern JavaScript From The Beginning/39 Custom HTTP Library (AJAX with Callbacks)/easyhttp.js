// ES5 Way with Prototypes instead of ES6 Classes

function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request; callback to work asynchronously
easyHTTP.prototype.get = function (url, callback) {
    this.http.open("GET", url, true);

    // this.http.status and this.http.responseText are undefined because lexical this pertains to the first function, hence not in scope; can be fixed with arrow function in ES6, which assumes that everyone underneath the main function wants to use the same this; in ES5, lexical this from the main function can be passed into a variable and reused in the secondary function as a workaround
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            // put "null" as another argument to the function to check for error if there is one
            callback(null, self.http.responseText);
        } else {
            callback("Error: " + self.http.status);
        }
    }

    this.http.send();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function (url, data, callback) {
    this.http.open("POST", url, true);
    // Sets the data type
    this.http.setRequestHeader("Content-type", "application/json");

    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
    this.http.open("PUT", url, true);
    // Sets the data type
    this.http.setRequestHeader("Content-type", "application/json");

    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
    this.http.open("DELETE", url, true);

    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, "Post Deleted");
        } else {
            callback("Error: " + self.http.status);
        }
    }

    this.http.send();
}