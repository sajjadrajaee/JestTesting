const sum = require('./code.js');
test('sum 1 + 2', () => {
  a=1;
  b=3;
  expect(sum(1,3)).toBe(4);
})

test('but there is a "sa" in sajjad', () => {
  expect('sajjad').toMatch(/sa/);
});