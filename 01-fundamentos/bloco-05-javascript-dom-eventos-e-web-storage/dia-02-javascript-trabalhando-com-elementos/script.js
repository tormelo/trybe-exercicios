// Criando elementos

// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let title = document.createElement('h1');
title.innerText = 'Exercício 5.2 - JavaScript DOM';

document.body.appendChild(title);

// 2. Adicione a tag main com a classe main-content como filho da tag body;
let main = document.createElement('main');
main.className = 'main-content';

document.body.appendChild(main);

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let centerSection = document.createElement('section');
centerSection.className = 'center-content';

main.appendChild(centerSection);

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let centerText = document.createElement('p');
centerText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id arcu finibus, vulputate nisi vitae, dictum mi. Pellentesque odio ex, pharetra at imperdiet eget, consequat a leo. Pellentesque porttitor, velit non pellentesque maximus, quam dui pharetra mauris, mollis malesuada dui nisl vel risus.';

centerSection.appendChild(centerText);

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let leftSection = document.createElement('section');
leftSection.className = 'left-content';

main.appendChild(leftSection);

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let rightSection = document.createElement('section');
rightSection.className = 'right-content';

main.appendChild(rightSection);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';

leftSection.appendChild(image);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
let unorderedList = document.createElement('ul');

for (const number of numbers) {
  let listItem = document.createElement('li');
  listItem.innerText = number;
  unorderedList.appendChild(listItem);
}

rightSection.appendChild(unorderedList);

// 9. Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let i = 0; i < 3; i += 1) {
  let h3 = document.createElement('h3');
  h3.innerText = `Lorem ipsum ${i + 1}`;
  main.appendChild(h3);
}

// Alterando elementos
// 1. Adicione a classe title na tag h1 criada;
title.className = 'title';

// 2. Adicione a classe description nas 3 tags h3 criadas;
let allH3s = document.querySelectorAll('h3');
for (const h3 of allH3s) {
  h3.className = 'description';
}

// 3. Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
main.removeChild(leftSection);

// 4. Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
rightSection.style.marginRight = 'auto';

// 5. Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
centerSection.parentElement.style.backgroundColor = 'green';

// 6. Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
unorderedList.lastChild.remove();
unorderedList.lastChild.remove();