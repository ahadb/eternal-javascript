/**
 * @desc
 * returns a number based on fibonacci sequence at desired index
 * - recursive solution
 *
 * @param n number
 * @returns number
 */
function fibonacciReqcursive(n) {
  if (n <= 0) {
    return n;
  } else {
    return fibonacciReqcursive(n - 1) + fibonacciReqcursive(n - 2);
  }
}

// function fibTernary(n) {
//   return n <= 1 ? n : fibTernary(n - 1) + fibTernary(n - 2);
// }

export { fibonacciReqcursive };
