//var, let, const
// var name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// //init var
// var greeting;
// console.log(greeting);
// greeting = "Hello";
// console.log(greeting);

// //letters, numbers, _, $
// //cannot start with number

// //multi word vars
// var firstName = "John"; //Camel case
// var first_name = "Sara"; //Underscore
// var FirstName = "Tom"; //Pascal case
// var firstname;

//let
// let name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

//const
const name = "John Doe";
console.log(name);
//cannot reassign
// name = "Steve Smith";
// console.log(name);
//const greeting;


const person = {
    name: "John",
    age: 30
}

//can change const contents, but cannot reassign to a different object
person.name = "Sara";
person.age = 32;
console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);