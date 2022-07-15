const lengthTest = require('./stringlength.js');

test('string length test', () => {
  expect(lengthTest('sajjad')).toBe(6);
});