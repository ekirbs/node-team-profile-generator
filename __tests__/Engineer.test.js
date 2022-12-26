// GLOBAL VARIABLES (REQUIREMENT & TEST EMPLOYEE)
const Engineer = require("../lib/Engineer");
const testEngineer = new Engineer('Stanley Jobsen', '189009', 'swordfish@movie.com', 'codeFish');

// TESTS
test ('if the values for the constructed onject match the inputs given', () => {
  expect(testEngineer.name).toBe('Stanley Jobsen');
  expect(testEngineer.id).toBe('189009');
  expect(testEngineer.email).toBe('swordfish@movie.com');
  expect(testEngineer.github).toBe('codeFish');
});

test('if the getName() method returns the name', () => {
  expect(testEngineer.getName()).toBe('Stanley Jobsen');
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