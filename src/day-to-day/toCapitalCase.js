/**
 * @desc
 * toCapitalCase takes a give string separate by space
 * and capitalizes the first letter
 *
 * @param str String
 * @returns String
 */

function toCapitalCase(str) {
  return str.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');
}
