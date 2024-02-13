// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        if (!name) {
            throw new Error("You are missing the name.");
          }
          if (!id) {
            throw new Error("You are missing the ID.");
          }
          if (!email) {
            throw new Error("You are missing the email.");
          }
          if (!school) {
            throw new Error("You are missing the school name.")
          }
    
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
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

    getSchool() {
        console.log(`School: St G's`);
    }
}

const intern = new Intern("Katarina", 3, "katarina@fakemail.com");

intern.printInfo();
intern.getRole();