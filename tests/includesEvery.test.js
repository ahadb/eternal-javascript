import { describe, test, expect } from "@jest/globals";
import includesEvery from "../src/includesEvery";

describe("includesEvery", () => {
  const arr1 = ["c", "b"];
  const arr2 = ["a", "c", "b"];

  test("should return false", () => {
    const doesNot = includesEvery(arr1, arr2);

    expect(doesNot).toEqual(false);
  });

  test("should return true", () => {
    const does = includesEvery(arr2, arr1);

    expect(does).toEqual(true);
  });
});
