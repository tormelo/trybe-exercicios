const array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (const palavra of array) {
  if (palavra.length > maiorPalavra.length) {
    maiorPalavra = palavra;
  }
  if (palavra.length < menorPalavra.length) {
    menorPalavra = palavra;
  }
}

console.log(`A maior palavra da array é ${maiorPalavra}`);
console.log(`A menor palavra da array é ${menorPalavra}`);