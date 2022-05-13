const anguloA = 40;
const anguloB = 60;
const anguloC = 80;

if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
  console.log('Um dos ângulos informados não é valido');
} else if (anguloA + anguloB + anguloC === 180) {
  console.log(true);
} else {
  console.log(false);
}