const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor;

for (let numero of numbers) {
  if (menorValor === undefined || numero < menorValor) {
    menorValor = numero;
  } 
}

console.log(menorValor);