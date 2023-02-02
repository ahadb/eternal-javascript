/**
 * @desc
 * function that uses native replaceAll to match all substrings in a string
 * @param str {string}
 * @param pattern {string}
 * @param replacement {string}
 * @returns {string}
 */

function replaceAll(str, pattern, replacement) {
  // pattern can be a regex, /ie: /Python/gi
  let newString = str.replaceAll(pattern, replacement);

  return newString;
}
