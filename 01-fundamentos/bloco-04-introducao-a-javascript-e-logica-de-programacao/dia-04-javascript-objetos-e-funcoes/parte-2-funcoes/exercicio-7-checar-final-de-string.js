function checkWordEnding(word, ending) {
  let isEndingCompatible = false;

  if (ending === word.slice(word.length - ending.length)) {
    isEndingCompatible = true;
  }
  
  return isEndingCompatible;
}

console.log(checkWordEnding('trybe', 'be'));
console.log(checkWordEnding('joaofernando', 'fernan'));