const inquirer = require('inquirer');
const {managerPrompts, optionPrompt} = require('./prompts')

managerPrompts()
    .then(optionPrompt)






// optionPrompt()