let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// Exercício 4 - Acessar ultimo morador do bloco 2 e imprimir mensagem
const blocoDois = moradores.blocoDois;
const ultimoMorador = blocoDois[blocoDois.length - 1];

console.log(`O morador do bloco 2 de nome ${ultimoMorador.nome} ${ultimoMorador.sobrenome} mora no ${ultimoMorador.andar}° andar, apartamento ${ultimoMorador.apartamento}`);

// Exercício 5 - Imprimir nome e sobrenome de moradores do bloco 1 e depois 2
for (const bloco in moradores) {
  for (const morador of moradores[bloco]) {
    console.log(`${morador.nome} ${morador.sobrenome}`);
  }
}