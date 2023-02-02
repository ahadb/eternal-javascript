/**
 * @desc
 * sumEqualsZero takes in an array and uses nested loops
 * to return an array with values that sum to zero
 *  - this is not as efficient with larger arrays
 *
 * Time complexity: 0(N^2)
 *
 * @param arr
 * @returns {*[]}
 */
function sumEqualsZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

//sumEqualsZero([-4, -3, -2, -1, 0, 1, 2, 5]);
