import maxChar from "../src/maxChar";
import { describe, test, expect } from "@jest/globals";

describe("maxChar", () => {
  test("maxChar function exists", () => {
    expect(typeof maxChar).toEqual("function");
  });

  test("Finds the most frequently used char", () => {
    expect(maxChar("x")).toEqual("x");
    expect(maxChar("studentssess")).toEqual("s");
  });

  test("Works with numbers in the string", () => {
    expect(maxChar("aeiou100")).toEqual("0");
  });
});
