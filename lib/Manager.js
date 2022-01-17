// Importing the required modules
const Employee = require('./Employee')

// declaration for the Manager class with an extension of the Employee class
class Manager extends Employee {
    // constructor for user inputted variables
    constructor(name, id, email, officeNumber) {
        // super constructor needed to call derived properties from the employee class
        super(name, id, email);

        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    // getting the office number for the manager
    getOfficeNumber() {
        return this.officeNumber;
    }

    // getting the role of the manager but statically set to Manager.
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager