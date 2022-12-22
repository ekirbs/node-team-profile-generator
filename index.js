//REQUIREMENTS
const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./utils/generateHTML");

// const Employee = require('./lib/Employee');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamArray = [];

// ADD NEW EMPLOYEE QUESTION
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Choose an employee to add:",
        name: "role",
        choices: ["Engineer", "Intern", "No more employees "],
      },
    ])
    .then((answer) => {
      if (answer.role === "Engineer") {
        newEngineer();
      } else if (answer.role === "Intern") {
        newIntern();
      } else {
        const teamWebsite = generateHTML(data);
        fs.writeFile("./dist/teamWebsite.html", teamWebsite, (err) => {
          err ? console.error(err) : console.log("Website created.");
        });
      }
    });
};
// // MANAGER QUESTIONS
const newManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter the Team Manager's name:",
      name: "name",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          console.log("Try entering the Team Manager's name again:");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Enter the Team Manager's employee ID:",
      name: "id",
      validate: (id) => {
        if (id) {
          return true;
        } else {
          console.log("Try entering the Team Manager's employee ID again:");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Enter the Team Manager's email address:",
      name: "email",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Try entering the Team Manager's email address again:");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Enter the Team Manager's office number:",
      name: "officeNum",
      validate: (officeNum) => {
        if (officeNum) {
          return true;
        } else {
          console.log("Try entering the Team Manager's office number again:");
          return false;
        }
      },
    },
  ]);
  // .then(managerData => {
  //   console.table(managerData);
  //   const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNum);
  //   teamArray.push(manager);
  // })
};

// // ENGINEER QUESTIONS
const newEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter the Engineer's name:",
      name: "engineerName",
      validate: (engineerName) => {
        if (engineerName) {
          return true;
        } else {
          console.log("Try entering the Engineer's name again:");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Enter the Engineers's ID:",
      name: "engineerId",
      validate: (engineerId) => {
        if (engineerId) {
          return true;
        } else {
          console.log("Try entering the Engineer's employee ID again:");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Enter the Engineers's email address:",
      name: "engineerEmail",
      validate: (engineerEmail) => {
        if (engineerEmail) {
          return true;
        } else {
          console.log("Try entering the Engineer's email address again:");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Enter the Engineers's Github username:",
      name: "engineerGithub",
      validate: (engineerGithub) => {
        if (engineerGithub) {
          return true;
        } else {
          console.log("Try entering the Engineer's Github username again:");
          return false;
        }
      },
    },
    // {
    //   type: "list",
    //   message: "Choose an employee to add:",
    //   name: "role",
    //   choices: ["Engineer", "Intern", "Done adding employees"],
    //   validate: (role) => {
    //     if (role) {
    //       return true;
    //     } else {
    //       console.log("You must choose an option:");
    //       return false;
    //     }
    //   },
    // },
  ])
  .then((engineerData) => {
    console.table(engineerData);
    const engineer = new Engineer(
      engineerData.name,
      engineerData.id,
      engineerData.email,
      engineerData.officeNum
    );
    teamArray.push(engineer);
    addEmployee();
  });
};

// // INTERN QUESTION
const newIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter the Intern's name:",
      name: "internName",
      validate: (internName) => {
        if (internName) {
          return true;
        } else {
          console.log("Try entering the Intern's name again:");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Enter the Intern's ID:",
      name: "internId",
      validate: (internId) => {
        if (internId) {
          return true;
        } else {
          console.log("Try entering the Intern's employee ID again:");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Enter the Engineers's email address:",
      name: "internEmail",
      validate: (internEmail) => {
        if (internEmail) {
          return true;
        } else {
          console.log("Try entering the Intern's email address again:");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Enter the Intern's school:",
      name: "internSchool",
      validate: (internSchool) => {
        if (internSchool) {
          return true;
        } else {
          console.log("Try entering the Intern's school again:");
          return false;
        }
      },
    },
    // {
    //   type: "list",
    //   message: "Choose an employee to add:",
    //   name: "role",
    //   choices: ["Engineer", "Intern", "Done adding employees"],
    //   validate: (role) => {
    //     if (role) {
    //       return true;
    //     } else {
    //       console.log("You must choose an option:");
    //       return false;
    //     }
    //   },
    // },
  ])
  .then((internData) => {
    console.table(internData);
    const intern = new Intern(
      internData.name,
      internData.id,
      internData.email,
      internData.officeNum
    );
    teamArray.push(intern);
    addEmployee();
  });
};

// // INIT FUNCTION
function init() {
  newManager()
  .then((managerData) => {
    console.table(managerData);
    const manager = new Manager(
      managerData.name,
      managerData.id,
      managerData.email,
      managerData.officeNum
    );
    teamArray.push(manager);
    addEmployee();
  });
};

//     if (managerData.role === 'Engineer') {
//       newEngineer();
//     } else if (managerData.role === 'Intern') {
//       newIntern();
//     } else {
//       const teamWebsite = generateHTML(data);
//       fs.writeFile('./output/teamWebsite.html', teamWebsite, (err) => {
//         err ? console.error(err) : console.log('Website created.');
//       })
//     };
//   })
// };

init();

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

// // CONSTRUCTOR FUNCTION
// function Employee(data) {
//   this.position = data.position
//   this.name = data.name;
//   this.id = data.id;
//   this.email = data.email;
//   this.officeNum = data.officeNum
// }
