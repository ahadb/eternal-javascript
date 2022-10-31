import { describe, test, expect } from "@jest/globals";
import { bubbleSort } from "../src/bubbleSort";
import {unsortedArr, sortedArr, negativeUnsortedArr, negativeSortedArr} from "../src/utils";

describe("bubbleSort", () => {
  test("it should sort array of positive integers", () => {
    expect(bubbleSort(unsortedArr)).toEqual(sortedArr)
  });
  test("it should sort array of negative integers", () => {
    expect(bubbleSort(negativeUnsortedArr)).toEqual(negativeSortedArr)
  });
});
