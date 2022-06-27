const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentsAverage = (students, grades) => (
  students.map((student, index) => ({
    name: student,
    average: grades[index].reduce((sum, grade) => sum + grade, 0) / grades[index].length
  }))
);

console.log(studentsAverage(students, grades));