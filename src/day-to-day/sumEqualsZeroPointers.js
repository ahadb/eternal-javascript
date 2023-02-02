/**
 * @desc
 * sumEqualsZero takes in an and uses a pointer pattern
 * to return an array with values that sum to zero
 *  - this is much more efficient with larger arrays
 *
 * Time complexity: 0(N)
 *
 * @param arr
 * @returns {*[]}
 */
function sumEqualsZeroWithPointer(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    console.log(sum)
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
