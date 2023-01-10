/**
 * @desc
 * classic FizzBuzz. function that returns numbers: for multiples of 3 prints fizz,
 * for multiples of 3 && 5 prints buzz, and for multiples of 3 and 5 prints fizzbuzz
 * @param n {number}
 * @returns {number|string}
 */

// long form
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // i % 15
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(5);
