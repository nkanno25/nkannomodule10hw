const Engineer = require('../lib/Engineer');

test("setting up github via constructor", () => {
    const testValue = "nosremetnarg";
    const employee = new Engineer("Grant", 1, "test@cheese.com", testValue);
    expect(employee.github).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Grant", 1, "test@cheese.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get gitHub", () => {
    const testValue = "nosremetnarg";
    const employee = new Engineer("Grant", 1, "test@cheese.com", testValue);
    expect(employee.getGitHub()).toBe(testValue);
})