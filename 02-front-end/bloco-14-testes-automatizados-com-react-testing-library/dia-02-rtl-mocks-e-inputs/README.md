# Agora a prática

Os exercícios estão divididos em duas partes, primeiro vamos praticar os _mocks_ sem o React e depois vamos implementar os testes em uma aplicação simples feita com React.

## Parte 1

### Para os exercícios a seguir:

*   Primeiro crie uma nova aplicação e instale o jest para rodar os nossos testes, para isso execute os comandos abaixo:
<!--  -->
    npm init -y
    
    npm install --save-dev jest

*   Agora basta alterar o script do test no arquivo **package.json**, inserindo o jest:
<!--  -->
    ...
    "scripts": {
        "test": "jest --watchAll"
    }
    ...

*   Crie um arquivo chamado _service.js_: é nele que você irá criar as funções que são pedidas nos exercícios. Você também pode utilizar o mesmo arquivo criado durante o conteúdo do dia.
*   Crie um arquivo chamado _service.test.js_: é ele que vai conter os testes das funções do arquivo anterior.

### 1.  Crie uma função que gere um número aleatório

*   Defina uma função que gere um número aleatório entre 0 e 100.
*   Desenvolva os testes para essa função.
*   Utilize o mock e defina o retorno padrão como 10.
*   Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

### 2.  Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.

*   Defina o mock da função para a nova funcionalidade da função.
*   Teste se a função foi chamada e a nova implementação de divisão foi aplicada.
*   Verifique se a aplicação da nova implementação acontece apenas uma vez.

### 3.  Use a mesma função do primeiro exercício

*   Utilize o mock e desenvolva uma nova implementação que receba três parâmetros
*   Retorne a multiplicação dos parâmetros.
*   Realize os testes que achar necessário.
*   Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.
*   Faça os testes que achar necessário.

### 4.  Crie três funções.

*   Desenvolva a primeira função: essa função deve recebe uma string e retorná-la em caixa alta.
    
*   Crie a segunda função: ela recebe uma string e deve retornar só a primeira letra.
    
*   Elabore a terceira função: essa função deve receber duas strings e concatená-las.
    
*   A. Faça o mock das funções para com os seguintes casos:
    
    *   Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.
    *   Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.
    *   Implemente, na terceira função: ela deve receber três strings e concatená-las.
*   B. Após criar os mocks, faça os testes necessários para garantir que os mocks estão funcionando.
    
*   C. Após criar os testes, restaure a implementação da primeira função.
    
    *   Faça o teste necessário para garantir que a implementação da função foi restaurado.

### 5.  Crie uma função que faça requisição para a api [dog pictures](https://dog.ceo/dog-api/).

*   _Mocke_ a requisição e crie dois testes.
    *   O primeiro deve interpretar que a requisição se resolveu e teve como valor "request success".
    *   O segundo deve interpretar que a requisição falhou e ter como valor "request failed".
*   Crie todos os testes que achar necessário.

## Parte 2

Agora vamos aplicar os _mocks_ aprendidos até aqui no React criando um `fork` do [repositório Digimon Finders](https://github.com/tryber/exercise-digimon-finders), que é uma aplicação em React já funcionando. Leia o _README_ para as instruções mais detalhadas de como realizar o exercício.