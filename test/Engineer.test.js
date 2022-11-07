const Engineer = require("../lib/Engineer");

test("creates an engineer objet", () => {
    const engineer = new Engineer("Nicole", 90, 'nicole@test.com', "username");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer name', () => {
    const engineer = new Engineer("Nicole", 90, 'nicole@test.com', "username");

    expect(engineer.getName()).toEqual(expect.any(String));
});

test("gets engineer ID", () => {
    const engineer = new Engineer("Nicole", 90, 'nicole@test.com', "username");
    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('gets engineer email', () => {
    const engineer = new Engineer("Nicole", 90, 'nicole@test.com', "username");

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test('gets engineer github username', () => {
    const engineer = new Engineer("Nicole", 90, 'nicole@test.com', "username");

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("gets role of engineer", () => {
    const engineer = new Engineer("Nicole", 90, 'nicole@test.com', "username");

    expect(engineer.getRole()).toEqual("Engineer");
});
