// importing the required modules
const inquirer = require('inquirer')
const generatePage = require('../src/page-template')
const { writeFile } = require('../utils/generate-html')

// main prompt function containing all prompts
function Prompts() {
    // manager prompts function, this is presented to the user first and is required.
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
            // adding in the options for adding interns or engineers here, these answers are used to prompt the user accordingly
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
    
    // engineer prompts function to gather information about the team engineers if needed. 
    const engineerPrompts = promptData => {
        // checking to see if the user elected to add an engineer in the first prompt, if so then proceed with prompts for engineers.
        if(promptData.addEngineer) {
            // declaring an empty engineers array in the existing data object for the prompts
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
                    message: 'What is the GitHub username of the engineer?',
                    validate: engineerGithubInput => {
                        if(engineerGithubInput) {
                            return true
                        } else {
                            console.log("Please enter a GitHub for the engineer!")
                            return false
                        }
                    }
                },
                // prompt to add another engineer or not
                {
                    type: 'confirm',
                    name: 'confirmAddAnotherEngineer',
                    message: 'Would you like to add another engineer?',
                    default: false
                }
            ])
            // function to push the answers to the data object and also to prompt for more input if user elected to add more engineers. If not then the data object is returned back
            .then(engineerAnswers => {
                promptData.engineers.push(engineerAnswers);
                if(engineerAnswers.confirmAddAnotherEngineer) {
                    return engineerPrompts(promptData)
                } else {
                    return promptData
                }
            })
        // if user elected to not add an engineer we need to return the data back or else the promise chain will break
        } else {
            return promptData
        }
    }
    
    // intern prompts to gather information about the team interns
    const internPrompts = promptData => {
        // if elected to add an intern in the first prompt then proceed. Initiating an empty array for the interns on the data object.
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
            // push the answers to the data object array. If user wanted too add another then return back to the internPrompts start, otherwise return the data
            .then(internAnswers => {
                promptData.interns.push(internAnswers);
                if(internAnswers.confirmAddAnotherIntern) {
                    return internPrompts(promptData)
                } else {
                    return promptData
                }
            })
        // prompt data must be returned to avoid breaking the promise
        } else {
            return promptData
        }
    }
    
    // call managerPrompts and then proceed to call engineer and intern prompts. Once all are answered, the html template is generated and then written to a file.
    managerPrompts()
        .then(engineerPrompts)
        .then(internPrompts)
        .then(htmlData => {
            return generatePage(htmlData)
        })
        .then(pageHTML => {
            return writeFile(pageHTML)
        })
}

module.exports = Prompts;