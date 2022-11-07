const Manager = require("../lib/Manager");

test("creates an manager objet", () => {
    const manager = new Manager("Nicole", 90, 'nicole@test.com', "000-000-0000");

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(String));
});

test('gets manager name', () => {
    const manager = new Manager("Nicole", 90, 'nicole@test.com', "000-000-0000");
    expect(manager.getName()).toEqual(expect.any(String));
});

test("gets manager ID", () => {
    const manager = new Manager("Nicole", 90, 'nicole@test.com', "000-000-0000");

    expect(manager.getId()).toEqual(expect.any(Number));
});

test('gets manager email', () => {
    const manager = new Manager("Nicole", 90, 'nicole@test.com', "000-000-0000");
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});

test('gets manager office number', () => {
    const manager = new Manager("Nicole", 90, 'nicole@test.com', "000-000-0000");

    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});

test("gets role of manager", () => {
    const manager = new Manager("Nicole", 90, 'nicole@test.com', "000-000-0000");

    expect(manager.getRole()).toEqual("Manager");
});
