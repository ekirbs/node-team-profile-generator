const Engineer = require("../lib/Engineer")

//creat an instance of an employee
test ('create an instance of an engineer', () => {
  const person = new Engineer(); //declare variables
  expect(typeof(person)).toBe('object')//declare what you expect
})