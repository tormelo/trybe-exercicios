const { uppercase } = require("../exercicios/7-uppercase");

describe('Testa função uppercase', () => {
  it('uppercase deve retornar "POKEMON" quando "pokemon" for o argumento', (done) => {
    uppercase('pokemon', (result) => {
      try {
        expect(result).toBe('POKEMON');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});