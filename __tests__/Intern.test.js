const Intern = require("../lib/Intern");
const testIntern = new Intern('Stanley Jobsen', '189009', 'swordfish@movie.com', 'Rutgers');

test ('if the values for the constructed onject match the inputs given', () => {
  expect(testIntern.name).toBe('Stanley Jobsen');
  expect(testIntern.id).toBe('189009');
  expect(testIntern.email).toBe('swordfish@movie.com');
  expect(testIntern.school).toBe('Rutgers');
});

test('if the getName() method returns the name', () => {
  expect(testIntern.getName()).toBe('Stanley Jobsen');
});

test('if the getId() method returns the id', () => {
  expect(testIntern.getId()).toBe('189009');
});

test('if the getEmail() method returns the email', () => {
  expect(testIntern.getEmail()).toBe('swordfish@movie.com');
});

test('if the getRole() method returns the employee role', () => {
  expect(testIntern.getRole()).toBe('Intern');
});

test('if the getSchool() method returns the intern\'s school', () => {
  expect(testIntern.getSchool()).toBe('Rutgers');
});