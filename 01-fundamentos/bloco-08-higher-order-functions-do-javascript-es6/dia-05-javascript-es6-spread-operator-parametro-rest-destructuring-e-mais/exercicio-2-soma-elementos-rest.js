const sum = (...numbers) => numbers.reduce((total, number) => total + number, 0);

console.log(sum(100, 13, 27, 50, 800, 45, 2));