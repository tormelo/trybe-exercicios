function getIndexOfLargest(numbers) {
  let indexOfLargest = 0;
  
  for (let index in numbers) {
    if (numbers[index] > numbers[indexOfLargest]) {
      indexOfLargest = index;
    }
  }

  return indexOfLargest;
}

console.log(getIndexOfLargest([2, 3, 6, 7, 10, 1]));