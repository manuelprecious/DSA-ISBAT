// Write a program that calculates the average of marks obtained by a student in 3 different
// Subjects i.e., physics, math, chem. Assume for each subject, different tests were conducted
// i.e., assignment, course work, midterm, and end of term examinations.

const MATH_MARKS = {
  assignment: 70,
  course_work: 35,
  midTerm: 33,
  end_of_term: 56,
};

const PHYSICS_MARKS = {
  assignment: 70,
  course_work: 38,
  midTerm: 90,
  end_of_term: 16,
};

const CHEMISTRY_MARKS = {
  assignment: 40,
  course_work: 74,
  midTerm: 39,
  end_of_term: 26,
};

const marksObjects = {
  MATH: MATH_MARKS,
  PHYSICS: PHYSICS_MARKS,
  CHEMISTRY: CHEMISTRY_MARKS,
};

function AverageMarks(marksObject) {
  const averages = {};

  // Loop through each subject and calculate the average
  for (const subject in marksObject) {
    if (marksObject.hasOwnProperty(subject)) {
      let totalMarks = 0;
      const subjectMarks = marksObject[subject];

      // Sum the marks for each test (assignment, course work, midterm, and end of term)
      for (const mark in subjectMarks) {
        totalMarks += subjectMarks[mark];
      }

      // Calculate the average for the current subject and store it
      averages[subject] = totalMarks / 4;
    }
  }

  // Return the averages object
  return averages;
}

// Call the function and store the result
const subjectAverages = AverageMarks(marksObjects);

// Output the result
console.log(subjectAverages);
