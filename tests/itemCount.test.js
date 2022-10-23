import { describe, test, expect } from "@jest/globals";
import itemCount from "../src/itemCount";

describe("itemCount", () => {
  const carModels = [
    "Camaro",
    "Civic",
    "Mustang",
    "M4",
    "M3",
    "M2",
    "M2",
    "Camaro",
    "Civic",
    "Elantra",
    "911",
    "Prius",
    "Supra",
  ];

  test("should return counts of car models", () => {
    const countCarsModels = itemCount(carModels);
    expect(countCarsModels).toEqual({
      911: 1,
      Camaro: 2,
      Civic: 2,
      Mustang: 1,
      M4: 1,
      M3: 1,
      M2: 2,
      Elantra: 1,
      Prius: 1,
      Supra: 1,
    });
  });
});
