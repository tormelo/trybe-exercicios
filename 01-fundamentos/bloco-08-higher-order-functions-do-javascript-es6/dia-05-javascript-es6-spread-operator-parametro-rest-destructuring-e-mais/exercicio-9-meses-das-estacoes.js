const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const {spring, summer, autumn, winter} = yearSeasons;
const months = [...spring, ...summer, ...autumn, ...winter];

console.log(months);

// // Resolvendo questão com uma função
// const getMonths = ({spring, summer, autumn, winter}) => (
//   [...spring, ...summer, ...autumn, ...winter]
// )

// console.log(getMonths(yearSeasons));