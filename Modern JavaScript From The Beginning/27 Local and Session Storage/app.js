// Set local storage item; need to save values as JSON Strings, can convert back when needed to retrieve
localStorage.setItem("name", "John");
localStorage.setItem("age", "30");

// Set session storage item
sessionStorage.setItem("name", "Beth");

// Remove local storage item
localStorage.removeItem("name");

// Get from storage
const name = localStorage.getItem("name");
const age = localStorage.getItem("age");

// Clear local storage
localStorage.clear();
console.log(name, age);

// Press button, trigger event to save input into local storage
// document.querySelector("form").addEventListener("submit", function (e) {
//     const task = document.querySelector("#task").value;

//     let tasks;
//     if (localStorage.getItem("tasks") === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem("tasks"));
//     }

//     tasks.push(task);
//     localStorage.setItem("tasks", JSON.stringify(tasks));

//     alert("Task saved");

//     e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem("tasks"));

// tasks.forEach(function(task) {
//     console.log(task);
// });