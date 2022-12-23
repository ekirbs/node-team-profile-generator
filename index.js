//REQUIREMENTS
const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./utils/generateHTML");

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
        const teamWebsite = generateHTML(teamArray);
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
  ])
};

// // ENGINEER QUESTIONS
const newEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter the Engineer's name:",
      name: "name",
      validate: (name) => {
        if (name) {
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
      name: "id",
      validate: (id) => {
        if (id) {
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
      name: "email",
      validate: (email) => {
        if (email) {
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
      name: "github",
      validate: (github) => {
        if (github) {
          return true;
        } else {
          console.log("Try entering the Engineer's Github username again:");
          return false;
        }
      },
    },
  ])
  .then((engineerData) => {
    console.table(engineerData);
    const engineer = new Engineer(
      engineerData.name,
      engineerData.id,
      engineerData.email,
      engineerData.github
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
      name: "name",
      validate: (name) => {
        if (name) {
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
      name: "id",
      validate: (id) => {
        if (id) {
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
      name: "email",
      validate: (email) => {
        if (email) {
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
      name: "school",
      validate: (school) => {
        if (school) {
          return true;
        } else {
          console.log("Try entering the Intern's school again:");
          return false;
        }
      },
    },
  ])
  .then((internData) => {
    console.table(internData);
    const intern = new Intern(
      internData.name,
      internData.id,
      internData.email,
      internData.school
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

init();