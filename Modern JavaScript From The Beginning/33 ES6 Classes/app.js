// ES6 way of creating classes and constructors

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    // Creating static methods, i.e. stand alone functions which don't need instantiating an object
    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person("Mary", "Williams", "11-13-1980");

console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge());

mary.getsMarried("Jackson");
console.log(mary.greeting());

// Static methods work directly from class, not from an instance of the class
console.log(Person.addNumbers(1,2));