/**
 * @desc
 * function that reverses a string using for-of
 * @param str {string}
 */
function reverseStrForOf(str) {
  let reversedString = '';

  for (let char of str) {
    reversedString = char + reversedString;
  }

  return reversedString;
}

/**
 * @desc
 * function that reverses a string using reduce
 * @param str {string}
 */
function reverseStrReduce(str) {
  return str.split('').reduce((reversed, char) => {
    return char + reversed
  }, '')
}

export { reverseStrForOf, reverseStrReduce }
