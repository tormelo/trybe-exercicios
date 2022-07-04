function hydrate(drinks) {
  const numbers = drinks.match(/\d/g).map(Number);
  const cups = numbers.reduce((sum, number) => sum + number, 0);
  return cups > 1 ? `${cups} copos de água` : '1 copo de água';
};

module.exports = hydrate;