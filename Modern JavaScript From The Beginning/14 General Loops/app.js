// FOR LOOP

// for (let i = 0; i < 10; i++) {
//     if (i === 2) {
//         console.log("2 is my favourite number");
//         continue;
//     }

//     if (i === 5) {
//         console.log("Stop the loop");
//         break;
//     }

//     console.log("Number: " + i);
// }


// WHILE LOOP

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }


// DO WHILE; runs at least once

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i <10);


// LOOP THROUGH ARRAY

const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }


// FOR EACH; for arrays
// cars.forEach(function(car) {
//     console.log(car);
// });

// FOR EACH with optional parameters
// cars.forEach(function(car, index) {
//     console.log(`${index}: ${car}`);
// });

// cars.forEach(function(car, index, array) {
//     console.log(`${index}: ${car}`);
//     console.log(array);
// });


// MAP
// const users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Sarah"},
//     {id: 3, name: "Karen"}
// ];

// const ids = users.map(function(user) {
//     return user.id;
// });

// console.log(ids);


//FOR IN; for object use
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 40
}

for (let i in user) {
    console.log(`${i}: ${user[i]}`);
}