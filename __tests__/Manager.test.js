const Manager = require('../lib/Manager');


test("setup office number", () => {
    const testValue = "10";
    const employee = new Manager("Brian", 1, "brian@gmail.com", testValue);
    expect(employee.officeNumber).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Manager";
    const employee = new Manager("Brian", 1, "brian@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})