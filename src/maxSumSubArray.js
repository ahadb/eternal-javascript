/**
 * @desc
 * maxSumSubArray calculates the max sum of n
 * consecutive elements in the provided array
 *
 * Time complexity: 0(N^2)
 *
 * @param arr
 * @param num
 * @returns number
 */
function maxSumSubArray(arr, num) {
  let max = -Infinity;

  if (num > arr.length) {
    return null;
  }

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    //console.log(temp, max)
  }
  return max;
}

//maxSumSubArray([1,2,4,5,2,8,9,6], 3);
