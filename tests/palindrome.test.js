import palindrome from "../src/palindrome";
import { describe, test, expect } from "@jest/globals";

describe("palindrome", () => {
  test("palindrome function is defined", () => {
    expect(typeof palindrome).toEqual("function");
  });

  test('"civic" is a palindrome', () => {
    expect(palindrome("civic")).toBeTruthy();
  });

  test('" civic" is not a palindrome', () => {
    expect(palindrome(" civic")).toBeFalsy();
  });

  test('"civic " is not a palindrome', () => {
    expect(palindrome("civic ")).toBeFalsy();
  });

  test('"single page app" is not a palindrome', () => {
    expect(palindrome("single page app")).toBeFalsy();
  });

  test('"mister" is not a palindrome', () => {
    expect(palindrome("mister")).toBeFalsy();
  });

  test('"90009" a palindrome', () => {
    expect(palindrome("90009")).toBeTruthy();
  });
});
