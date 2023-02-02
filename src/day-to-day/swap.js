/**
 * @desc
 * swap functions help us in sorting algos where you
 * swap to put them in order
 * @param arr
 * @param idx1
 * @param idx2
 */
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

export { swap };
