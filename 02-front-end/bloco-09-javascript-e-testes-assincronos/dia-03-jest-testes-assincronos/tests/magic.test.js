require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  it('deve ser uma função', () => {
    expect(typeof getMagicCard).toBe('function');
  });
  it('com o argumento \'130550\', a função fetch deve ser chamada', () => {
    getMagicCard('130550')
    expect(fetch).toHaveBeenCalled();
  });
  it('com o argumento \'130550\', a função fetch deve ser chamada com o endpoint esperado', () => {
    getMagicCard('130550')
    const expectedEndpoint = 'https://api.magicthegathering.io/v1/cards/130550';
    expect(fetch).toHaveBeenCalledWith(expectedEndpoint);
  });
  it('com o argumento \'130550\', o objeto retornado deve ser igual ao objeto simulado card', async () => {
    expect.assertions(1);
    const response = await getMagicCard('130550');
    expect(response).toEqual(card);
  });
  it('com o argumento \'130550\', o objeto retornado deve possuir a propriedade name com o valor \'Ancestor\'s Chosen\'', async () => {
    expect.assertions(1);
    const { name } = await getMagicCard('130550');
    expect(name).toBe('Ancestor\'s Chosen');
  });
  it('com o argumento \'idDesconhecido\', deve retornar erro com a mensagem \'Id not found!\'', async () => {
    expect.assertions(1);
    const response = await getMagicCard('idDesconhecido');
    expect(response).toEqual(new Error('Id is not found!'));
  });
});