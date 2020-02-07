// EVENT BUBBLING; the child (sub) event triggers the event for all the parents (supers)

// document.querySelector(".card-title").addEventListener("click", function() {
//     console.log("card title");
// });

// document.querySelector(".card-content").addEventListener("click", function() {
//     console.log("card content");
// });

// document.querySelector(".card").addEventListener("click", function() {
//     console.log("card");
// });

// document.querySelector(".col").addEventListener("click", function() {
//     console.log("col");
// });


// EVENT DELEGATION; opposite of bubbling; from parent (super) to child (sub)
const delItem = document.querySelector(".delete-item");

delItem.addEventListener("click", deleteItem);

// document.body.addEventListener("click", deleteItem);

// function takes an event (so a click for example on any clickable object)
function deleteItem(e) {
    // if (e.target.parentElement.className === "delete-item secondary-content") {
    //     console.log("delete item");
    // }

    // if clickable object has a parent that has the class of .delete-item
    if (e.target.parentElement.classList.contains("delete-item")) {
        console.log("delete item");
        // remove the parent's parent of that clicked oject
        e.target.parentElement.parentElement.remove();
    }
}

