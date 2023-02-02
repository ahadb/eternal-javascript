/**
 * @desc
 * recursiveBinarySearch uses recursion and is a faster form of search
 * where you limit half the remaining elements at a time. only works on
 * sorted arrays!
 *
 * @param sortedArr
 * @param target
 * @returns {*}
 */
function recursiveBinarySearch(sortedArr, target) {
  return search(sortedArr, target, 0, sortedArr.length - 1);
}

function search(sortedArr, target, start, end) {
  if (start > end) {
    return -1;
  }

  let middle = Math.floor((start + end) / 2);

  if (target === sortedArr[middle]) {
    return middle;
  }

  if (target < sortedArr[middle]) {
    return search(sortedArr, target, start, middle - 1);
  } else {
    return search(sortedArr, target, middle + 1, end);
  }
}

export { recursiveBinarySearch };
