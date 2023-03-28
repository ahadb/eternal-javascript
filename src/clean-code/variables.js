/**
 * @desc
 * Variables - Meaningful Names
 *
 */

// BAD
const mmddyyyy = moment().format("MM/DD/YYYY");

// GOOD
const currentDate = moment().format("MM/DD/YYYY");

/**
 * @desc
 * Variables - Explicit is better than implicit
 *
 */

// BAD
const countries = ["US", "UK", "Israel"];
countries.forEach((c) => {
  doSomething();
  doSomethingElse();
  // ...
  // ...
  // what is `c` for again?
  dispatch(c);
});

// GOOD
const countries = ["US", "UK", "Israel"];
countries.forEach((country) => {
  doSomething();
  doSomethingElse();
  // ...
  // ...
  // what is `c` for again?
  dispatch(country);
});

/**
 * @desc
 * Variables - Avoid unneeded context
 *
 */

// BAD
const Pet = {
  petName: "Alex",
  petType: "Dog",
  petColor: "Chestnut",
};

function changePetName(pet, color) {
  pet.petColor = color;
}

// GOOD
const Pet = {
  name: "Alex",
  type: "Dog",
  color: "Chestnut",
};

function changePetName(pet, color) {
  pet.petColor = color;
}
