/*
 Frequency Counter Pattern
 =========================

 This pattern helps when comparing two or more inputs and finding the frequency of a given value
 Uses objects or sets to collect values/frequencies of values
 */

// same takes two input arrays and returns true or false
// if every value in the second array is a squared

// Intuition
// every value in the first array must be squared in the
// second array for this to be solved

same([1, 2, 3], [1, 4, 9]); // true
same([2, 4, 6], [4, 16, 32]); // true
same([1, 2, 1], [1, 9, 16]); // false

// naive approach
// this uses indexOf and is quadratic relationship as indexOf is a nested loop
// we want to avoid 0(n2)
// nested loops are expensive

// if we have 1000 items it would be 1000 * 1000 or 1M iterations
function sameNaive(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if ((correctIndex = -1)) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// this the best approach, never use nested loops if we can avoid it
// 0(n)

// there are 3 loops here so if we had 1000 items we would have 3000 iterations
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);
