/**
 * @desc
 * the pluck function retrieves all of the values for a given key
 * and converts the array of objects into an array of values
 *
 * @param arr - Array
 * @param key - number
 * @returns Boolean
 */

// ES5
function pluck(arr, key) {
  return arr.map(function(obj) {
    return obj[key];
  });
}

// ES6
//const pluck = (arr, key) => arr.map(obj => obj[key]);

const planets = [
  { name: "Mercury", distanceFromSun: "36.05M" },
  { name: "Venus", distanceFromSun: "67.245M" },
  { name: "Earth", distanceFromSun: "92.96" },
  { name: "Mars", distanceFromSun: "141.6M" },
  { name: "Jupiter", distanceFromSun: "483.8M" },
  { name: "Saturn", distanceFromSun: "890.8M" },
  // ..
];
