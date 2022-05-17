const numeroMaximo = 50;

let maiorPrimo;

for (let numeroAtual = 2; numeroAtual <= numeroMaximo; numeroAtual += 1 ) {
  let isPrime = true;

  for (let divisor = 2; divisor < numeroAtual; divisor += 1) {
    if (numeroAtual % divisor === 0) {
      isPrime = false;
      break;
    }
  }
  
  if (isPrime) {
    maiorPrimo = numeroAtual;
  }
}

console.log(`O maior número primo entre 0 e ${numeroMaximo} é ${maiorPrimo}`);