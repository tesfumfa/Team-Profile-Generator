const Manager = require("../lib/Manager");

test('tests if manager is a new object created', () => {
  const manager = new Manager('adam', 28, 'adam@company.com', 500)

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
})