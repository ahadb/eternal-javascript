import { describe, test, expect } from "@jest/globals";
import { recursiveBinarySearch } from "../src/recursiveBinarySearch";

describe("recursiveBinarySearch", () => {
  test("it should search for number in a sorted array", () => {
    expect(recursiveBinarySearch([], 100)).toBe(-1);
    expect(recursiveBinarySearch([1], 2)).toBe(-1);
    expect(recursiveBinarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
    expect(recursiveBinarySearch([1, 3, 5, 7, 9, 11, 13], 1)).toBe(0);
    expect(recursiveBinarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 19)).toBe(9);
    expect(recursiveBinarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 15)).toBe(7);
    expect(recursiveBinarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 5)).toBe(2);
    expect(recursiveBinarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 3)).toBe(1);
    expect(recursiveBinarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 0)).toBe(-1);
    expect(recursiveBinarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 1)).toBe(0);
  });
});
