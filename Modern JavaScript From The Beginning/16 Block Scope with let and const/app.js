// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log("Function Scope: ", a, b, c);
// }

// test();

// if (true) {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log("Block Scope: ", a, b, c);
// }

// for (var a = 0; a < 10; a++) {
//     console.log(`Loop: ${a}`);
// }

console.log("Global Scope: ", a, b, c);

// let and const have a block level scope (i.e. as in Java), whereas var is global and can be changed by redeclaring at block level