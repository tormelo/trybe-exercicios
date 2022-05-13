const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let quantidadeImpares = 0;

for (let numero of numbers) {
  if (numero % 2 !== 0) {
    quantidadeImpares++;
  }
}

if (quantidadeImpares > 0) {
  console.log(quantidadeImpares);
} else {
  console.log('nenhum valor ímpar encontrado');
}