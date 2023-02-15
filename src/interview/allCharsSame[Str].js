/**
 * @desc
 * function that checks if all characters are the same
 * in one given string using a for loop
 *
 * @param str - String
 * @returns Boolean
 */

function allCharsSame(str) {
  let strLen = str.length;

  for (let i = 0; i < strLen; i++) {
    if (str[1] !== str[0]) {
      return false;
    }

    return true;
  }
}

export default allCharsSame;
