// if(something) {
//     do something
// } else {
//     do something else
// }

const id = 100;

// // EQUAL TO
// if (id == 100) {
//     console.log("CORRECT");
// } else {
//     console.log("INCORRECT");
// }

// // NOT EQUAL TO
// if (id != 101) {
//     console.log("CORRECT");
// } else {
//     console.log("INCORRECT");
// }

// // EQUAL TO VALUE & TYPE
// if (id === 100) {
//     console.log("CORRECT");
// } else {
//     console.log("INCORRECT");
// }

// // NOT EQUAL TO VALUE & TYPE
// if (id !== 100) {
//     console.log("CORRECT");
// } else {
//     console.log("INCORRECT");
// }

// Checking for a value; not recommended because it throws the "undefined" error if the value is not available
// if (id) {
//     console.log(`The ID is ${id}`);
// } else {
//     console.log("No ID");
// }

// Checking for a value; test if undefined; recommended
// if (typeof id !== "undefined") {
//     console.log(`The ID is ${id}`);
// } else {
//     console.log("No ID");
// }

// GREATER OR LESS THAN
// if (id > 200) {
//     console.log("CORRECT");
// } else {
//     console.log("INCORRECT");
// }

// IF ELSE
const color = "yellow";

// if (color === "red") {
//     console.log("Color is red");
// } else if (color === "blue") {
//     console.log("Color is blue");
// } else {
//     console.log("Color is not red nor blue");
// }

// LOGICAL OPERATORS
// const name = "Steve";
// age = 20;

// // AND &&
// if ((age > 0) && (age < 12)) {
//     console.log(`${name} is a child`);
// } else if ((age >= 13) && (age <= 10)) {
//     console.log(`${name} is a teenager`);
// } else {
//     console.log(`${name} is an adult`);
// }

// // OR ||
// if ((age < 16) || (age > 65)) {
//     console.log(`${name} can not run in race`);
// } else {
//     console.log(`${name} is registered for the race`);
// }

// TERNARY OPERATOR; if true (?), else (:)
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');