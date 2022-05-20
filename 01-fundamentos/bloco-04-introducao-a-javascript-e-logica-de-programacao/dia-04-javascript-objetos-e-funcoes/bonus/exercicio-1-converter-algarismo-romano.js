const romanNumbers = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000
}

function romanToDecimal(romanNumber) {
  romanNumber = romanNumber.toLowerCase();
  
  const lastPos = romanNumber.length - 1;
  let current = romanNumbers[romanNumber[lastPos]];
  let next = current;
  let sum = 0;

  for (let i = lastPos; i >= 0; i -= 1) {
    current = romanNumbers[romanNumber[i]];
    
    if (current >= next) {
      sum += current;
    } else {
      sum -= current;
    }

    next = current;
  }
  
  return sum;
}

console.log(romanToDecimal('CLXXIX'));