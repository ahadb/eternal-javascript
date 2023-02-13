/**
 * @desc
 * function that dynamically replaces keys within an object
 * using reduce
 *
 * @param keysMap Object
 * @param obj Object
 */

// uses reduce
const renameKeysInObj = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (accumulator, key) => ({
      ...accumulator,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );

const myObj = { year: "2022", make: "BMW", model: "M4 Competition" };
const newObj = renameKeysInObj({ year: "carYear", make: "carMake", model: "carModel" }, myObj);
console.log(newObj);
// -> { carYear: '2022', carMake: 'BMW', carModel: 'M4 Competition' }
