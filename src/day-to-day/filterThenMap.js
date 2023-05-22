/**
 * @desc
 * composing simple functions with filter then map
 *
 */

const people = [
  { id: 0, name: "Joe", sports: "Volleyball" },
  { id: 1, name: "Danielle", sports: "Baseball" },
  { id: 2, name: "Omar", sports: "Volleyball" },
  { id: 3, name: "Sasha", sports: "Baseball" },
  { id: 4, name: "Ayesha", sports: "Baseball" },
];

// filter those people who play baseball
// then return a map of the names of those people
const baseballPlayers = people
  .filter(function (person) {
    return person.sports === "Baseball";
  })
  .map(function (person) {
    return person.name;
  });
