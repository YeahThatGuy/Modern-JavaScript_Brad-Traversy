window.addEventListener('load', () => {
    let list = document.getElementsByTagName("img");
    Array.from(list).forEach(element => {
        element.classList.add("img-fluid");
    });
});

// Change language on button click
const language = document.getElementById("language").addEventListener("click", () => {
    const languageOption = document.getElementById("language").value;

    switch (languageOption) {
        case "en":
            window.location.href = "indexEn.html";
            document.getElementById("index").setAttribute("href", "indexEn.html");
            document.getElementById("participa").setAttribute("href", "participaEn.html");
            document.getElementById("database").setAttribute("href", "databaseEn.html");
            break;
        
        case "ro":
            window.location.href = "index.html";
            document.getElementById("index").setAttribute("href", "index.html");
            document.getElementById("participa").setAttribute("href", "participa.html");
            document.getElementById("database").setAttribute("href", "database.html");
    }

});