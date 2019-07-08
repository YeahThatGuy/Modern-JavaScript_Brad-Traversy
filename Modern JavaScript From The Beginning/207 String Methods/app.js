const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hello there my name is Brad";
const tags = "web design, web development, programming";

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Appending
val = "Brad ";
val += "Traversy";

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping
val = "That's awesome and I can't wait";

// Length
val = firstName.length;

// concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

// charAt()
val = firstName.charAt(2);
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);

// split()
val = str.split(" ");
val = tags.split(",");

// replace()
for (let i = 0; i < val.length; i++) {
    let element = val[i];
    if (element.charAt(0) == " ") {
        val[i] = element.replace(" ", "");
    }
}

// includes()
val = str.includes("Hello");

console.log(val);