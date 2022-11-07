import { describe, test, expect } from "@jest/globals";
import { fibonacciSequence } from "../src/fibonacciSequence";
import { fibonacciRecursive } from "../src/finonacciRecursive";

describe("fibonacci", () => {
  test("it should return fibonacci sequence up to 10", () => {
    expect(fibonacciSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
  test("it should return fibonacci value recursively", () => {
    expect(fibonacciRecursive(10)).toEqual(55);
  });
});
