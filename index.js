const inquirer = require('inquirer');
const {managerPrompts, optionPrompt} = require('./prompts')

managerPrompts()
    .then(managerData => {
        console.log(managerData)
    })
    .then(optionPrompt)
    .then(promptData => {
        if(promptData.addEngineer) {
            console.log('You want to add an enigineer!')
        }
        if(promptData.addIntern) {
            console.log('You want to add an intern!')
        }
    })





// optionPrompt()