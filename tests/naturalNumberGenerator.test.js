import { describe, test, expect } from "@jest/globals";
import naturalNumbersGenerator from "../src/naturalNumGenerator";

describe("naturalNumberGenerator", () => {
  test("should be able to call next on it", () => {
    const nums = naturalNumbersGenerator();

    expect(nums.next()).toEqual({ value: 1, done: false });
    expect(nums.next()).toEqual({ value: 2, done: false });
    expect(nums.next()).toEqual({ value: 3, done: false });
    expect(nums.next()).toEqual({ value: 4, done: false });
    expect(nums.next()).toEqual({ value: undefined, done: true });
  });

  test("should be iterable", () => {
    const map = new Map();
    for (const m of naturalNumbersGenerator()) {
      map.set(m, m);
    }
    const values = [...map.values()];

    expect(values).toContain(3);
  });
});
