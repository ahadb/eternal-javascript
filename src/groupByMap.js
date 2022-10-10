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

export default groupByMap;
