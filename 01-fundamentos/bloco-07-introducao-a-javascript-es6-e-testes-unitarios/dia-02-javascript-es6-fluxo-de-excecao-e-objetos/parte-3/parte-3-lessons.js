const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1
const addProperty = (object, key, value) => {
  object[key] = value;
};
addProperty(lesson2, 'turno', 'noite');
console.log(lesson2);

// 2
const listKeys = (object) => {
  console.log(Object.keys(object));
}
listKeys(lesson1);

// 3
const getObjectSize = (object) => {
  console.log(Object.keys(object).length);
}
getObjectSize(lesson1);

// 4
const listValues = (object) => {
  console.log(Object.values(object));
}
listValues(lesson1);

// 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// 6
const getTotalStudents = (object) => {
  let totalStudents = 0;
  for (const key in object) {
    totalStudents += object[key].numeroEstudantes;
  }
  return totalStudents;
}
console.log(`Existem ${getTotalStudents(allLessons)} estudantes ao todo.`);

// 7
const getValueByIndex = (object, index) => Object.values(object)[index];
console.log(getValueByIndex(lesson1, 0));

// 8
const isValidPair = (object, key, value) => {
  const entries = Object.entries(object);
  for (const index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) {
      return true;
    }
  }
  return false;
};
console.log(isValidPair(lesson3, 'turno', 'noite'));
console.log(isValidPair(lesson3, 'materia', 'Maria Clara'));

// Bonus 1
const getSubjectStudents = (object, subject) => {
  const values = Object.values(object);
  let totalStudents = 0;
  for (const index in values) {
    if (values[index].materia === subject) {
      totalStudents += values[index].numeroEstudantes;
    }
  }
  return totalStudents;
}
console.log(`Existem ${getSubjectStudents(allLessons, 'Matemática')} estudantes de matemática.`);
