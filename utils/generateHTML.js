const generateHTML = (teamArray) => {
  console.table(teamArray);
  const teamHTML = [];

  const generateManager = (manager) => {
    let managerHTML = 
      `<div>
        <h1>Manager</h1>
        <h2>Name: ${manager.name}</h2>
        <h3>ID: ${manager.id}</h3>
        <h3>Email: <span id='email'><a href="mailto:${manager.email}">${manager.email}</a></span></h3>
        <h3>Office Number: ${manager.officeNum}</h3>
      </div>`;
    teamHTML.push(managerHTML);
  };

  const generateEngineer = (engineer) => {
    let engineerHTML = 
      `<div>
        <h1>Engineer</h1>
        <h2>Name: ${engineer.name}</h2>
        <h3>ID: ${engineer.id}</h3>
        <h3>Email: <span id='email'><a href="mailto:${engineer.email}">${engineer.email}</a></span></h3>
        <h3>Github: <a target="_blank" href"https://github.com/${engineer.github}">${engineer.github}</a></h3>
      </div>`;
    teamHTML.push(engineerHTML);
  };

  const generateIntern = (intern) => {
    let internHTML = 
      `<div>
        <h1>Intern</h1>
        <h2>Name: ${intern.name}</h2>
        <h3>ID: ${intern.id}</h3>
        <h3>Email: <span id='email'><a href="mailto:${intern.email}">${intern.email}</a></span></h3>
        <h3>School: ${intern.school}</h3>
      </div>`;
    teamHTML.push(internHTML);
  };

  for (let i = 0; i < teamArray.length; i++) {
    if (teamArray[i].getRole === "Manager") {
      generateManager(teamArray[i]);
    }
    if (teamArray[i].getRole === "Engineer") {
      generateEngineer(teamArray[i]);
    }
    if (teamArray[i].getRole === "Intern") {
      generateIntern(teamArray[i]);
    }
  }

  // teamHTML.join('');
//   return teamHTML.join("");
// };

// function generateHTML() {
  // create template literal for html file
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

      <header></header>

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
}

module.exports = generateHTML;
