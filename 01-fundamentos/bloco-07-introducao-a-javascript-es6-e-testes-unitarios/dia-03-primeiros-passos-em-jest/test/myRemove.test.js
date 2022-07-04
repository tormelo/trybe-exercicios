const myRemove = require("../src/myRemove");

describe('2 - Função myRemove', () => {
  it('Para os argumentos [1, 2, 3, 4] e 3 deve retornar [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Para os argumentos [1, 2, 3, 4] e 3 não deve retornar [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Para os argumentos [1, 2, 3, 4] e 5 deve retornar [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});