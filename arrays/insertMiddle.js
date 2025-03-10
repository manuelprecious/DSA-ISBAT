// Write a C program showing how to insert an element entered by the user in the middle of an array

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

    // Determining the middle position
  const middlePosition = Math.floor(array.length / 2);
  const firstNElements = array.slice(0, middlePosition);
  const lastFromN = array.slice(middlePosition);
  const newArray = [...firstNElements, insertedParam, ...lastFromN];
  return newArray;
}

const newArray = insertMiddle(planets, missingPlanet);
console.log(newArray);