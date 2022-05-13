let numeros = [];

for (let index = 1; index <= 25; index += 1) {
  numeros.push(index);
}

for (const numero of numeros) {
  console.log(`${numero} / 2 = ${numero / 2}`);
}