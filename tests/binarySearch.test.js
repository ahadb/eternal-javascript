import { describe, test, expect } from "@jest/globals";
import { binarySearch } from "../src/binarySearch";

describe("binarySearch", () => {
  test("it should search for number in a sorted array", () => {
    expect(binarySearch([], 100)).toBe(-1);
    expect(binarySearch([1], 2)).toBe(-1);
    expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
    expect(binarySearch([1, 3, 5, 7, 9, 11, 13], 1)).toBe(0);
    expect(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 19)).toBe(9);
    expect(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 15)).toBe(7);
    expect(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 5)).toBe(2);
    expect(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 3)).toBe(1);
    expect(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 0)).toBe(-1);
    expect(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 1)).toBe(0);
  });
  // test("should search an array of sorted objects", () => {
  //   const sortedObjects = [
  //     {key: 1, value: 'one'},
  //     {key: 2, value: 'two'},
  //     {key: 3, value: 'three'},
  //     {key: 4, value: 'four'},
  //     {key: 5, value: 'five'},
  //   ]
  // });
});
