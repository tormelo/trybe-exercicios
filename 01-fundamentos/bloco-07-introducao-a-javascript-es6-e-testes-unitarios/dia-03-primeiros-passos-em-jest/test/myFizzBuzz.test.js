const myFizzBuzz = require("../src/myFizzBuzz");

describe('3 - Função myFizzBuzz', () => {
  it('Para o argumento 15 deve retornar "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Para o argumento 6 deve retornar "fizz"', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  it('Para o argumento 10 deve retornar "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Para o argumento 4 deve retornar 4', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });
  it('Para o argumento "3" deve retornar false', () => {
    expect(myFizzBuzz('3')).toBe(false);
  });
});