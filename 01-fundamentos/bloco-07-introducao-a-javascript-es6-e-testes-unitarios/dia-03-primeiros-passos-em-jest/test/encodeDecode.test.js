const { encode, decode } = require("../src/encodeDecode");

describe('4 - Funções encode e decode', () => {
  it('Testa se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('Testa se as vogais "a, e, i, o, u" são convertidas em "1, 2, 3, 4, 5" com a função encode', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  it('Testa se as letras restantes não são convertidas', () => {
    const notVowel = 'b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z'
    expect(encode(notVowel)).toBe(notVowel);
  });
  it('Testa se os números "1, 2, 3, 4, 5" são convertidas em "a, e, i, o, u" com a função decode', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });
  it('Testa se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('This is an encoding test.').length).toBe(25);
    expect(decode('Th3s 3s 1n 2nc4d3ng t2st.').length).toBe(25);
  });
  it('Retorne uma string codificada quando a função encode for utilizada', () => {
    expect(encode('hello')).toBe('h2ll4');
    expect(encode('How are you today?')).toBe('H4w 1r2 y45 t4d1y?');
    expect(encode('This is an encoding test.')).toBe('Th3s 3s 1n 2nc4d3ng t2st.');
    expect(encode('go Trybe!')).toBe('g4 Tryb2!');
  });

  it('Retorne uma string decodificada quando a função decode for utilizada', () => {
    expect(decode('h2ll4')).toBe('hello');
    expect(decode('H4w 1r2 y45 t4d1y?')).toBe('How are you today?');
    expect(decode('Th3s 3s 1n 2nc4d3ng t2st.')).toBe('This is an encoding test.');
    expect(decode('g4 Tryb2!')).toBe('go Trybe!');
  });
});