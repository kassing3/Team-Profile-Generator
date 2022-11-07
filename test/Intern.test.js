const Intern = require("../lib/Intern");

test("creates an engineer objet", () => {
    const intern = new Intern("Nicole", 90, 'nicole@test.com', "School");

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern name', () => {
    const intern = new Intern("Nicole", 90, 'nicole@test.com', "School");

    expect(intern.getName()).toEqual(expect.any(String));
});

test("gets intern ID", () => {
    const intern = new Intern("Nicole", 90, 'nicole@test.com', "School");

    expect(intern.getId()).toEqual(expect.any(Number));
});

test('gets intern email', () => {
    const intern = new Intern("Nicole", 90, 'nicole@test.com', "School");

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});

test('gets intern school', () => {
    const intern = new Intern("Nicole", 90, 'nicole@test.com', "School");

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("gets role of intern", () => {
    const intern = new Intern("Nicole", 90, 'nicole@test.com', "School");

    expect(intern.getRole()).toEqual("Intern");
});
