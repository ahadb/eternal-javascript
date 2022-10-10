import chunkArray from '../src/chunkArray';

describe("chunk", () => {
  test("should create 3 chunks based on size of 2", () => {
    const chunkedArray = chunkArray([1, 2, 3, 4, 5], 2);

    expect(chunkedArray).toEqual([[1, 2], [3, 4], [5]]);
  });

  test("should create 5 single array chunks based on size of 1", () => {
    const chunkedArray = chunkArray([1, 2, 3, 4, 5], 1);

    expect(chunkedArray).toEqual([[1], [2], [3], [4], [5]]);
  });

  test("should handle a larger array and create 1000 chunks based on size of 1", () => {
    const arrFromKeys = Array.from(Array(1000).keys());
    const chunkedArray = chunkArray(arrFromKeys, 1);

    expect(chunkedArray[chunkedArray.length - 1]).toEqual([999]);
  });
});
