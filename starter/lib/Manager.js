// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        if (!name) {
            throw new Error("You are missing the name.");
          }
          if (!id) {
            throw new Error("You are missing the ID.");
          }
          if (!email) {
            throw new Error("You are missing the email.");
          }
          if (!officeNumber) {
            throw new Error("You are missing the office number.")
          }
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
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
        console.log(`Role: Manager`);
    }
}

const manager = new Manager("Jo", 1, "jo@fakemail.com", 12);

manager.printInfo();
manager.getRole();