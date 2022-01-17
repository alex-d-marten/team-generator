const inquirer = require('inquirer')
const generatePage = require('../src/page-template')
const { writeFile } = require('../utils/generate-html')

function Prompts() {
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
            },
            {
                type: 'confirm',
                name: 'addEngineer',
                message: 'Would you like to add an Engineer to your team?',
                default: false
            },
            {
                type: 'confirm',
                name: 'addIntern',
                message: 'Would you like to add an Intern to your team?',
                default: false
            }
        ])
    }
    const engineerPrompts = promptData => {
        if(promptData.addEngineer) {
            if(!promptData.engineers) {
                promptData.engineers = [];
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
                promptData.engineers.push(engineerAnswers);
                if(engineerAnswers.confirmAddAnotherEngineer) {
                    return engineerPrompts(promptData)
                } else {
                    return promptData
                }
            })
        } else {
            return promptData
        }
    }
    
    const internPrompts = promptData => {
        if(promptData.addIntern) {
            if(!promptData.interns) {
                promptData.interns = [];
            }
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
                },
                {
                    type: 'confirm',
                    name: 'confirmAddAnotherIntern',
                    message: 'Would you like to add another intern?',
                    default: false
                }
            ])
            .then(internAnswers => {
                promptData.interns.push(internAnswers);
                if(internAnswers.confirmAddAnotherIntern) {
                    return internPrompts(promptData)
                } else {
                    return promptData
                }
            })
        } else {
            return promptData
        }
        
    }
    
    managerPrompts()
        .then(engineerPrompts)
        .then(internPrompts)
        .then(htmlData => {
            console.log(htmlData)
            return generatePage(htmlData)
        })
        .then(pageHTML => {
            return writeFile(pageHTML)
        })
}

module.exports = Prompts;