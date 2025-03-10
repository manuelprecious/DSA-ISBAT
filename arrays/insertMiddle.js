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