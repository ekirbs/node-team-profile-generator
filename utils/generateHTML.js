// GENERATED HTML STRING
let managerTeamHTML = "";
let engineerTeamHTML = "";
let internTeamHTML = "";

// HTML GENERATION FUNCTIONS
const generateManager = (manager) => {
  let managerHTML = 
`<div class="col-12">
  <div class="card border-dark m-3 text-center mx-auto" style="max-width: 30rem;">
    <div class="card-header">Manager</div>
    <i class="fas fa-chess-king m-2" style="font-size:3rem;color:lightblue;text-shadow:2px 2px 4px #000000;"></i>
    <div class="card-body">
      <h5 class="card-title">Name: ${manager.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">ID: ${manager.id}</h6>
      <p class="card-text">Email: <span id='email'><a href="mailto:${manager.email}" class="card-link">${manager.email}</a></span></p>
      <p class="card-text">Office Number: ${manager.officeNumber}</p>
    </div>
  </div>
</div>`
managerTeamHTML += managerHTML;
};

const generateEngineer = (engineer) => {
  let engineerHTML = 
`<div class="col-xs-6 col-sm-4">
  <div class="card border-dark m-3 text-center mx-auto" style="max-width: 25rem;">
  <div class="card-header">Engineer</div>
  <i class="fas fa-chess-knight m-2" style="font-size:3rem;color:lightgreen;text-shadow:2px 2px 4px #000000;"></i>
    <div class="card-body">
      <h5 class="card-title">Name: ${engineer.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">ID: ${engineer.id}</h6>
      <p class="card-text">Email: <span id='email'><a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a></span></p>
      <p class="card-text">Github: <a target="_blank" href="https://github.com/${engineer.github}">https://github.com/${engineer.github}</a></p>
    </div>
  </div>
</div>`
engineerTeamHTML += engineerHTML;
};

const generateIntern = (intern) => {
  let internHTML = 
`<div class="col-xs-6 col-sm-3">
  <div class="card border-dark m-3 text-center mx-auto" style="max-width: 20rem;">
  <div class="card-header">Intern</div>
  <i class="fas fa-chess-pawn m-2" style="font-size:3rem;color:tomato;text-shadow:2px 2px 4px #000000;"></i>
    <div class="card-body">
      <h5 class="card-title">Name: ${intern.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">ID: ${intern.id}</h6>
      <p class="card-text">Email: <span id='email'><a href="mailto:${intern.email}" class="card-link">${intern.email}</a></span></p>
      <p class="card-text">School: ${intern.school}</p>
    </div>
  </div>
</div>`
internTeamHTML += internHTML;
};

// FOR LOOP TO INVOKE HTML GENERATION FUNCTIONS FOR EACH TEAM MEMBER IN ARRAY
const generateHTML = (teamArray) => {
  console.table(teamArray);
  

  for (let i = 0; i < teamArray.length; i++) {
    if (teamArray[i].getRole() === "Manager") {
      console.log("adding manager to html");
      generateManager(teamArray[i]);
    }
    if (teamArray[i].getRole() === "Engineer") {
      console.log("adding engineer to html");
      generateEngineer(teamArray[i]);
    }
    if (teamArray[i].getRole() === "Intern") {
      console.log("adding intern to html");
      generateIntern(teamArray[i]);
    }
  };

  // HTML TEMPLATE
  const htmlTemplate = `<!DOCTYPE html>
    <html lang="en">

    <head>

      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="Description" content="Team profile html page generated through node commands."/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
      <link rel="stylesheet" href="assets/css/style.css">

      <title>Team Website</title>

    </head>

    <body>

      <header>
        <nav class="navbar navbar-dark bg-primary">
          <span class="navbar-brand mb-0 h1">Dev Team</span>
        </nav>
      </header>

      <main>

        <div class="container-fluid">

          <div class="row">
            ${managerTeamHTML}
          </div>

          <div class="row">
            ${engineerTeamHTML}
          </div>

          <div class="row">
            ${internTeamHTML}
          </div>

        </div>

      </main>

      <footer></footer>
    
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
      <script src="./assets/js/script.js"></script>

    </body>

  </html>`;

  return htmlTemplate;
};

module.exports = generateHTML;
