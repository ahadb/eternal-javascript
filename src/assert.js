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
const assert = function (value) {
  return {
    toBe: function (expected) {
      if (value === expected) {
        console.log({
          name: `assert ${value} toBe ${expected}`,
          status: true,
        });
      } else {
        console.log({
          name: `assert ${value} toBe ${expected}`,
          status: false,
        });
      }
    },
    toEqual: function (expected) {
      if (value == expected) {
        console.log({
          name: `assert ${value} toEqual ${expected}`,
          status: true,
        });
      } else {
        console.log({
          name: `assert ${value} toEqual ${expected}`,
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
  assert(calculator("+", 100, 100)).toEqual(200);
  assert(calculator("-", 100, 100)).toEqual(0);
  assert(calculator("*", 100, 100)).toEqual(10000);
  assert(calculator("/", 10000, 100)).toEqual(10);
  assert(1).toBe("one");
});

{ name: 'assert 200 toEqual 200', status: true }
{ name: 'assert 0 toEqual 0', status: true }
{ name: 'assert 10000 toEqual 10000', status: true }
{ name: 'assert 100 toEqual 10', status: false }
{ name: 'assert 1 toBe one', status: false }
*/

//export default { describe, assert };
