const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (matrix) => (
  matrix.reduce((previous, current) => previous.concat(current))
);

console.log(flatten(arrays));