let teamHTML = "";

const generateManager = (manager) => {
  let managerHTML = `<div>
      <h2>Manager</h2>
      <h3>Name: ${manager.name}</h3>
      <h4>ID: ${manager.id}</h4>
      <h4>Email: <span id='email'><a href="mailto:${manager.email}">${manager.email}</a></span></h4>
      <h4>Office Number: ${manager.officeNum}</h4>
    </div>`;
  teamHTML += managerHTML;
};

const generateEngineer = (engineer) => {
  let engineerHTML = `<div>
      <h2>Engineer</h2>
      <h3>Name: ${engineer.name}</h3>
      <h4>ID: ${engineer.id}</h4>
      <h4>Email: <span id='email'><a href="mailto:${engineer.email}">${engineer.email}</a></span></h4>
      <h4>Github: <a target="_blank" href="https://github.com/${engineer.github}">https://github.com/${engineer.github}</a></h4>
    </div>`;
  teamHTML += engineerHTML;
};

const generateIntern = (intern) => {
  let internHTML = `<div>
      <h2>Intern</h2>
      <h3>Name: ${intern.name}</h3>
      <h4>ID: ${intern.id}</h4>
      <h4>Email: <span id='email'><a href="mailto:${intern.email}">${intern.email}</a></span></h4>
      <h4>School: ${intern.school}</h4>
    </div>`;
  teamHTML += internHTML;
};

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

  const htmlTemplate = `<!DOCTYPE html>
    <html lang="en">

    <head>

      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="Description" content="Enter your description here"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
      <link rel="stylesheet" href="assets/css/style.css">

      <title>Team Website</title>

    </head>

    <body>

      <header>
        <h1>Dev Team</h1>
      </header>

      <main>
    
      ${teamHTML}

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
