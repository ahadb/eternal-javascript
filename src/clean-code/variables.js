/**
 * @desc
 * Variables - Meaningful Names
 *
 */

// bad
const mmddyyyy = moment().format("MM/DD/YYYY");

// good
const currentDate = moment().format("MM/DD/YYYY");

/**
 * @desc
 * Variables - Explicit is better than implicit
 *
 */

// bad
const countries = ["US", "UK", "Israel"];
countries.forEach((c) => {
  doSomething();
  doSomethingElse();
  // ...
  // ...
  // what is `c` for again?
  dispatch(c);
});

// good
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
 * Avoid unneeded context
 *
 */

// bad
const Pet = {
  petName: "Alex",
  petType: "Dog",
  petColor: "Chestnut",
};

function changePetName(pet, color) {
  pet.petColor = color;
}

// good
const Pet = {
  name: "Alex",
  type: "Dog",
  color: "Chestnut",
};

function changePetName(pet, color) {
  pet.petColor = color;
}
