const Employee = require("../lib/Employee")

//creat an instance of an employee
test ('create an instance of an employee', () => {
  const title = new Employee(); //declare variables
  expect(typeof(title)).toBe('object')//declare what you expect
})