// Alternative way to create an object; easy way without constructors, inheritance, etc.

const personPrototypes = {
    greeting: function () {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;

mary.getsMarried("Thompson");

console.log(mary);
console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
    firstName: {value: "Brad"},
    lastName: {value: "Trevor"},
    age: {value: 35}
});

console.log(brad);
console.log(brad.greeting());