const numero = 10;

let fatorial = 1;

for (let index = 1; index <= numero; index += 1) {
  fatorial *= index;
}

console.log(`O fatorial de ${numero} é: ${fatorial}`);