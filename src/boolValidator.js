/**
 * @desc
 * boolValidator takes in a value and an array of allowed booleans
 * and returns true or false if any are acceptable
 *
 * @param value
 * @param allowedBools - array
 * @returns {boolean}
 */
const boolValidator = (value, boolsArr) => {
  return boolsArr.includes(value);
};

export default boolValidator;
