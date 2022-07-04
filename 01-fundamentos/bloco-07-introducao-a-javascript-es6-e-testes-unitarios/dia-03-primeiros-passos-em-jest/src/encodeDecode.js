const encodingTable = [
  { char: 'a', value: 1 },
  { char: 'e', value: 2 },
  { char: 'i', value: 3 },
  { char: 'o', value: 4 },
  { char: 'u', value: 5 }
];

function encodeCharacter(character) {
  const encoded = encodingTable.find(({ char, value }) => character === char);
  return encoded ? encoded.value : character;
}

function decodeCharacter(character) {
  const decoded = encodingTable.find(({ char, value }) => character === value.toString());
  return decoded ? decoded.char : character;
}

function encode(sentence) {
  let sentenceArray = sentence.split('');
  return sentenceArray
    .map((character) => encodeCharacter(character))
    .join('');
}

function decode(sentence) {
  let sentenceArray = sentence.split('');
  return sentenceArray
    .map((character) => decodeCharacter(character))
    .join('');
}

module.exports = { encode, decode };