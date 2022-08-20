const generateCard = function (team) {

    let roleInfo;

    let teamString = ``;
    for (let i = 0; i < team.length; i++) {

        console.log(team[i])
    
    if (team[i].getRole() === "Manager") {
        roleInfo = `Office Number: ${team[i].officeNumber}`
    } else if (team[i].getRole() === "Engineer") {
        roleInfo = `GitHub Username: <a href="https://github.com/${team[i].github}" target="_blank">${team[i].github}</a>`
    } else if (team[i].getRole() === "Intern") {
        roleInfo = `School: ${team[i].school}`
    }

    const card = `
    
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <div>
            <h4 class="card-title">${team[i].name}</h4>
            <h4 class="card-subtitle mb-2 text-muted"> ${team[i].getRole()}</h4>
        </div>
        <div>
            <ul>
                <li>Employee ID: ${team[i].id}</li>
                <li>Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                <li>${roleInfo}</i>
            </u>
        </div>
    </div>
    </div>
`

// I'm creating a card with details unique to each employee type. Using the if/else statement, I'm filtering through employee options, that passes information into my variable which populates the html data that displays on the webpage.

teamString = teamString + card;

}

return teamString;

}

const generateHTML = function (teamString) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Portfolio</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">

</head>
<body>
<div>
   <h1>Nick Kanno's Team</h1>
</div>
<div class = "container">
   <div class="row">
        ${generateCard(teamString)} 
    </div>
</div>
</body>
</html>`

}

exports.generateHTML = generateHTML;