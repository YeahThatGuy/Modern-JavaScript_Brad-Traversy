// FUNCTION DECLARATIONS

function greet(firstName = "John", lastName = "Doe") {
    // Assign default values if parameters are undefined
    // ES5 way
    // if (typeof firstName === "undefined") {
    //     firstName = "John";
    // }
    // if (typeof lastName === "undefined") {
    //     lastName = "Doe";
    // }

    // ES6 way is to assign straight in the function's brackets, i.e. function greet(firstName = "John", lastName = "Doe"){}

    //console.log("Hello"); // does not need wrapping, kind of limited as it returns the log instead of the value
    return "Hello " + firstName + " " + lastName; // needs to be wrapped in console.log to output on screen when called.
}

// console.log(greet());

// FUNCTION EXPRESSIONS; function that gets assigned to the variable; ends with ";" since it's a variable

const square = function(x = 3) { // the default value will be 3 if the call doesn't have a parameter
    return x * x;
};

// console.log(square(10));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFES; i.e. function that is declared and run at the same time

// (function() {
//     console.log("IIFE Ran..");
// })();

// (function(name) {
//     console.log(`Hello ${name}`);
// })("Bob");

// PROPERTY METHODS

// Function inside an object is called a method

const todo = {
    add: function() {
        console.log("Add todo..");
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
};

// Can also define functions outside the object
todo.delete = function() {
    console.log("Delete todo");
};

todo.add();
todo.edit(22);
todo.delete();