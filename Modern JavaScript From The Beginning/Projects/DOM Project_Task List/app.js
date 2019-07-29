// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // Add task event
    form.addEventListener("submit", addTask);
    // Remove task event
    taskList.addEventListener("click", removeTask);
    // Clear all tasks event
    clearBtn.addEventListener("click", clearTasks);
    // Filter task events
    filter.addEventListener("keyup", filterTasks);
}

// Add task
function addTask(e) {
    if (taskInput.value === "") {
        alert("Add a task");
    } else {
        // Create li element
        const li = document.createElement("li");
        // Add class
        li.className = "collection-item";
        // Create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new link element
        const link = document.createElement("a");
        // Add class
        link.className = "delete-item secondary-content";
        // Add icon html
        link.innerHTML = "<i class='fa fa-remove'></i>";
        // Append the link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    e.preventDefault();
}

// Remove task
function removeTask(e) {
    // e.target = what's clicked on
    if (e.target.parentElement.classList.contains("delete-item")) {
        if (confirm("Are you sure?")) {
        // get i element, then a element, then li and remove
        const icon = e.target.parentElement;
        icon.parentElement.remove();
        }
    }
}

// Clear all tasks
function clearTasks(e) {
    // taskList.innerHTML = "";

    // Faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach
    (function(task) {
        const item = task.firstChild.textContent;
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}