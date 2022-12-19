//REQUIREMENTS
const inquirer = require('inquirer');
const inquirer = require('jest');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');

// USER QUESTIONS
const managerQuestions = [
  {
    type: 'input',
    message: 'Enter the team managers name:',
    name: 'userName'
  },
  {
    type: 'input',
    message: 'Eneter the team managers employee ID:',
    name: 'managerID'
  },
  {
    type: 'input',
    message: 'Enter the team managers email address:',
    name: 'managerEmail'
  },
  {
    type: 'input',
    message: 'Enter the team managers office number:',
    name: "ManagerOfficeNumber"
  }
]

// INIT FUNCTION
function init() {
  inquirer.prompt(managerQuestions)
  .then (data => {
    console.table(data);
    const teamWebsite = generateHTML(data);
    fs.writeFile('./output/teamWebsite.html', teamWebsite, (err) => {
      err ? console.error(err) : console.log('website created.')
    })
  })
}

init();

function Employee(data) {
  this.position = data.position
  this.name = data.name;
  this.id = data.id;
  this.email = data.email;
  this.officeNum = data.officeNum
}



// const inquirer = require('inquirer');
// const fs = require('fs');

// const generateHTML = ({ name, location, github, linkedin }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <header class="p-5 mb-4 header bg-light">
//     <div class="container">
//       <h1 class="display-4">Hi! My name is ${name}</h1>
//       <p class="lead">I am from ${location}.</p>
//       <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
//       <ul class="list-group">
//         <li class="list-group-item">My GitHub username is ${github}</li>
//         <li class="list-group-item">LinkedIn: ${linkedin}</li>
//       </ul>
//     </div>
//   </header>
// </body>
// </html>`;

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'input',
//       name: 'location',
//       message: 'Where are you from?',
//     },
//     {
//       type: 'input',
//       name: 'hobby',
//       message: 'What is your favorite hobby?',
//     },
//     {
//       type: 'input',
//       name: 'food',
//       message: 'What is your favorite food?',
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Enter your GitHub Username',
//     },
//     {
//       type: 'input',
//       name: 'linkedin',
//       message: 'Enter your LinkedIn URL.',
//     },
//   ])
//   .then((answers) => {
//     const htmlPageContent = generateHTML(answers);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });
