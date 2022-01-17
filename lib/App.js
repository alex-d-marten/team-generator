const Prompts = require('./Prompts')


function App() {
    App.prototype.initializePrompts = function() {
        Prompts()
    }
}

module.exports = App