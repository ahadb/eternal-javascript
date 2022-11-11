/**
 * @desc
 * this is a simple pattern that helps you count the frequency
 * of values and store those occurences in a plain object
 *
 * Time Complexity 0(N)
 *
 * @param arr1
 * @param arr2
 */
function frequencyPattern(arr1, arr2) {
  const obj1 = {};
  const obj2 = {};

  for (let value of arr1) {
    obj1[value] = (obj1[value] || 0) + 1;
  }

  for (let value of arr2) {
    obj2[value] = (obj2[value] || 0) + 1;
  }

  console.log(
      obj1,
      obj2
  )
}
