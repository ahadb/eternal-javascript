/**
 * @desc
 * this function creates stairs based on N amount
 *
 * '#  '
 * '## '
 * '###'
 *
 * @param arr - array
 * @param size - number
 * @returns {Array}
 */

function printStairs(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += '#'
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

/**
 * @desc
 * this function recursively creates stairs based on N amount
 *
 * '#  '
 * '## '
 * '###'
 *
 * @param arr - array
 * @param size - number
 * @returns {Array}
 */

function printStairsRecursively(n) {
  // todo
}

export default printStairs;
