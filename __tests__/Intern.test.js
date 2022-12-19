const Intern = require("../lib/Intern")

//creat an instance of an employee
test ('create an instance of an intern', () => {
  const person = new Intern(); //declare variables
  expect(typeof(person)).toBe('object')//declare what you expect
})