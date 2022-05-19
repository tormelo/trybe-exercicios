function getMostRepeatingNumber(numbers) {
  let mostRepeating;
  let repetitions = 0;

  let currentReps;
  for (const num of numbers) {
    currentReps = 0;
    for (let index = 0; index < numbers.length; index += 1) {
      if (num === numbers[index]) {
        currentReps += 1;
      }
    }

    if (currentReps > repetitions) {
      mostRepeating = num;
      repetitions = currentReps;
    }
  }

  return mostRepeating;
}

console.log(getMostRepeatingNumber([2, 3, 2, 5, 8, 2, 3]));