const Manager = require('../lib/Manager')
const manager = new Manager('Alex', '1', 'email@example.com', '1')

test('Create a manager object', () => {
    expect(manager.name).toBe('Alex')
    expect(manager.id).toBe('1')
    expect(manager.email).toBe('email@example.com')
    expect(manager.officeNumber).toBe('1')
})

test('get the manager name', () => {
    expect(manager.getName()).toBe('Alex')
})

test('get the manager id', () => {
    expect(manager.getId()).toBe('1')
})

test('get the manager email', () => {
    expect(manager.getEmail()).toBe('email@example.com')
})

test('get the manager office number', () => {
    expect(manager.getOfficeNumber()).toBe('1')
})

test('get the manager role', () => {
    expect(manager.getRole()).toBe('Manager')
})