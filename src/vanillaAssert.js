/***
 * @desc
 * -----------
 * vanillaTest is a contrived example of how to assert and begin to create a testing
 * framework. This should not be used in production! :/
 * -----------
 */

/***
 * @desc: describe, desribes a suite of tests
 *
 * @param {string}
 * @param {Function}
 */
const describe = function (message, callback) {
  try {
    callback();
  } catch (err) {
    console.error("Failed", err);
  }
};

/***
 * @expect: a simple set of matchers to run your assertions on
 *
 * @param {*}
 * @returns {Object}
 */
const expect = function (value) {
  return {
    toBe: function (expected) {
      if (value === expected) {
        console.log({
          name: `expect ${value} toBe ${expected}`,
          status: true,
        });
      } else {
        console.log({
          name: `expect ${value} toBe ${expected}`,
          status: false,
        });
      }
    },
    toEqual: function (expected) {
      if (value == expected) {
        console.log({
          name: `expect ${value} toEqual ${expected}`,
          status: true,
        });
      } else {
        console.log({
          name: `expect ${value} toEqual ${expected}`,
          status: false,
        });
      }
    },
  };
};

// just something to test with
const calculator = function (operator, number1, number2) {
  let result;

  if (operator === "+") {
    result = number1 + number2;
  } else if (operator === "-") {
    result = number1 - number2;
  } else if (operator === "*") {
    result = number1 * number2;
  } else {
    result = number1 / number2;
  }

  return result;
};

/*
describe("calculator", function () {
  expect(calculator("+", 100, 100)).toEqual(200);
  expect(calculator("-", 100, 100)).toEqual(0);
  expect(calculator("*", 100, 100)).toEqual(10000);
  expect(calculator("/", 10000, 100)).toEqual(10);
  expect(1).toBe("one");
});

{ name: 'expect 200 toEqual 200', status: true }
{ name: 'expect 0 toEqual 0', status: true }
{ name: 'expect 10000 toEqual 10000', status: true }
{ name: 'expect 100 toEqual 10', status: false }
{ name: 'expect 1 toBe one', status: false }
*/

//export default { describe, expect };
