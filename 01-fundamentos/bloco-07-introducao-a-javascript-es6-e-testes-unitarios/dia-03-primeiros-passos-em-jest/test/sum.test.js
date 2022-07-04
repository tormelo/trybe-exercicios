const sum = require("../src/sum");

describe('1 - Função sum', () => {
  it('Para os argumentos 4 e 5 deve retornar 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Para ambos os argumentos como 0 deve retornar 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Para os argumentos 4 e "5" deve lançar um erro', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  it('Para os argumentos 4 e "5" o erro deve ser "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrow("parameters must be numbers");
  });
});