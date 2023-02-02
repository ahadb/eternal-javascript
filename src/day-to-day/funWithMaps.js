// create a map of different numbers
const numbersMap = new Map([
  ["whole numbers", [1, 2, 3, 4]],
  ["decimal numbers", [1.1, 1.2, 1.3, 1.4]],
  ["negative numbers", [-1, -2, -3, -4]],
  ["prime numbers", [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]],
]);

numbersMap.get("prime numbers");
// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

const numbers = [
  { type: "whole numbers", data: 1 },
  { type: "whole numbers", data: 20 },
  { type: "whole numbers", data: 30 },
  { type: "whole numbers", data: 40 },
  { type: "whole numbers", data: 5000 },
  { type: "decimal numbers", data: 0.1 },
  { type: "decimal numbers", data: 0.2 },
  { type: "decimal numbers", data: 0.3 },
  { type: "decimal numbers", data: 0.4 },
  { type: "decimal numbers", data: 3.7 },
  { type: "negative numbers", data: -100 },
  { type: "negative numbers", data: -1000 },
  { type: "negative numbers", data: -99 },
  { type: "negative numbers", data: -711 },
  { type: "prime numbers", data: 2 },
  { type: "prime numbers", data: 3 },
  { type: "prime numbers", data: 5 },
  { type: "prime numbers", data: 7 },
  { type: "prime numbers", data: 11 },
];
