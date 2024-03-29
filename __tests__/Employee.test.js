const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('Set Employee Name', () => {
    const name = "Nick"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
    // expect(employee.id).toBe(name);
});
test('Set ID', () => {
    const testId = 100;
    const employee = new Employee("Nick", testId);
    expect(employee.id).toBe(testId);
});
test('Set Email', () => { // set email is just a description for the test
    const testEmail = "nick@gmail.com" // setting an expected output value
    const employee = new Employee("Nick", 1, testEmail); // creating a class with expected value as a property
    expect(employee.email).toBe(testEmail); // testing that the method returns the expected value
});
test('get name from getName', () => {
    const testName = "Nick"
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});
test('get ID from getId', () => {
    const testId = "100"
    const employee = new Employee("Nick", testId);
    expect(employee.getId()).toBe(testId);
});
test('get email from getEmail', () => {
    const testEmail = "nick@gmail.com"
    const employee = new Employee("Nick", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});
test('getRole function', () => {
    const testRole = "employee"
    const employee = new Employee("Nick", 1, "nick@gmail.com.com");
    expect(employee.getRole()).toBe(testRole);
});

// Predefining what is expected from the funcion in employee.js. When I run the function, the outcome should match what is predefined.
