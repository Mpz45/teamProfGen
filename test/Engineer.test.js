const Engineer = require("../lib/Engineer");

test("Get functions", () => {
    const engineer = new Engineer("Jane Doe", 987, "jane987@engineer.com", "Engineer");
    //getGithub
    const testGithub = "Jane987";

    expect(engineer.getGithub()).toBe(testGithub);
    
    //getRole
    const testRole = "Engineer";

    expect(engineer.getRole()).toBe(testRole);
});