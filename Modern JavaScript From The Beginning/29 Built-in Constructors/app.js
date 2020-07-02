// String

const name1 = "Jeff";
const name2 = new String("Jeff");

// name2.foo = "bar";
console.log(name1);
console.log(name2);

console.log(typeof name2);

// "===" checks not only the value, but also the type; "==" only value
// when object, the value matches, but the type can be different, in this case object vs String

if(name1 === "Jeff") {
    console.log("Yes");
} else {
    console.log("No");
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool2);

// Function
const getSum1 = function(x, y) {
    return x + y;
}

const getSum2 = new Function("x", "y", "return 1 + 1");

console.log(getSum1(1, 1));

// Object
const john1 = {
    name: "John"
};
const john2 = new Object({
    name: "John"
});
console.log(john1);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr2);

// Regular Expressions
const re1 = /\w+/;

// Need to escape with additional "\" when using built-in RegExp constructor
const re2 = new RegExp("\\w+");

console.log(re1);