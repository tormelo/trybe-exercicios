function getSummation(number) {
  let summation = 0;

  for (let index = 1; index <= number; index += 1) {
    summation += index;
  }

  return summation;
}

console.log(getSummation(5));