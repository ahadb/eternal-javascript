/**
 * @desc
 * function that checks for an iterable
 *
 * @param Obj -any
 * @returns Boolean
 */

function isIterable(obj) {
  if (obj === null) {
    return false;
  }

  return typeof obj[Symbol.iterator] === "function";
}

export default isIterable;
