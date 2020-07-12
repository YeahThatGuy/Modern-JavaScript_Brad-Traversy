// const sayHello = function() {
//     console.log("Hello");
// }

// const sayHello = () => {
//     console.log("Hello");
// }

// One line arrow function does not need braces
// const sayHello = () => console.log("Hello");

// Returning something
// const sayHello = () => "Hello";

// Returning old way
// const sayHello = function() {
//     return "Hello";
// }

// Return object; needs to be wrapped in round parantheses because only curly braces are interpreted as function body
// const sayHello = () => ({msg: "Hello"});

// Single parameter does not need paranthesis
// const sayHello = (name) => console.log(`Hello ${name}`);

// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello("John", "Smith");

const users = ["Nate", "Johnny", "Willy"];

// const nameLengths = users.map(function(name) {
//     return name.length;
// });

// Arrow function version
// const nameLengths = users.map((name) => {
//     return name.length;
// });

// Shortest arrow function version
// const nameLengths = users.map((name) => name.length);

console.log(nameLengths);