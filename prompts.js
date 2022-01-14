const inquirer = require('inquirer');

const optionPrompt = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'addEngineer',
            message: 'Would you like to add an Engineer to your team?'
        },
        {
            type: 'confirm',
            name: 'addIntern',
            message: 'Would you like to add an Intern to your team?'
        }
    ])
}

const managerPrompts = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
            validate: managerNameInput => {
                if(managerNameInput) {
                    return true
                } else {
                    console.log("Please enter a manager name!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the team manager's ID?",
            validate: managerIDInput => {
                if(managerIDInput) {
                    return true
                } else {
                    console.log("Please enter a manager ID!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?",
            validate: managerEmailInput => {
                if(managerEmailInput) {
                    return true
                } else {
                    console.log("Please enter a manager email!")
                    return false
                }
            }
            
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the team manager's office number?",
            validate: officeNumberInput => {
                if(isNaN(officeNumberInput)) {
                    return "Please enter a whole number for the office number!"
                } else {
                    return true
                }
            }

        }
    ])
}



module.exports = { managerPrompts, optionPrompt }