const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorValor;

for (const numero of numbers) {
  if (maiorValor === undefined || numero > maiorValor) {
    maiorValor = numero;
  } 
}

console.log(maiorValor);