const tamanho = 9;

let conteudo;

for (let linha = 1; linha <= tamanho; linha += 1) {
  if (linha % 2 === 0) {
    continue;
  }

  conteudo = '';

  let espacos = (tamanho - linha) / 2;

  for (let coluna = 1; coluna <= espacos + linha; coluna += 1) {
    if (coluna > espacos) {
      conteudo += '*'
    } else {
      conteudo += ' ';
    }
  }

  console.log(conteudo);
}