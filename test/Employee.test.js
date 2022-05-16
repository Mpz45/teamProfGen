const Employee = require("../lib/Employee");

test("Employee object", () => {
    const employee = new Employee("John Doe", 1234, "JohnDoe1234@email.com");

    expect(typeof(employee)).toBe("object");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("Get functions", () => {
    //Employee object
    const employee = new Employee(testName, testId, testEmail, testRole);

    //getName
    const testName = "John";
    
    expect(employee.getName()).toBe(testName);

    //getId
    const testId = 1234;

    expect(employee.getId()).toBe(testId);

    //getEmail
    const testEmail = "JohnDoe1234@email.com";

    expect(employee.getEmail()).toBe(testEmail);

    //getRole
    const testRole = "Employee";

    expect(employee.getRole()).toBe(testRole);
});
