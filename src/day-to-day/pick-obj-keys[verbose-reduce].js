/**
 * @desc
 * the pick function makes a new object with a subset of it's properties
 * - this is a little more verbose and not reusable (can easily be changed)
 *
 */

const myCar = {
  color: "silver",
  make: "BMW",
  model: "M4 Competition",
  engine: { cylinder: 6, horespower: 550 },
};

const pickObjKeys = ["color", "engine"].reduce(function (a, b) {
  a[b] = myCar[b];
  return a;
}, {});

// pick
// => { color: "silver", engine: { cylinder: 6, horsepower: 550 } }
