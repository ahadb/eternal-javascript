/**
 * @desc
 * # 1
 * update an item in an array using spread and findIndex
 */
let numbersArr = [
  { id: 1, name: "One" },
  { id: 2, name: "Two" },
  { id: 3, name: "Three" },
  { id: 4, name: "Four" },
  { id: 5, name: "Five" },
];

let updatedItem;
const existingItemIndex = numbersArr.findIndex((item) => item.id === 1);
const existingItem = numbersArr[existingItemIndex];

if (existingItem) {
  updatedItem = { ...existingItem };
  updatedItem.num = 1;
  numbersArr[existingItemIndex] = updatedItem;
} else {
  return;
}

/**
 * @desc
 * # 2
 * update an item in an array using map and spread
 */
let shallowCloneArr = numbersArr.map((x) => {
  return { ...x };
});

shallowCloneArr.find((a) => a.id == 3).name = "3";
