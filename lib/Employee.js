// Main employee class declaration
class Employee {
    // constructor with 3 shared inputs across employee types
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // get the name of the employee
    getName() {
        return this.name;
    }

    // get the id of the employee
    getId() {
        return this.id;
    }

    // get the email of the employee
    getEmail() {
        return this.email;
    }

    // get the role of the employee, statically defined to employee here
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;