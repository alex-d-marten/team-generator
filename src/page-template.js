// import required modules
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern');

// function to generate the manager content. We are using the Manager class here to get the values, html template is returned as a result
const generateManager = managerData => {
    const manager = new Manager(managerData.managerName, managerData.managerID, managerData.managerEmail, managerData.managerOfficeNumber);
    return `
    <section class="container px-3 py-4">
        <div class="row  row-cols-sm-1 row-cols-md-3 row-cols-lg-4 justify-content-center">
          <div class="col bg-light shadow m-2 p-0">
            <div class="bg-primary text-light p-2">
              <h2>${manager.getName()}</h2>
              <h3><i class="fas fa-hands-helping px-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="bg-white mx-3 my-5">
              <p class="border mb-0 p-2">ID: ${manager.getId()}</p>
              <p class="border mb-0 p-2">Email: <a href="mailto:${manager.getEmail()}" target="_blank">${manager.getEmail()}</a></p>
              <p class="border mb-0 p-2">Office Number: ${manager.getOfficeNumber()}</p>
            </div>
          </div>
    `
}

// function to generate the engineer content. The Engineer class is being used here to make a new Engineer each time if multiple are present. 
const generateEngineer = engineerData => {
    // declare array here for cleaner looking code
    const engineerArr = engineerData.engineers;
    if(!engineerArr) {
        return ''
    }

    // generate the html for the engineer and save it
    const engineerHTML = engineerArr.map((element) => {
        const engineer = new Engineer(element.engineerName, element.engineerID, element.engineerEmail, element.engineerGithub)
        return `
            <div class="col bg-light shadow m-2 p-0">
                <div class="bg-primary text-light p-2">
                    <h2>${engineer.getName()}</h2>
                    <h3><i class="fas fa-headset px-2"></i>${engineer.getRole()}</h3>
                </div>
                <div class="bg-white mx-3 my-5">
                    <p class="border mb-0 p-2">ID: ${engineer.getId()}</p>
                    <p class="border mb-0 p-2">Email: <a href="mailto:${engineer.getEmail()}" target="_blank">${engineer.getEmail()}</a></p>
                    <p class="border mb-0 p-2">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
                </div>
            </div>
    `
    // need this join or else will have floating commas on html
    }).join('')
    return engineerHTML;
}

// function to generate the intern content. The Intern class is being used here to make a new Intern each time if multiple are present. 
const generateIntern = internData => {
    const internArr = internData.interns;

    if(!internArr) {
        return ''
    }

    const internHTML = internArr.map((element) => {
        console.log(element)
        const intern = new Intern(element.internName, element.internID, element.internEmail, element.internSchool)
        console.log(intern.getName())
        return `
            <div class="col bg-light shadow m-2 p-0">
                <div class="bg-primary text-light p-2">
                    <h2>${intern.getName()}</h2>
                    <h3><i class="fas fa-graduation-cap px-2"></i>${intern.getRole()}</h3>
                </div>
                <div class="bg-white mx-3 my-5">
                    <p class="border mb-0 p-2">ID: ${intern.getId()}</p>
                    <p class="border mb-0 p-2">Email: <a href="mailto:${intern.getEmail()}" target="_blank">${intern.getEmail()}</a></p>
                    <p class="border mb-0 p-2">School: ${intern.getSchool()}</p>
                </div>
            </div>
    `
    }).join('')
    return internHTML;
}

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="styleToBe.css">
    </head>
    <body class="m-2 border border-2 rounded border-dark">
        <header class='d-flex justify-content-center m-3 p-5 bg-danger text-light'>
            <h1>My Team</h1>
        </header>
        ${generateManager(templateData)}
        ${generateEngineer(templateData)}
        ${generateIntern(templateData)}
    `
}