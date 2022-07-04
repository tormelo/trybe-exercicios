const searchEmployee = require("../src/searchEmployee");

describe('Bonus - Testa a função searchEmployee', () => {
  it('Testa se a função searchEmployee existe', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Testa se partir de argumentos validos a função tem o retorno esperado', () => {
    expect(searchEmployee('4456-4', 'firstName')).toBe('Leila');
    expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
    expect(searchEmployee('5569-4', 'specialities')).toEqual(['Frontend', 'Redux', 'React', 'CSS']);
  });
  it('Testa se a partir de um id inválido retorna o erro "ID não identificada."', () => {
    expect(() => searchEmployee('9999-9', 'firstName')).toThrow('ID não identificada.');
  });
  it('Testa se a partir de requisição de informação que não existe retorna o erro "Informação indisponível."', () => {
    expect(() => searchEmployee('4456-4', 'birthDay')).toThrow('Informação indisponível.');
  });
});