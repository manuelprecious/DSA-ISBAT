// Write a program that calculates the average of marks obtained by a student in 3 different
// Subjects i.e., physics, math, chem. Assume for each subject, different tests were conducted
// i.e., assignment, course work, midterm, and end of term examinations.

/**
 * First row, Physics marks
 * Second Row, Chemistry marks
 * Third Row, Math marks
 */

const averageMarks = {};
const subjects = ["Physics", "Chemistry", "Math"];
const marks = [
  [70, 35, 33, 56],
  [70, 38, 90, 16],
  [40, 74, 39, 26],
];

function AverageMarks(array) {
  for (let rowLength = 0; rowLength < marks.length; rowLength++) {
    let marksTotal = 0;
    for (let colLength = 0; colLength < array[rowLength].length; colLength++) {
      marksTotal += array[rowLength][colLength];
    }
    averageMarks[subjects[rowLength]] = marksTotal / 4;
  }
  console.log(averageMarks);
  // return averages;
}

// Call the function and store the result
const subjectAverages = AverageMarks(marks);

// Output the result
// console.log(subjectAverages);
