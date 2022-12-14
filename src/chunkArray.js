/**
 * @desc
 * chunkArray will return an array into many subarrays
 * where each subarray is of the length size
 *
 * @param arr - array
 * @param size - number
 * @returns {Array}
 */

function chunkArray(array, size) {
    const chunked_arr = [];
    for (let i = 0; i < array.length; i++) {
        const last = chunked_arr[chunked_arr.length - 1];
        if (!last || last.length === size) {
            chunked_arr.push([array[i]]);
        } else {
            last.push(array[i]);
        }
    }
    return chunked_arr;
}

export default chunkArray;
