/**
 * @desc
 * function that determines the type of value based on it given type's constructor
 *
 * @param type - any
 * @param vak - any
 * @returns Boolean
 */

function isType(type, val) {
  return ![, null].includes(val) && val.constructor === type;
}

export default isType;

/*
isType(Array, [1]);
isType(Set, new Set());
isType(Map, new Map());
*/
