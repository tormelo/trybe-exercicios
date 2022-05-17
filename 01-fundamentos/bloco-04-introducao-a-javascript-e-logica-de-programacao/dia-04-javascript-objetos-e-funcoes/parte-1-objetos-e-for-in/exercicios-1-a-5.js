const info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Exercício 1 - Imprimir boas vindas
console.log(`1.\nBem-vinda, ${info.personagem}\n`);

// Exercício 2 - Inserir nova propriedade e imprimir o objeto
info.recorrente = 'Sim';
console.log('2.');
console.log(info);

// Exercício 3 - Mostrar todas as chaves do objeto
console.log('\n3.');
for (const key in info) {
  console.log(key);
}

// Exercício 4 - Mostrar todos valores das chaves usando for/in
console.log('\n4.');
for (const key in info) {
  console.log(info[key]);
}

// Exercício 5 - Definir novo objeto e imprimir valores junto do outro
const info2 = {
  personagem: 'Tio Patinhas',
  origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

console.log('\n5.');
for (const key in info) {
  if (
    key === 'recorrente' 
    && info[key] === 'Sim' 
    && info2[key] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key], 'e', info2[key]);
  }
}