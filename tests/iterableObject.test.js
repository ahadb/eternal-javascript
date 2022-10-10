import { daysOfYearsSimplified } from "../src/iterableObject";

describe("iterableObject", () => {
  test("should create an iterable out of a vanilla object", () => {
    let daysInYearArr = [];

    // for..of should work now
    for (let day of daysOfYearsSimplified) {
      daysInYearArr.push(day);
    }

    expect(daysInYearArr.length).toEqual(365);
  });
});
