const UserController = require("./user-controller");
const User = require("./user");

let userController;

beforeEach(() => {
  userController = new UserController(); // reset before each test
});

test('add user to userController', () => {
  const user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test('remove user not in list does nothing', () => {
  const user = new User(1, "Test", "test@example.com");
  userController.remove(user); // should not throw
  expect(userController.getUsers()).not.toContain(user);
});

test('findByEmail finds correct user', () => {
  const user = new User(2, "Ana", "ana@example.com");
  userController.add(user);
  const found = userController.findByEmail("ana@example.com");
  expect(found).toBe(user);
});

test('findByEmail returns undefined for unknown email', () => {
  const result = userController.findByEmail("notfound@example.com");
  expect(result).toBeUndefined();
});

test('findById finds correct user', () => {
  const user = new User(55, "Luis", "luis@example.com");
  userController.add(user);
  const found = userController.findById(55);
  expect(found).toBe(user);
});

test('findById returns undefined for unknown id', () => {
  const result = userController.findById(999);
  expect(result).toBeUndefined();
});
