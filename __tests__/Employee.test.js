const Employee = require("../lib/Employee");
const testEmployee = new Employee('Stanley Jobsen', '189009', 'swordfish@movie.com');

test ('if an Employee instance is instantiated', () => {
  expect(typeof testEmployee).toEqual('object');
})

test ('if the values for the constructed object match the inputs given', () => {
  expect(testEmployee.name).toBe('Stanley Jobsen');
  expect(testEmployee.id).toBe('189009');
  expect(testEmployee.email).toBe('swordfish@movie.com');
});

test('if the getName() method returns the name', () => {
  expect(testEmployee.getName()).toBe('Stanley Jobsen');
});

test('if the getId() method returns the id', () => {
  expect(testEmployee.getId()).toBe('189009');
});

test('if the getEmail() method returns the email', () => {
  expect(testEmployee.getEmail()).toBe('swordfish@movie.com');
});

test('if the getRole() method returns the employee role', () => {
  expect(testEmployee.getRole()).toBe('Employee');
});