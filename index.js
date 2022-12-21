//REQUIREMENTS
const inquirer = require('inquirer');
// const inquirer = require('jest');
const fs = require('fs');

const generateHTML = require('./utils/generateHTML');

// const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const { listenerCount } = require('process');

const teamArray = [];

// ADD NEW EMPLOYEE QUESTION
const addEmployee = [
  {
    type: 'list',
    message: 'Choose an employee to add:',
    name: 'role',
    choices: [
      'Engineer',
      'Intern',
      'Manager',
      'N/A'
    ]
  }
]
const questions = {}
// // MANAGER QUESTIONS
const managerQuestions = [
  {
    type: 'input',
    message: 'Enter the Team Manager\'s name:',
    name: 'name',
    validate: name => {
      if (name) {
        return true;
      } else {
        console.log ("Try entering the Team Manager\'s name again:");
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'Enter the Team Manager\'s employee ID:',
    name: 'id',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log ("Try entering the Team Manager\'s employee ID again:");
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'Enter the Team Manager\'s email address:',
    name: 'email',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log ("Try entering the Team Manager\'s email address again:");
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'Enter the Team Manager\'s office number:',
    name: "officeNum",
    validate: officeNumInput => {
      if (officeNumInput) {
        return true;
      } else {
        console.log ("Try entering the Team Manager\'s office number again:");
        return false;
      }
    }
  },
  {
    type: 'list',
    message: 'Choose an employee to add:',
    name: 'role',
    choices: [
      'Engineer',
      'Intern',
      'Done adding employees'
    ]
  }
]

// // ENGINEER QUESTIONS
const engineerQuestions = [
  {
    type: 'input',
    message: 'Enter the Engineer\'s name:',
    name: 'engineerName',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log ("Try entering the Engineer\'s name again:");
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'Enter the Engineers\'s ID:',
    name: 'engineerId',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log ("Try entering the Engineer\'s employee ID again:");
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'Enter the Engineers\'s email address:',
    name: 'engineerEmail',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log ("Try entering the Engineer\'s email address again:");
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'Enter the Engineers\'s Github username:',
    name: "engineerGithub",
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log ("Try entering the Engineer\'s Github username again:");
        return false;
      }
    }
  },
  {
    type: 'list',
    message: 'Choose an employee to add:',
    name: 'role',
    choices: [
      'Engineer',
      'Intern',
      'Done adding employees'
    ]
  }
]

// // INTERN QUESTION
const internQuestions = [
  {
    type: 'input',
    message: 'Enter the Intern\'s name:',
    name: 'internName',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log ("Try entering the Intern\'s name again:");
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'Enter the Intern\'s ID:',
    name: 'internId',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log ("Try entering the Intern\'s employee ID again:");
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'Enter the Engineers\'s email address:',
    name: 'internEmail',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log ("Try entering the Intern\'s email address again:");
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'Enter the Intern\'s school:',
    name: "internSchool",
    validate: schoolInput => {
      if (schoolInput) {
        return true;
      } else {
        console.log ("Try entering the Intern\'s school again:");
        return false;
      }
    }
  },
  {
    type: 'list',
    message: 'Choose an employee to add:',
    name: 'role',
    choices: [
      'Engineer',
      'Intern',
      'Done adding employees'
    ]
  }
]

// // INIT FUNCTION
function init() {
  inquirer.prompt(managerQuestions)
  .then (managerData => {
    console.table(managerData);
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNum);
    teamArray.push(manager);
    if (managerData.role === 'Engineer') {
      inquirer.prompt(engineerQuestions);
    } else if (managerData.role === 'Intern') {
      inquirer.prompt(internQuestions);
    } else {
      const teamWebsite = generateHTML(data);
      fs.writeFile('./output/teamWebsite.html', teamWebsite, (err) => {
        err ? console.error(err) : console.log('Website created.');
      })
    };
  })
};

//     inquirer.prompt(addEmployee)
//     .then (employeeChoice => {
//       console.log(employeeChoice)
//       if (employeeChoice === 'Engineer') {
//         inquirer.prompt(engineerQuestions)
//         .then (engineerData => {
//           console.table(engineerData);
//           const newEngineer = new Engineer (engineerData);
//           teamArray.push(newEngineer);
//           inquirer.prompt(addEmployee)
//         })
//       } else if (employeeChoice === 'Intern') {
//         inquirer.prompt(internQuestions)
//         .then (internData => {
//           console.table(internData);
//           const newIntern = new Intern (internData);
//           teamArray.push(newIntern);
//           inquirer.prompt(addEmployee)
//         }) 
//       } else {
//         const teamWebsite = generateHTML(data);
//         fs.writeFile('./output/teamWebsite.html', teamWebsite, (err) => {
//           err ? console.error(err) : console.log('website created.')
//         })
//       }
//     })
//   })
// }

init();

// // CONSTRUCTOR FUNCTION
// function Employee(data) {
//   this.position = data.position
//   this.name = data.name;
//   this.id = data.id;
//   this.email = data.email;
//   this.officeNum = data.officeNum
// }