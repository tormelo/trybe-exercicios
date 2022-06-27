const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (names) => (
  names.reduce((total, name) => (
    total + name.split('').reduce((sum, letter) => (
      letter.toLowerCase() === 'a' ? sum + 1 : sum
    ), 0)
  ), 0)
);

console.log(containsA(names));