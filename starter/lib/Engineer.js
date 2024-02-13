// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email) {
    this.name = "Jack"
    this.id = 1;
    this.email = "jack@fakemail.com";
    }
}