const inquirer = require('inquirer');

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

const engineerOptionPrompt = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'addEngineer',
            message: 'Would you like to add an Engineer to your team?',
            default: false
        }
    ])
}

const internOptionPrompt = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'addIntern',
            message: 'Would you like to add an Intern to your team?',
            default: false
        }
    ])
}

const engineerPrompts = engineerPromptData => {
    if(!engineerPromptData.engineers) {
        engineerPromptData.engineers = [];
    }

    return inquirer.prompt([
        {
           type: 'input',
           name: 'engineerName',
           message: "What is the name of the Engineer?",
           validate: engineerNameInput => {
               if(engineerNameInput) {
                   return true
               } else {
                   console.log('Please enter a name!')
                   return false
               }
           }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "What is the engineer's ID?",
            validate: engineerIDInput => {
                if(engineerIDInput) {
                    return true
                } else {
                    console.log('Please enter an ID!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the email of the engineer?",
            validate: engineerEmailInput => {
                if(engineerEmailInput) {
                    return true
                } else {
                    console.log("Please enter an email for the engineer!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the GitHub of the engineer?',
            validate: engineerGithubInput => {
                if(engineerGithubInput) {
                    return true
                } else {
                    console.log("Please enter a GitHub for the engineer!")
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddAnotherEngineer',
            message: 'Would you like to add another engineer?',
            default: false
        }
    ])
    .then(engineerAnswers => {
        engineerPromptData.engineers.push(engineerAnswers);
        if(engineerAnswers.confirmAddAnotherEngineer) {
            return engineerPrompts(engineerPromptData)
        } else {
            return engineerPromptData
        }
    })
}

const internPrompts = () => {
    return inquirer.prompt([
        {
           type: 'input',
           name: 'internName',
           message: "What is the name of the Intern?",
           validate: internNameInput => {
               if(internNameInput) {
                   return true
               } else {
                   console.log('Please enter a name!')
                   return false
               }
           }
        },
        {
            type: 'input',
            name: 'internID',
            message: "What is the intern's ID?",
            validate: internIDInput => {
                if(internIDInput) {
                    return true
                } else {
                    console.log('Please enter an ID!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the email of the intern?",
            validate: internEmailInput => {
                if(internEmailInput) {
                    return true
                } else {
                    console.log("Please enter an email for the intern!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school does the intern attend?',
            validate: internSchoolInput => {
                if(internSchoolInput) {
                    return true
                } else {
                    console.log("Please enter the school the intern attends!")
                    return false
                }
            }
        }
    ])
}

module.exports = { managerPrompts, engineerOptionPrompt, internOptionPrompt, engineerPrompts, internPrompts }