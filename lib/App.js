// import required modules
const Prompts = require('./Prompts')

// function to initialize the prompts to the user
function App() {
    App.prototype.initializePrompts = function() {
        Prompts()
    }
}

// export this function to be used in index.js
module.exports = App