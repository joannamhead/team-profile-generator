// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }

    getName() {
        console.log(`Name: ${this.name}`);
    }

    getId() {
        console.log(`ID: ${this.id}`);
    }

    getEmail() {
        console.log(`Email: ${this.email}`);
    }

    getRole() {
        console.log(`Role: Engineer`);
    }
}

const engineer = new Engineer("Pete", 1, "pete@fakemail.com");

engineer.printInfo();
engineer.getRole();