/**
 * @desc
 * =====
 * Functions: Function names should state what they do
 * =====
 */

// BAD
function appendToList(list, item) {
  // ...
}

const items = ["Alpha", "Beta", "Gamma", "Delta"];

// it's hard to tell what will be added (although items give's us a hint)
// what if this were coming from a dynamic source
appendToList(items, "Epsilon");

// GOOD
function appendLetterToAlphabet(greekAlphabet, letter) {
  // ...
}

const items = ["Alpha", "Beta", "Gamma", "Delta"];

appendLetterToAlphabet(items, "Epsilon");

/**
 * @desc
 * =====
 * Functions: Avoid creating duplicate code
 * =====
 */

// BAD
function initStocksList(stocks, payload) {
  stocks.forEach((stock) => {
    const stockAsk = stock.getStockAsk();
    const stockBid = stock.getStockBid();
    const stockSpread = stock.getStockSpread();

    const stockData = {
      stockAsk,
      stockBid,
      stockSpread,
      ...payload,
    };

    init(stockData);
  });
}

function initBondsList(bonds, payload) {
  bonds.forEach((bond) => {
    const bondAsk = bond.getBondAsk();
    const bondBid = bond.getBondBid();
    const bondSpread = bond.getBondSpread();

    const bondData = {
      bondAsk,
      bondBid,
      bondSpread,
      ...payload,
    };

    init(bondData);
  });
}

// GOOD
function initInvestorList(funds, payload) {
  funds.forEach((fund) => {
    const stockDetails = fund.getStockDetails();
    const bondDetails = fund.getBondDetails();

    const fundData = {
      stockDetails,
      bondDetails,
      ...payload,
    };

    switch (fund.type) {
      case "stockAsk":
        fundData.stockAsk = fund.getStockAsk();
        break;
      case "bondAsk":
        fundData.bondAsk = fund.getBondAsk();

      // ...
    }

    init(fundData);
  });
}

/**
 * @desc
 * =====
 * Functions: Arguments
 * - use two function arguments, if you're using more then your function
 * - is trying to do too much
 * - destructuring helps and clones primitive values of the argument object
 * =====
 */

// BAD
function createNav(label, description, body, isSelected) {
  // ...
}

createNav("About", "About our company", "Foo", false);

// GOOD
function createNav({ label, description, body, isSelected }) {
  // ...
}

// clear what properties are being used
createNav({
  label: "About",
  description: "About our company",
  body: "Foo",
  isSelected: false,
});

/**
 * @desc
 * =====
 * Functions: Should do one thing
 * - create functions that are easy to test, compose and reason about
 * - functions that are isolated and can be refactored easily makes reading your code much easier
 * =====
 */

// BAD
function getUserRouteHandler(req, res) {
  const { userId } = req.params;

  sequelize("user")
    .where({ id: userId })
    .first()
    .then((user) => res.json(user));
}

// GOOD
const User = {
  getOne(userId) {
    return sequelize("user").where({ id: userId }).first();
  },
};

function getUserRouteHandler(req, res) {
  const { userId } = req.params;
  User.getOne(userId).then((user) => res.json(user));
}

/**
 * @desc
 * =====
 * Functions: Side Effects & Global variables
 * - functions should take in a value and return another value, else a function produces a side effect
 * - mutable data types can be set by anything, avoid this common pitfall
 * =====
 */

// BAD
let streetAddress = "2501 Roth Avenue";

function truncateAvenue() {
  streetAddress = streetAddress.replace('Avenue', 'Ave.')
}

// we mutate global variable here, not good
truncateAvenue();
console.log(streetAddress);
// => 2501 Roth Ave.

// GOOD
function truncateAvenue(str) {
  str.replace('Avenue', 'Ave.')
}

const streetAddress = "2501 Roth Avenue";
const newStreetAddress = truncateAvenue(streetAddress);
console.log(streetAddress);
// => 2501 Roth Avenue
console.log(newStreetAddress);
// => 2501 Roth Ave.

/**
 * @desc
 * =====
 * Functions: Avoid type-checking
 * - type checking in normal JavaScript leads to extra verbiage, type safety does not make up for readability
 * - JS should be clean and well tested, otherwise use TypeScript
 * =====
 */

// BAD
function merge(x, y) {
  if (
      (typeof x === "number" && typeof y === "number") ||
      (typeof x === "string" && typeof y === "string")
  ) {
    return x + y;
  }

  throw new Error("Values must be String or Number");
}

// GOOD
function merge(x, y) {
  return x + y;
}
