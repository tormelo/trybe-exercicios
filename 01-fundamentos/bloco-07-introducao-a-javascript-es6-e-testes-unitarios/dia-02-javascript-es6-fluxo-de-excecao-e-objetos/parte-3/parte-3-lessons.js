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
function addProperty(object, key, value) {
  object[key] = value;
}

addProperty(lesson2, 'turno', 'noite');
console.log(lesson2);

// 2
function listKeys(object) {
  console.log(Object.keys(object));
}
listKeys(lesson1);

// 3
function getObjectSize(object) {
  console.log(Object.keys(object).length);
}
getObjectSize(lesson1);

// 4
function listValues(object) {
  console.log(Object.values(object));
}
listValues(lesson1);

// 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);