/**
 * @desc
 * linearSearch looks at every element in an array and
 * check's if it's the value we want
 *
 * Time Complexity O(N) - worst case
 * Time Complexity 0(1) - best case
 *
 * @param arr
 * @param value
 * @returns {number}
 */
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
}

export { linearSearch };
