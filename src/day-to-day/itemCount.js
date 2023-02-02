/**
 * @desc
 * count uses reduce to count get and count the number of items
 * in the array supplied to it
 *
 * @param arr
 * @returns {*}
 */
const itemCount = (arr) => {
    return arr.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1;
        return a;
    }, {})
}

export default itemCount;