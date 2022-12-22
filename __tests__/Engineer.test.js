const Engineer = require("../lib/Engineer");
const testEngineer = new Engineer('Stanley Jobsen', '189009', 'swordfish@movie.com', 'codeFish');

//creat an instance of an employee
// describe ("this test the employee object", () => {
  test ('if the values for the constructed onject match the inputs given', () => {
  expect(testEngineer.name).toBe('Stanley Jobsen');
  expect(testEngineer.id).toBe('189009');
  expect(testEngineer.email).toBe('swordfish@movie.com');
  expect(testEngineer.github).toBe('codeFish');
});

test('if the getName() method returns the name', () => {
  expect(testEngineer.getName()).teBe('Stanley Jobsen');
});

test('if the getId() method returns the id', () => {
  expect(testEngineer.getId()).toBe('189009');
});

test('if the getEmail() method returns the email', () => {
  expect(testEngineer.getEmail()).toBe('swordfish@movie.com');
});

test('if the getRole() method returns the employee role', () => {
  expect(testEngineer.getRole()).toBe('Engineer');
});

test('if the getSchool() method returns the engineer\'s Github', () => {
  expect(testEngineer.getGithub()).toBe('codeFish');
});

// //creat an instance of an employee
// test ('create an instance of an engineer', () => {
//   const person = new Engineer(); //declare variables
//   expect(typeof(person)).toBe('object')//declare what you expect
// })


// Import Engineer class with require()

// Test setting github account
test("", () => {
  // Assign github account to a new variable
  // Instantiate the Employee class, passing an name and an id and an email and the github variable as auguments, to create an object and assign it to an new variable
  // Export the github of the employee object to be equal to the value of the github variable
});

// Test get role method
test("", () => {
  // Assign "Engineer" to a new role variable
  // Instantiate the Employee class, passing an employee name and an id and an email and a github account name as auguments, to create an object and assign it to an new variable
  // Export getRole() to return the role to be equal to the value of the role variable
});

// Test get github method
test("", () => {
  // Assign github account to a new variable
  // Instantiate the Employee class, passing an employee name and an id and an email and the github variable as auguments, to create an object and assign it to an new variable
  // Expect getGithub() to return the github  name to be equal to the value of the github variable
});
