const name = "John";
const age = 30;
const job = "Web Developer";
const city = "Miami";
let html;

// Without template strings (ES5 way)
html = "<ul><li>Name: " + name + "</li><li>Age: " + age + "</li><li>Job: " + job + "</li><li>City: " + city + "</li></ul>";

html = "<ul>" + 
       "<li>Name: " + name + "</li>" +
       "<li>Age: " + age + "</li>" +
       "<li>Job: " + job + "</li>" +
       "<li>City: " + city + "</li>" +
       "</ul>";

function hello() {
    return "hello";
}

// With template strings (ES6 way)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 31 ? "Over 31" : "Under 31"}</li>
    </ul>    
`;

document.body.innerHTML = html;