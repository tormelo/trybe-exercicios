const getFactorial = num => num > 1 ? (num * getFactorial(num - 1)) : 1;
console.log(`O fatorial de 4 é ${getFactorial(4)}`);