/***
 * @desc
 * includesEvery is a helper function that takes in an array and subarray
 * & returns true if each item exists, false if they do not
 *
 * @param {Array}
 * @param {Array}
 * @returns {Boolean}
 */
function includesEvery(arr, subarr) {
  if(arr || subarr === undefined) {
    throw Error('Undefined')
  }

  for (let item of subarr) {
    if (!arr.includes(item)) return false;
  }

  return true;
}

export default includesEvery;
