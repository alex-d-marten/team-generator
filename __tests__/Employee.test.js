const Employee = require('../lib/Employee')
const employee = new Employee('Alex', '1', 'email@example.com')

test('Create an employee object', () => {
    expect(employee.name).toBe('Alex')
    expect(employee.id).toBe('1')
    expect(employee.email).toBe('email@example.com')
})

test('get the employee name', () => {
    expect(employee.getName()).toBe('Alex')
})

test('get the employee id', () => {
    expect(employee.getId()).toBe('1')
})

test('get the employee email', () => {
    expect(employee.getEmail()).toBe('email@example.com')
})

test('get the employee role', () => {
    expect(employee.getRole()).toBe('Employee')
})