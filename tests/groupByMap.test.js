const groupByMap = require("../src/groupByMap");

describe("groupByMap", () => {
  test("should group by data type", () => {
    const groceries = [
      { name: "asparagus", type: "vegetables", quantity: 9 },
      { name: "bananas", type: "fruit", quantity: 5 },
      { name: "steak", type: "meat", quantity: 23 },
      { name: "cherries", type: "fruit", quantity: 12 },
      { name: "fish", type: "meat", quantity: 22 },
    ];

    const groceriesGrouped = groupByMap(groceries, (grocery) => grocery.type);
    const vegetables = groceriesGrouped.get("vegetables");
    const fruit = groceriesGrouped.get("fruit");

    expect(vegetables).toEqual([
      { name: "asparagus", type: "vegetables", quantity: 9 },
    ]);
    expect(fruit).toEqual([
      { name: "bananas", type: "fruit", quantity: 5 },
      { name: "cherries", type: "fruit", quantity: 12 },
    ]);
  });
});
