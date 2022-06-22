const isEqual = (a, b) => a === b;

const guessOneToFive = (number, callback) => {
  const random = Math.floor((Math.random() * 5) + 1);
  return callback(number, random) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(guessOneToFive(4, isEqual));