// import required modules
const Employee = require('./Employee')

// declare the engineer class but extend to employees to use shared functions
class Engineer extends Employee {
    // constructor delcaration for user inputted variables
    constructor(name, id, email, github) {
        // need the super constructor here to avoid errors and essentially import in the name, id and email from Employee class.
        super(name, id, email);

        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    // function to get the github name
    getGithub() {
        return this.github;
    }

    // function for getting the role, statically set to Engineer
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer