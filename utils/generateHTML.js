function generateHTML({userName, location, bio, linkedin, github}) {
  // create template literal for html file
  const htmlTemplate = 
  `<!DOCTYPE html>
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
    
        for (let i = 0; i < teamArray.length; i++) {
          if (teamArray[i].getRole() === 'Manager') {
            generateManager(teamArray[i]);
          }
          if (teamArray[i].getRole() === 'Engineer') {
            generateEngineer(teamArray[i]);
          }
          if (teamArray[i].getRole() === 'Intern') {
            generateIntern(teamArray[i]);
          }
        }
        
       fs write
       <div> info

      </main>

      <footer></footer>
    
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
      <script src="./assets/js/script.js"></script>

    </body>

  </html>`;
  
    return htmlTemplate;
  }
  
  module.exports = generateHTML;