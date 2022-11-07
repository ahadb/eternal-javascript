/**
 * @desc
 * returns a number based on fibonacci sequence at desired index
 * - recursive solution
 *
 * @param n number
 * @returns number
 */
function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
}

// function fibTernary(n) {
//   return n <= 1 ? n : fibTernary(n - 1) + fibTernary(n - 2);
// }

export { fibonacciRecursive };
