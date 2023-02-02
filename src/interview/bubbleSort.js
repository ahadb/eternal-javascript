import { swap } from "./swap.js";

/**
 * bubbleSort is a sorting algorithm where the largest values
 * bubble to the top. this uses a swap method within the internal loops
 * bubbleSort is not the best candidate for sorting but could be used
 * for data that is nearly sorted
 *
 * Time Complexity N(2) - worst case
 * Time Complexity 0(N) - best case
 *
 * @param arr
 * @returns {*} arr
 */
function bubbleSort(arr) {
  let swapped;
  for (let i = arr.length; i > 0; i--) {
    swapped = true;
    for (let j = 0; j < i - 1; j++) {
      //console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = false;
      }
    }

    if (swapped) {
      break;
    }

    //console.log("**Pass Complete**");
  }

  return arr;
}

export { bubbleSort };
