const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortNumbers = numbers => numbers.sort((a, b) => a - b).join(', ');

console.log(`Os números ${sortNumbers(oddsAndEvens)} se encontram ordenados de forma crescente!`);