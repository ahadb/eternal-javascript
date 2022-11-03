/**
 * @desc
 * returns an array representing the fibonacci sequence given
 * the length of the sequence to be be outputted
 * - array based solution
 *
 * @param sequenceLen number
 * @returns number[]
 */
function fibonacciSequence(sequenceLen) {
  let fibSequence = [0, 1];

  for (let i = fib.length; i < sequenceLen; i++) {
    fibSequence[i] = fibSequence[i - 2] + fibSequence[i - 1];
  }

  return fibSequence;
}

export { fibonacciSequence };
