/**
 * @desc
 * check if two sets are equal
 *
 * @param {Set} a
 * @param {Set} b
 * @returns {Boolean}
 */
const areSetsEqual = (a, b) => (
    (a.size === b.size) ?
        [...a].every( value => b.has(value) ) : false
);
