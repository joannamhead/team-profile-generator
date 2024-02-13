// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
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
        console.log(`Role: Intern`);
    }
}

const intern = new Intern("Katarina", 3, "katarina@fakemail.com");

intern.printInfo();
intern.getRole();