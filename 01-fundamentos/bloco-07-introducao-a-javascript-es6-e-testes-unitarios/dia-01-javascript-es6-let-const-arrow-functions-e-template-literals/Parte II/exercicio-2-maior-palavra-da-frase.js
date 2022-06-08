// Usa match e regex para criar array de palavras com propriedade unicode Letter p/ incluir letras acentuadas no filtro
// Ordena a array com as palavras em ordem crescente de tamanho
// Remove e retorna o ultimo elemento da array
const getLongestWord = (phrase) => {
  return phrase
    .match(/[\p{Letter}]+/gu)
    .sort((a, b) => a.length - b.length)
    .pop();
}

console.log(getLongestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));