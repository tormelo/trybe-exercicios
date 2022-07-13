const { getPokemonDetails } = require("../exercicios/getPokemonDetails");

describe("Testa a função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails(
      ({ name }) => name === 'Dolinho',
      (error, message) => {
        try {
          expect(message).toBeNull();
          expect(error.message).toBe('Não temos esse pokémon para você :(');
          done();
        } catch (error) {
          done(error);
        }
      }
    );
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    getPokemonDetails(
      ({ name }) => name === 'Charmander',
      (error, message) => {
        try {
          expect(error).toBeNull();
          expect(message).toBe('Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember');
          done();
        } catch (error) {
          done(error);
        }
      }
    );
  });
});