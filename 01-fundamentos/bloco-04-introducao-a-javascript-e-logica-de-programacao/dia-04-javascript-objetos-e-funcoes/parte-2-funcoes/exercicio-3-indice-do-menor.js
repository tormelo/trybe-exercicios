function getIndexOfSmallest(numbers) {
  let indexOfSmallest = 0;

  for (let index in numbers) {
    if (numbers[index] < numbers[indexOfSmallest]) {
      indexOfSmallest = index;
    }
  }
  
  return indexOfSmallest;
}

console.log(getIndexOfSmallest([2, 4, 6, 7, 10, 0, -3]));