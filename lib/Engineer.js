const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); //Getting from parent class Employee
        this.github = github;
        this.role = "Engineer";
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Engineer;