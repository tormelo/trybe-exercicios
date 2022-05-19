function setText(element, text) {
  element.innerText = text;
}

function setBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

function changeToUpperCase(element) {
  element.innerText = element.innerText.toUpperCase();
}

function logElementsContent(elements) {
  for (const element of elements) {
    console.log(element.innerText);
  }
}

// Exercício 1
const textElement = document.getElementsByTagName('p')[1];
const textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis a mi vel congue. Nulla facilisis diam eu massa viverra condimentum. Sed commodo consequat tortor nec pharetra. Proin vulputate, purus at dapibus scelerisque, nulla dolor blandit ex, a tempor sem lorem in elit. Sed tempus mollis mauris nec convallis. Phasellus eget massa magna. Curabitur imperdiet lectus eu volutpat congue.';
setText(textElement, textContent);

// Exercício 2
const mainContent = document.getElementsByClassName('main-content')[0];
setBackgroundColor(mainContent, 'rgb(76,164,109)');

// Exercício 3
const centerContent = document.getElementsByClassName('center-content')[0];
setBackgroundColor(centerContent, 'white');

// Exercício 4
const title = document.getElementsByTagName('h1')[0];
setText(title, 'Exercício 5.1 - JavaScript');

// Exercício 5
changeToUpperCase(textElement);

// Exercício 6
const paragraphs = document.getElementsByTagName('p');
logElementsContent(paragraphs);