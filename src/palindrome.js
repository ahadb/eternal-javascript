/**
 * @desc
 * function returns true of string is a palindrome or false if not
 * @param str {string}
 */
function palindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

/**
 * @desc
 * function returns true of string is a palindrome or false if not using array helper every
 * @param str {string}
 */
function palindromeEvery(str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - index - 1]
  })
}

export default palindrome;
