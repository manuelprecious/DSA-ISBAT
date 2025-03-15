// Write a program showing how to insert an element entered by the user in the middle of an array

const planets = [
  "Venus",
  "Mercury",
  "Earth",
  "Mars",
  "Saturn",
  "Uranus",
  "Pluto",
  "Neptune",
];

// Assume entered from an HTML for or read from database
const missingPlanet = "Jupiter";

function insertMiddle(array, insertedParam) {
  const middlePosition = Math.floor(array.length / 2);

  const arrayLength = (array.length = array.length + 1);

  for (let i = arrayLength - 1; i >= middlePosition; i--) {
    array[i] = array[i - 1];
  }

  array[middlePosition] = insertedParam;
}

const newArray = insertMiddle(planets, missingPlanet);
console.log(planets);
