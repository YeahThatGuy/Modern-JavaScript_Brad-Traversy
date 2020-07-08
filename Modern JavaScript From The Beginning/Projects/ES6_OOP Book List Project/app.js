// ES6 OOP

// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class
class UI {
    // UI constructor

    // UI methods
    // Add new book entry to the list (actually table)
    addBookToList(book) {
        const list = document.getElementById("book-list");
        // Create tr element
        const row = document.createElement("tr");
        // Insert columns
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;

        // Put the row into the table
        list.appendChild(row);
    }

    // Clear the form fields after adding a book
    clearFields() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }

    // Show the alert
    showAlert(message, className) {
        // Create the alert box
        // Create div
        const div = document.createElement("div");
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector(".container")
        // Get form
        const form = document.querySelector("#book-form");
        // Insert alert
        container.insertBefore(div, form);

        // Delete the div alert after 3 sec
        setTimeout(function () {
            document.querySelector(".alert").remove();
        }, 3000);
    }

    // Delete book
    deleteBook(target) {
        if (target.className === "delete") {
            target.parentElement.parentElement.remove();
        }
    }
}

// Local Storage Class to keep data after refreshing the page
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem("books") === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(function (book) {
            const ui = new UI;

            // Add book to UI
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem("books", JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach(function (book, index) {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        
        localStorage.setItem("books", JSON.stringify(books));
    }
}


// DOM Load Event
document.addEventListener("DOMContentLoaded", Store.displayBooks);

// Event Listener for form
document.getElementById("book-form").addEventListener("submit", function (e) {
    // Get form values
    const title = document.getElementById("title").value,
        author = document.getElementById("author").value,
        isbn = document.getElementById("isbn").value;

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Add to Local Storage
    Store.addBook(book);

    // Instantiate UI
    const ui = new UI();

    // Validate
    if (title === "" || author === "" || isbn === "") {
        // Error alert
        ui.showAlert("Please populate the fields", "error");
    } else {
        // Add book to list
        ui.addBookToList(book);

        // Success alert
        ui.showAlert("Your entry has been added", "success");

        // Clear form fields when after adding a book
        ui.clearFields();
    }

    e.preventDefault();
});

// Event Listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
    // Instantiate UI
    const ui = new UI();

    // Delete book when X link is clicked
    ui.deleteBook(e.target);

    // Remove from Local Storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show book removed alert
    ui.showAlert("Your entry has been removed", "success");

    e.preventDefault();
});