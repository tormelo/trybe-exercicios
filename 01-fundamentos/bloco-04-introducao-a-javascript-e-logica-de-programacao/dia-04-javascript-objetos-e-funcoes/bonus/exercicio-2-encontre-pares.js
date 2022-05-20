let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers (vector) {
  let even = [];

  for (const array of vector) {
    for (const number of array) {
      if (number % 2 === 0) {
        even.push(number);
      }
    }
  }

  return even;
}

console.log(arrayOfNumbers(vector));