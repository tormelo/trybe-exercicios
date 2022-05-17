const tamanho = 7;

let tamanhoReal = tamanho % 2 !== 0 ? tamanho : tamanho - 1;
let conteudo;

for (let linha = 1; linha <= tamanhoReal; linha += 1) {
  if (linha % 2 === 0) {
    continue;
  }

  conteudo = '';

  let espaco = (tamanhoReal - linha) / 2;

  for (let coluna = 1; coluna <= espaco + linha; coluna += 1) {
    if (linha === tamanhoReal) {
      conteudo += '*'
    } else {
      if (coluna === espaco + 1 || coluna === tamanhoReal - espaco) {
        conteudo += '*'
      } else {
        conteudo += ' ';
      }
    }
  }

  console.log(conteudo);
}