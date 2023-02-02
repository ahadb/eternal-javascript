/**
 * @desc
 * naturalNumbersGenerator is a generator function that returns an iterable
 * of natural numbers. No need to explicitly define [@Symbol.iterator] as generators
 * have this built-in.
 * @See { iterableObject.js }
 *
 * @returns {IterableIterator<number>}
 */
function * naturalNumbersGenerator() {
  let start = 1; // could call this `num`
  let end = 5; // replace with your end
  while (start < end) { // make it infinite, true
    yield start;
    start = start + 1
  }
}

export default naturalNumbersGenerator;
