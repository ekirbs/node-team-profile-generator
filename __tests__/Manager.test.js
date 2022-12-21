const Manager = require("../lib/Manager");
const testManager = new Manager('Stanley Jobsen', '189009', 'swordfish@movie.com', '43');

//creat an instance of an employee
// describe ("this test the employee object", () => {
  test ('if the values for the constructed onject match the inputs given', () => {
  expect(testManager.name).toBe('Stanley Jobsen');
  expect(testManager.id).toBe('189009');
  expect(testManager.email).toBe('swordfish@movie.com');
  expect(testManager.officeNumber).toBe('43');
});

test('if the getName() method returns the name', () => {
  expect(testManager.getName()).teBe('Stanley Jobsen');
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



// const { default: test } = require("node:test");
// const Manager = require("../lib/Manager")

// //creat an instance of an employee
// test ('create an instance of a manager', () => {
//   const person = new Manager(); //declare variables
//   expect(typeof(person)).toBe('object')//declare what you expect
// })

// test ('', () => {
  
// })