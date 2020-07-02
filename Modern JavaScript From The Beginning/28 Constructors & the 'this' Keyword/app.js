// Person constructor
function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        // Calculate age: Date.now() gets the time in milliseconds since 1 January 1970
        // this.birthday.getTime() gets the time from parameter
        //getUTCFullYear() converts time to years
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// const brad = new Person("Brad", 36);
// const john = new Person("John", 30);

// console.log(john.age);

const brad = new Person("Brad", "9-10-1980");
console.log(brad.calculateAge());