const Manager = require("../lib/Manager");

test("Get functions", () => {
    const manager = new Manager("Karan Smith", 666, "Karan6Smith@manager.com", testOfficNum);
    
    //getOfficeNum
    const testOfficNum = 23;

    expect(manager.getOfficeNum()).toBe(testOfficNum);

    //getRole
    const testRole = "Manager";

    expect(manager.getRole()).toBe(testRole);
});