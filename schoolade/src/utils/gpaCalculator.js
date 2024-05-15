// /utils/gpaCalculator.js
const gradeToPoints = {
    'A+': 4.0,
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D+': 1.3,
    'D': 1.0,
    'D-': 0.7,
    'F': 0.0,
};

export const calculateGpa = (courses) => {
    if (!courses || courses.length === 0) return 0;

    const totalCredits = courses.reduce((acc, course) => {
        return course && course.credits ? acc + course.credits : acc;
    }, 0);

    const totalPoints = courses.reduce((acc, course) => {
        return course && course.credits && gradeToPoints[course.grade] !== undefined
            ? acc + gradeToPoints[course.grade] * course.credits
            : acc;
    }, 0);

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
};
