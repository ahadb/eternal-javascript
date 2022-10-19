import { describe, test, expect } from "@jest/globals";
import createProxyEnum, { NOPE_HANDLER } from "../src/proxyEnum";

describe("createProxyEnum", () => {
  let SHIRT_SIZES = createProxyEnum({
    S: 10,
    M: 15,
    L: 20,
    XL: 25,
    XXL: 30,
  });

  test("enum properties should be accessible", () => {
    expect(SHIRT_SIZES.S).toEqual(10);
    expect(SHIRT_SIZES.M).toEqual(15);
    expect(SHIRT_SIZES.L).toEqual(20);
    expect(SHIRT_SIZES.XL).toEqual(25);
    expect(SHIRT_SIZES.XXL).toEqual(30);
  });

  test("set trap should not be modifiable and throw", () => {
   expect(NOPE_HANDLER.set).toThrow();
  });

  test("other traps should not be modifiable and throw", () => {
   expect(NOPE_HANDLER.defineProperty).toThrow();
   expect(NOPE_HANDLER.deleteProperty).toThrow();
   expect(NOPE_HANDLER.preventExtensions).toThrow();
   expect(NOPE_HANDLER.setPrototypeOf).toThrow();
  });

  test("should throw error if unknown prop is accessed", () => {

    //expect(SHIRT_SIZES.XL).toThrowError('Unknown prop XL')
  });
});
