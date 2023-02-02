/**
 * @desc
 * createRandomArray creates an array of n length of
 * y random numbers
 * @param arrLen number
 * @param maxRanNum number
 * @returns {number[]}
 */
function createRandomArray(arrLen, maxRanNum) {
  return Array.from(
    { length: arrLen },
    () => Math.floor(Math.random() * maxRanNum) + 1
  );
}

export { createRandomArray };
