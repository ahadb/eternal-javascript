/**
 * @desc
 * function that dynamically replaces keys within an object
 * using map and object.keys
 *
 * @param keysMap Object
 * @param obj Object
 */

const obj = { year: "2022", make: "BMW", model: "M4 Competition" };
const { year: carYear, make: carMake, model: carModel, ...rest } = obj;
const newObj = { carYear, carMake, carModel, ...rest };
console.log(newObj);
// -> { carYear: '2022', carMake: 'BMW', carModel: 'M4 Competition' }
