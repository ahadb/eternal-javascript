import { describe, test, expect } from "@jest/globals";
import wordCounter from "../src/wordCounter";

describe("chunk", () => {
  test("should return the number of words without regex", () => {
    const numWords = wordCounter(
      "It is easy to hate and it is difficult to love. This is how the whole scheme of things works. All good things are difficult to achieve, and bad things are very easy to get."
    );

    expect(chunkedArray).toEqual([[1, 2], [3, 4], [5]]);
  });
});
