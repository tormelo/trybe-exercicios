const palavra = 'banana';

let palavraInvertida = '';

for (let index = palavra.length - 1; index >= 0; index -= 1) {
  palavraInvertida += palavra[index];
}

console.log(palavraInvertida);