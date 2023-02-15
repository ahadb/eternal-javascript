/**
 * @desc
 * function that checks if all characters are the same
 * in two given string using a Set
 *
 * @param str1 - String
 * @param str2 - String
 * @returns Boolean
 */

function allCharsSame(str1, str2) {
  const set = new Set(str1);
  return ![...str2].some(char => !set.has(char));
}

export default allCharsSame;
