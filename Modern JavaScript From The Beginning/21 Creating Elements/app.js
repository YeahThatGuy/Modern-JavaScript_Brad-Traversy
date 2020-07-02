// Create element
const li = document.createElement("li");

// Add class
li.className = "collection-item";

// Add id
li.id = "new-item";

// Add attribute
li.setAttribute("title", "New Item");

// Create text node and append
li.appendChild(document.createTextNode("Hello World"));

// Append li as child to ul
document.querySelector("ul.collection").appendChild(li);

// Create new link element
const link = document.createElement("a");
// Add classes
link.className = "delete-item secondary-content";
// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link as child to li
// document.querySelector("li.collection-item:nth-child(6)").appendChild(link);
li.appendChild(link);

console.log(li);