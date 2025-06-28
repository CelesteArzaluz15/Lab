const calculator = require('./calculator');

// ADD
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

// SUBTRACT
test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// MULTIPLY (Tarea 1)
test('multiply 3 * 4 to equal 12', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('multiply 0 * 10 to equal 0', () => {
  expect(calculator.multiply(0, 10)).toBe(0);
});

// DIVIDE (Tarea 1)
test('divide 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide 20 / -4 to equal -5', () => {
  expect(calculator.divide(20, -4)).toBe(-5);
});

// DIVIDE BY ZERO (Tarea 3)
test('divide 5 / 0 should return error message', () => {
  expect(calculator.divide(5, 0)).toBe('Cannot divide by zero');
});
