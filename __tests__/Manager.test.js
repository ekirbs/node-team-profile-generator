const Manager = require("../lib/Manager")

//creat an instance of an employee
test ('create an instance of a manager', () => {
  const person = new Manager(); //declare variables
  expect(typeof(person)).toBe('object')//declare what you expect
})