const Engineer = require('../lib/Engineer');

test("setup github via constructor", () => {
    const testValue = "derekbanister";
    const employee = new Engineer("Derek", 1, "testing@gmail.com", testValue);
    expect(employee.github).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Derek", 1, "testing@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get gitHub", () => {
    const testValue = "derekbanister";
    const employee = new Engineer("Derek", 1, "testing@gmail.com", testValue);
    expect(employee.getGitHub()).toBe(testValue);
})