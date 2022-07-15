const calc = require('./calculator.js');

const claculator = new calc;
describe ('Calculator test 1' , () => {
  test('test add', () => {
    expect(claculator.add(20,30)).toBe(50);
  });
  test('test div', () => {
    expect(claculator.divid(20,2)).toBe(10);
  });
  test('multiply test', () => {
    expect(claculator.mul(2,20)).toBe(40);
  });
  test('min test', () => {
    expect(claculator.min(20,18)).toBe(2);
  });
});

describe ('Calculator test 2' , () => {
  test('test add', () => {
    expect(claculator.add(50,60)).toBe(110);
  });
  test('test div', () => {
    expect(claculator.divid(60,2)).toBe(30);
  });
  test('multiply test', () => {
    expect(claculator.mul(70,20)).toBe(1400);
  });
  test('min test', () => {
    expect(claculator.min(1200,10)).toBe(1190);
  });
})