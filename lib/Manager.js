const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);//Getting from parent class Employee
        this.officeNum = officeNum;
        this.role = "Manager";
    };

    getofficeNum() {
        return this.officeNum;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Manager;