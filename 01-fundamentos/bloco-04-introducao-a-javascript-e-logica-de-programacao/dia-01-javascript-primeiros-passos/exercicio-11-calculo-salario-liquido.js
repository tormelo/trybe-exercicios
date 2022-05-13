const salarioBruto = 3000;

let aliquotaINSS;

if (salarioBruto > 5189.82) {
  aliquotaINSS = 570.88;
} else if (salarioBruto >= 2594.93) {
  aliquotaINSS = salarioBruto * 0.11;
} else if (salarioBruto >= 1556.95) {
  aliquotaINSS = salarioBruto * 0.09;
} else {
  aliquotaINSS = salarioBruto * 0.08;
}

const salarioBase = salarioBruto - aliquotaINSS;

let valorIR;

if (salarioBase > 4664.68) {
  valorIR = (salarioBase * 0.275) - 869.36;
} else if (salarioBase >= 3751.06) {
  valorIR = (salarioBase * 0.225) - 636.13;
} else if (salarioBase >= 2826.66) {
  valorIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase >= 1903.99) {
  valorIR = (salarioBase * 0.075) - 142.80;
} else {
  valorIR = 0;
}

const salarioLiquido = salarioBase - valorIR;

console.log(`O salário líquido a ser recebido é de R$ ${salarioLiquido}`);