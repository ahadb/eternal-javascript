/**
 * @desc
 * selectionSort places small values into a sorted
 * position, unlike bubbleSort which places large
 * values in a sorted position
 *
 * @param arr
 * @return arr
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
      if (i !== lowest) {
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
      }
    }
  }

  return arr;
}

export { selectionSort };
