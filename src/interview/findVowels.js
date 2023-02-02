/**
 * @desc
 * vowels is a function that returns the count of vowels in a given string
 * using an iterative solution
 *
 * @param str - String
 * @returns Number
 */
function vowelsIterative(str) {
  let count = 0;
  const checker = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}

/**
 * @desc
 * vowels is a function that returns the count of vowels in a given string
 * using an iterative solution
 *
 * @param str - String
 * @returns Number
 */
function vowelsRegex(str) {
  // match returns an array or null
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
