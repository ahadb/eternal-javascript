/**
 * @desc
 * =====
 * Objects: Use getters and setters
 * - Prevents look ups and change your whole code base
 * - Encapsulates internal representation
 * =====
 */

// BAD
function makeGroceryList() {
  // ...

  return {
    items: 0
    // ...
  }
}

// GOOD
function makeGroceryList() {
  let items = 0;

  // getter, public
  function getItems() {
    return items;
  }

  // setter, public
  function setItem(item) {
    // pre-process, validate or perform n before setting
    items = item;
  }

  return {
    // ...
    getItems,
    setItem
  }
}
