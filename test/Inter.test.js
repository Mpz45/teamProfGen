const Intern = require("../lib/Intern");

test("Get Function", () => {
    const testRole = "Intern";
    const intern = new Intern("Jake", 432, "j432ke@intern.com", "Intern");

    expect(intern.getRole()).teBe(testRole);
});