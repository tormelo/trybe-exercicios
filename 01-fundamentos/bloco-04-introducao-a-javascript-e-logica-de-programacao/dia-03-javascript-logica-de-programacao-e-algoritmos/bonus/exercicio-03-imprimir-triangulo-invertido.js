const tamanho = 5;

let conteudo;

for (let linha = 1; linha <= tamanho; linha += 1) {
  conteudo = '';

  for (let coluna = 1; coluna <= tamanho; coluna += 1) {
    if (coluna <= tamanho - linha) {
      conteudo += ' ';
    } else {
      conteudo += '*'
    }
  }

  console.log(conteudo);
}