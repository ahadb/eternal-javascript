/**
 * @desc
 * groupByMap takes an array and a grouping function
 * and returns a Map of the array grouped by grouping function
 *
 * @param list - array
 * @param keyGetter - function
 * @returns {Map<any, any>}
 */
function groupByMap(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

const groceries = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "steak", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const colors = [
  "Apricot",
  "Brown",
  "Burgundy",
  "Cerulean",
  "Peach",
  "Pear",
  "Red",
];

const groupByDataType = groupByMap(groceries, (grocery) => grocery.type);
const groupByOddOrEven = groupByMap([1, 2, 3, 4, 5, 6, 7, 8, 9], (v) =>
  v % 2 ? "odd" : "even"
);
const groupByColor = groupByMap(colors, (v) => v[0]);
