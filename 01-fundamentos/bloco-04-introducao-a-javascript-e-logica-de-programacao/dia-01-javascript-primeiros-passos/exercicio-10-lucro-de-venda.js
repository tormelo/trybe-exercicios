const custo = 10;
const valorVenda = 16;

const numeroVendas = 1000;
const imposto = 1.2;

if (custo < 0 || valorVenda < 0) {
  console.log('Os valores de entrada não podem ser menores que zero');
} else {
  const custoTotal = (custo * imposto) * numeroVendas;
  const vendaTotal = valorVenda * numeroVendas;
  const lucro = vendaTotal - custoTotal;

  console.log(`O lucro na venda de ${numeroVendas} unidades é de $ ${lucro}`);
}