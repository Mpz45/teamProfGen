const Employee = require(".lib/Employee");

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);//Getting from parent class Employee
        this.role = "Intern";
    };

    getRole() {
        return this.role;
    };
};

module.exports = Intern;