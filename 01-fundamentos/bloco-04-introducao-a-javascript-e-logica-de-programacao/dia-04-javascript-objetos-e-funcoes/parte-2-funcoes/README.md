# Parte II - Funções

Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.

A manipulação de arrays pode ser complexa em alguns momentos e por isso o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada, se você tiver curiosidade de ler mais sobre esses métodos, [clique aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e sempre que um método novo for necessário ele será ensinado a você.

**_Spoiler-alert_**: para os exercícios do dia, os métodos `split`, `join` e `reverse` podem ser muito úteis.

## 1.
Crie uma função que receba uma `string` e retorne `true` se for um [palíndromo](https://pt.wikipedia.org/wiki/Pal%C3%ADndromo), ou `false`, se não for.

*   Exemplo de palíndromo: _arara_.
    
*   `verificaPalindrome('arara')`;
    
*   Retorno esperado: `true`
    
*   `verificaPalindrome('desenvolvimento')`;
    
*   Retorno esperado: `false`

## 2.
Crie uma função que receba um `array` de inteiros e retorne o índice do maior valor.

*   Array de teste: _`[2, 3, 6, 7, 10, 1];`_.
    
*   Valor esperado no retorno da função: `4`.

## 3.
Crie uma função que receba um `array` de inteiros e retorne o índice do menor valor.

*   Array de teste: _`[2, 4, 6, 7, 10, 0, -3];`_.
    
*   Valor esperado no retorno da função: `6`.

## 4.
Crie uma função que receba um `array` de nomes e retorne o nome com a maior quantidade de caracteres.

*   Array de teste: _`['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];`_.
    
*   Valor esperado no retorno da função: `Fernanda`.

## 5.
Crie uma função que receba um `array` de inteiros e retorne o inteiro que mais se repete.

*   Array de teste: _`[2, 3, 2, 5, 8, 2, 3];`_.
    
*   Valor esperado no retorno da função: `2`.

## 6.
Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

*   Valor de teste: _`N = 5`_.
    
*   Valor esperado no retorno da função: _1+2+3+4+5 =_ `15`.

## 7.
Crie uma função que receba uma `string word` e outra `string ending`. Verifique se a `string ending` é o final da `string word`. Considere que a `string ending` sempre será menor que a `string word`.

*   Valor de teste: `'trybe' e 'be'`
    
*   Valor esperado no retorno da função: `true`
    
*   `verificaFimPalavra('trybe', 'be')`;
    
*   Retorno esperado: `true`
    
*   `verificaFimPalavra('joaofernando', 'fernan')`;
    
*   Retorno esperado: `false`