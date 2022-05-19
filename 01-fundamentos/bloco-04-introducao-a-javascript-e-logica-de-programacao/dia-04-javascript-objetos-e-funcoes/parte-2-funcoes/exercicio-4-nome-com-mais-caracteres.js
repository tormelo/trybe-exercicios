function getLongestName(names) {
  let longestName = names[0];

  for (const name of names) {
    if (name.length > longestName.length) {
      longestName = name;
    }
  }

  return longestName;
}

console.log(getLongestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));