// GLOBAL VARIABLES (REQUIREMENT & TEST EMPLOYEE)
const Manager = require("../lib/Manager");
const testManager = new Manager('Stanley Jobsen', '189009', 'swordfish@movie.com', '43');

// TESTS
test ('if the values for the constructed onject match the inputs given', () => {
  expect(testManager.name).toBe('Stanley Jobsen');
  expect(testManager.id).toBe('189009');
  expect(testManager.email).toBe('swordfish@movie.com');
  expect(testManager.officeNumber).toBe('43');
});

test('if the getName() method returns the name', () => {
  expect(testManager.getName()).toBe('Stanley Jobsen');
});

test('if the getId() method returns the id', () => {
  expect(testManager.getId()).toBe('189009');
});

test('if the getEmail() method returns the email', () => {
  expect(testManager.getEmail()).toBe('swordfish@movie.com');
});

test('if the getRole() method returns the employee role', () => {
  expect(testManager.getRole()).toBe('Manager');
});

test('if the getOfficeNumber() method returns the office number', () => {
  expect(testManager.getOfficeNumber()).toBe('43');
});