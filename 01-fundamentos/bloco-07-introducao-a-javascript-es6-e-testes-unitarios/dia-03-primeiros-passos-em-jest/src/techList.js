function techList(list, studentName) {
  if (list.length === 0) return 'Vazio!';
  return list
    .sort()
    .map((currentTech) => ({ tech: currentTech, name: studentName }));
};

module.exports = techList;