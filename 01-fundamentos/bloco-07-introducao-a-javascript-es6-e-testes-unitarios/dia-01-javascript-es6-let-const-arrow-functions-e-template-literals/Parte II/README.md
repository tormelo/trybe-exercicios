# Parte II

Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre `let`, `const`, `arrow functions`, `template literals` e `ternary operator`.

## 1.
Crie uma função que receba um número e retorne seu fatorial.

*   Na matemática, o fatorial de um número não negativo `N`, com a notação `N!`, é o produto de todos os inteiros menores ou iguais a `N`. **Exemplo:** 4! = 4 \* 3 \* 2 \* 1 = 24.
    
*   **_Bônus (opcional):_** tente fazer o mesmo exercício [de forma recursiva](http://www.devfuria.com.br/logica-de-programacao/recursividade-fatorial/). **Spoiler:** É possível resolver com uma linha usando `ternary operator`.
    

## 2.
Crie uma função que receba uma frase e retorne qual a maior palavra.

Exemplo:

    longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

## 3.
Crie uma página que contenha:

*   Um botão ao qual será associado um _event listener_;
    
*   Uma variável `clickCount` no arquivo **_JavaScript_** que acumule o número de _clicks_ no botão;
    
*   Um campo no **_HTML_** que vá atualizando a quantidade de _clicks_ no botão conforme a variável `clickCount` é atualizada.
    

## 4.
Crie um código **_JavaScript_** com a seguinte especificação:

**Não se esqueça de usar `template literals`**

*   _Função 1_: Escreva uma função que vai receber uma `string` como parâmetro. Sua função deverá procurar pela letra `x` em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova `string`.
    
    **Exemplo:**
    
    *   String determinada: "Tryber x aqui!"
    *   Parâmetro: "Bebeto"
    *   Retorno: "Tryber Bebeto aqui!"

*   Um array com escopo global, que é o escopo do arquivo **_JS_**, nesse caso, contendo cinco strings com suas principais `skills`.
    
*   _Função 2_: Escreva uma função que vai receber a `string` retornada da _Função 1_ como parâmetro. Essa função deve concatenar as `skills` do array global à `string` que foi passada para a _Função 2_ via parâmetro. Você deve ordenar os `skills` em ordem alfabética. Sua função deve retornar essa nova `string`.
    
    **Exemplo:**
    
    "Tryber x aqui!
    
    Minhas cinco principais habilidades são:
    
    *   JavaScript;
    *   HTML; ...
    
    #goTrybe".