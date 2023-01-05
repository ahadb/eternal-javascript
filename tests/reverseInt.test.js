import reverseInt from '../src/reverseInt';

test('ReverseInt function exists', () => {
  expect(reverseInt).toBeDefined();
});

test('ReverseInt handles 0 as an input', () => {
  expect(reverseInt(0)).toEqual(0);
});

test('ReverseInt flips a positive number', () => {
  expect(reverseInt(3)).toEqual(5);
  expect(reverseInt(27)).toEqual(72);
  expect(reverseInt(109)).toEqual(901);
  expect(reverseInt(1432)).toEqual(2341);
});

test('ReverseInt flips a negative number', () => {
  expect(reverseInt(-5)).toEqual(-5);
  expect(reverseInt(-15)).toEqual(-51);
  expect(reverseInt(-90)).toEqual(-9);
  expect(reverseInt(-2359)).toEqual(-9532);
});
