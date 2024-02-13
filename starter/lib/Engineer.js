// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
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
    getGithub() {
        console.log(`GitHub username: ${this.github}`)
    }
}

const engineer = new Engineer("Pete", 2, "pete@fakemail.com", "Petey2000");

engineer.printInfo();
engineer.getRole();