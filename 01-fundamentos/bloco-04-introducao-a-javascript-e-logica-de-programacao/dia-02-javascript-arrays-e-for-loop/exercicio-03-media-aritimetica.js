const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (const numero of numbers) {
  soma += numero;
}

const media = soma / numbers.length;

console.log(media);