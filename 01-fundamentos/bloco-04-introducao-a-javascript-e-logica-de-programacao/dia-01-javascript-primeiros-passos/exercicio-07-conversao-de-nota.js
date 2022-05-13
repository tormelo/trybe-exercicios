const notaPorcentagem = 86;

if (notaPorcentagem < 0 || notaPorcentagem > 100) {
  console.log('Nota inválida');
} else if (notaPorcentagem >= 90) {
  console.log('A');
} else if (notaPorcentagem >= 80) {
  console.log('B');
} else if (notaPorcentagem >= 70) {
  console.log('C');
} else if (notaPorcentagem >= 60) {
  console.log('D');
} else if (notaPorcentagem >= 50) {
  console.log('E');
} else {
  console.log('F');
}