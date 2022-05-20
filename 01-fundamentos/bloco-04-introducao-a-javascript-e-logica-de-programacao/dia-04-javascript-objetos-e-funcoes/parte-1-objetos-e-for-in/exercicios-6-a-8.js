let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// Exercício 6 - Acessar propriedades e imprimir no formato especificado
console.log(`6.\nO livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'\n`);

// Exercício 7 - Adicionar novo livro na chave livrosFavoritos
leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  },
);

// Exercício 8 - Imprimir quantidade de livros favoritos no formato especificado
console.log(`8.\n${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);