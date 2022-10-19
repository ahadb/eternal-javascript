import { describe, test, expect } from "@jest/globals";
import boolValidator from '../src/boolValidator';

describe("boolValidator", () => {
  test("should return false for non acceptable bools", () => {

    const acceptableBools = [true, "true", "truthy", "y", "Y", "YES", "yes"];

    expect(boolValidator('YESSUM', acceptableBools)).toEqual(false);
    expect(boolValidator('1', acceptableBools)).toEqual(false);
    expect(boolValidator('one', acceptableBools)).toEqual(false);
  });

  test("should return true for acceptable bools", () => {

    const acceptableBools = [true, "true", "truthy", "y", "Y", "YES", "yes"];

    expect(boolValidator('true', acceptableBools)).toEqual(true);
    expect(boolValidator('YES', acceptableBools)).toEqual(true);
    expect(boolValidator('yes', acceptableBools)).toEqual(true);
    expect(boolValidator('Y', acceptableBools)).toEqual(true);
  });
});
