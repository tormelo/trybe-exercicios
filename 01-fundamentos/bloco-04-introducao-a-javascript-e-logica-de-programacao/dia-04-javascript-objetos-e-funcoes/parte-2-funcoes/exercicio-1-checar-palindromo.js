function isPalindrome(word) {
  const reverseWord = word.split('').reverse().join('');
  let result = false;

  if (word === reverseWord) {
    result = true;
  } 

  return result;
}

console.log(isPalindrome('arara'));
console.log(isPalindrome('desenvolvimento'));