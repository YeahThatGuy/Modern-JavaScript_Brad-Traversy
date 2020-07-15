// // Adding "async" before a function makes it return a Promise
// async function myFunc() {
//     // return "Hello";

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Hello"), 1000);
//     });

//     const error = true;

//     if (!error) {
//         // Wait until the promise is resolved
//         const res = await promise;
//         return res;
//     } else {
//         await Promise.reject(new Error("Something went wrong"));
//     }
// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

async function getUsers() {
    // Await response of the fetch call
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Only proceed once it's resolved
    const data = await response.json();

    // Only proceed once the second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));