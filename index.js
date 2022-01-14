const inquirer = require('inquirer');
const {managerPrompts} = require('./Manager')

managerPrompts()

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

optionPrompt()