/**
 * @desc
 * factorial returns the product of an integer and all integers below it
 * @param n {number}
 * @returns {number}
 */
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};
