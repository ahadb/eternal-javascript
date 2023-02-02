/**
 * @desc
 * function that returns the character that occurs most often in a given string
 * @param char {string}
 * @returns {string}
 */

function maxChar(str) {
  const result = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    // condensing the body of the code in for-loop
      // result[char] = result[char] + 1 || 1;

    // we can also flip
      // if (result[char]) {
      //   result[char]++
      // } else {
      //   result[char] = 1;
      // }

    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char]++
    }
  }

  // for-in to loop over object
  // result[char] is the value inside the key of the object
  for(let char in result) {
    if (result[char] > max) {
      max = result[char];
      maxChar = char;
    }
  }

  return maxChar;
}

export default maxChar;
