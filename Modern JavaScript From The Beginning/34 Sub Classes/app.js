class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

// Subclasses inherit the methods
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);
        
        this.phone = phone;
        this.membership = membership;
    }

    // Being utility tools static methods are used on the class instead of the instantiated object
    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer("John", "Doe", "077002254", "Standard");

console.log(john);
console.log(john.greeting());

console.log(Customer.getMembershipCost());