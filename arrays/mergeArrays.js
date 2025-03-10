// Write a program that accepts a group of n domestic animals and a group of x wild animals.
// Your program should print n + x animals after entering each group.

const WILD_ANIMALS = ["Lion", "Tiger", "Zebra", "Buffalo"];
const DOMESTIC_ANIMALS = [
  "Dogs",
  "Cats",
  "Hens",
  "Cows",
  "Horses",
  "Donkeys",
  "Sheet",
];

const mergedArray = WILD_ANIMALS.concat(...DOMESTIC_ANIMALS);