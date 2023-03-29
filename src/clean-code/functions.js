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
 *
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
  label: 'About',
  description: 'About our company',
  body: 'Foo',
  isSelected: false
});
