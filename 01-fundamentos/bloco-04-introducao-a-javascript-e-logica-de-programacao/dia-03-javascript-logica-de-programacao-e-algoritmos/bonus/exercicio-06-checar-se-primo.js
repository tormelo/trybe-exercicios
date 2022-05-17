const numero = 11;

let isPrime;

if (numero < 2) {
  isPrime = false;
} else {
  isPrime = true;

  for (let divisor = 2; divisor < numero; divisor += 1) {
    if (numero % divisor === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`O número ${numero} é primo.`);
} else {
  console.log(`O número ${numero} NÃO é primo`);
}