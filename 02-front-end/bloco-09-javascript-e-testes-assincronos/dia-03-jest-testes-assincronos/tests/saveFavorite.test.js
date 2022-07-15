const { saveFavoriteMagicCard } = require('../src/saveFavorite.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  while (favoriteCards.length > 4) favoriteCards.pop();
}

describe(' Testa a função saveFavoriteMagicCard', () => {
  afterEach(retrievesFavoriteCards);

  it('um novo card deve ser adicionado a cada execução', async () => {
    expect.assertions(3);
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards.length).toBe(5);
    expect(favoriteCards[4].name).toBe('Beacon of Immortality');
    await saveFavoriteMagicCard('130554');
    expect(favoriteCards.length).toBe(6);
  });

  it('deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);
    const cardNames = favoriteCards.map(({ name }) => name);
    const expectedNames = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];
    expect(favoriteCards).toHaveLength(4);
    expect(cardNames).toEqual(expectedNames);
  });
});
