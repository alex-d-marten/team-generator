const Engineer = require('../lib/Engineer')
const engineer = new Engineer('Alex', '1', 'email@example.com', 'github@github.com')

test('create a Engineer object', () => {
    expect(engineer.name).toBe('Alex')
    expect(engineer.id).toBe('1')
    expect(engineer.email).toBe('email@example.com')
    expect(engineer.github).toBe('github@github.com')
})

test('get the engineer name', () => {
    expect(engineer.getName()).toBe('Alex')
})

test('get the engineer id', () => {
    expect(engineer.getId()).toBe('1')
})

test('get the engineer email', () => {
    expect(engineer.getEmail()).toBe('email@example.com')
})

test('get the engineer github', () => {
    expect(engineer.getGithub()).toBe('github@github.com')
})

test('get the engineer role', () => {
    expect(engineer.getRole()).toBe('Engineer')
})