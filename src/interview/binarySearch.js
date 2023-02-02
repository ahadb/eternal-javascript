/**
 * @desc
 * binarySearch is a faster form of search where you limit half
 * the remaining elements at a time. only works on sorted arrays!
 *
 * Time Complexity O(logN) - worst case
 * Time Complexity 0(1) - best case
 *
 * @todo comparator function
 * @param sortedArr
 * @param target
 * @returns {number}
 */
function binarySearch(sortedArr, target) {
  let start = sortedArr[0];
  let end = sortedArr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (sortedArr[middle] !== target && start <= end) {
    if (target < sortedArr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
  }

  if (sortedArr[middle] === target) {
    return middle;
  }

  return -1;
}

export { binarySearch };
