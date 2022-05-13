const a = 12;
const b = 19;
const c = 18;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > b) {
  console.log(c);
} else {
  console.log('Nenhum dos números é maior que todos os outros.');
}