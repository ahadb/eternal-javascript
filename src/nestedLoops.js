/**
 * @desc
 * compareElemetnsInTwoArrays simple compares two arrays and checks
 * if they hold the same value
 * - example of where we can use nested loops
 *
 * @param arr1
 * @param arr2
 */
function compareElementsInTwoArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log('Arrays contain at least one element: ' + arr2[j]);
      }
    }
  }
}

/**
 * @desc
 * nestedLoops is just an example of loops which are nested
 * this fn doesn't do anything but demonstrate how nested loops
 * work internally
 */
function nestedLoops() {
  for (let i = 0; i <= 3; i++) {
    console.log('→ First Level');
    for (let j = 0; j <= 2 ; j++) {
      console.log('↳ Second Level');
    }
  }
}

/*
→ First Level
↳ Second Level
↳ Second Level
↳ Second Level
→ First Level
↳ Second Level
↳ Second Level
↳ Second Level
→ First Level
↳ Second Level
↳ Second Level
↳ Second Level
→ First Level
↳ Second Level
↳ Second Level
↳ Second Level
 */

export {compareElementsInTwoArrays, nestedLoops}
