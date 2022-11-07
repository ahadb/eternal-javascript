import { describe, test, expect } from "@jest/globals";
import { fibonacciSequence } from "../src/fibonacciSequence";

describe("fibonacci", () => {
  test("it should return fibonacci sequence up to 10", () => {
    expect(fibonacciSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect(fibonacciSequence(9)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
    expect(fibonacciSequence(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(fibonacciSequence(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
    expect(fibonacciSequence(6)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(fibonacciSequence(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fibonacciSequence(4)).toEqual([0, 1, 1, 2]);
    expect(fibonacciSequence(3)).toEqual([0, 1, 1]);
    expect(fibonacciSequence(2)).toEqual([0, 1]);
  });
});
