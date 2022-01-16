const Intern = require('../lib/Intern')
const intern = new Intern('Alex', '1', 'email@example.com', 'UC Davis')

test('create a intern object', () => {
    expect(intern.name).toBe('Alex')
    expect(intern.id).toBe('1')
    expect(intern.email).toBe('email@example.com')
    expect(intern.school).toBe('UC Davis')
})

test('get the intern name', () => {
    expect(intern.getName()).toBe('Alex')
})

test('get the intern id', () => {
    expect(intern.getId()).toBe('1')
})

test('get the intern email', () => {
    expect(intern.getEmail()).toBe('email@example.com')
})

test('get the intern school', () => {
    expect(intern.getSchool()).toBe('UC Davis')
})

test('get the intern role', () => {
    expect(intern.getRole()).toBe('Intern')
})