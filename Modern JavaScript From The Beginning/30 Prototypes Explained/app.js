// Object literals inherit from Object.Prototype
// Objects created through constructors inherit from ConstructorName.Prototype
// Methods that don't pertain to the particular instance of the object, need to be typed outside as a Prototype to the Constructor: ConstructorName.prototype.method = function() {}
// Doesn't flood constructor with methods, nestles them under prototype, so constructor keeps only properties

// Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // Method inserted into Constructor (not recommended)
    // this.calculateAge = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Methods injected into Constructor.Prototype
// Calculate age
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;
}

const john = new Person("John", "Doe", "8-12-90");
const mary = new Person("Mary", "Johnson", "March 20 1978");

console.log(mary);
console.log(john.calculateAge());
console.log(mary.getFullName());

mary.getsMarried("Smith");
console.log(mary.getFullName());

console.log(mary.hasOwnProperty("firstName"));
// Returns false because getFullName is a method in the Prototype
console.log(mary.hasOwnProperty("getFullName"));