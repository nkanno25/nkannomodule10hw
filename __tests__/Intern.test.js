const Intern = require("../lib/Intern");

test("setup school via constructor argument", () => {
    const testValue = "University California at Berkeley";
    const employee = new Intern("Nick", 1, "nick@gmail.com", testValue);
    expect(employee.school).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Intern";
    const employee = new Intern("Nick", 1, "nick@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("getschool", () => {
    const testValue = "University California at Berkeley";
    const employee = new Intern("Nick", 1, "nick@gmail.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});