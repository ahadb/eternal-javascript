import groupByMap from '../src/groupByMap';

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

  test("should group by color", () => {
    const colors = [
      "Apricot",
      "Brown",
      "Burgundy",
      "Cerulean",
      "Peach",
      "Pear",
      "Red",
    ];

    const groupedColors = groupByMap(colors, v => v[0]);
    const b = groupedColors.get('B');
    const r = groupedColors.get('R');

    expect(b).toEqual([ 'Brown', 'Burgundy' ])
    expect(r).toEqual([ 'Red' ])
  });

  test("should group by odd or even", () => {
    const groupByOddOrEven = groupByMap([1, 2, 3, 4, 5, 6, 7, 8, 9], (v) =>
      v % 2 ? "odd" : "even"
    );
    const even = groupByOddOrEven.get('even');
    const odd = groupByOddOrEven.get('odd');

    expect(even).toEqual([ 2, 4, 6, 8 ])
    expect(odd).toEqual([ 1, 3, 5, 7, 9])
  });
});
