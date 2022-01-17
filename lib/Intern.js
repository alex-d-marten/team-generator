// importing required modules
const Employee = require('./Employee')

// declaration of the Intern class with an extension for the Employee class to use its functions
class Intern extends Employee {
    // constructor for the user inputted variables
    constructor(name, id, email, school) {
        // need this super constructor to import the Employee variables
        super(name, id, email)

        this.name = name
        this.id = id
        this.email = email
        this.school = school
    }

    // function to get the school input
    getSchool() {
        return this.school
    }

    // function for getting the role, statically set to Intern.
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;