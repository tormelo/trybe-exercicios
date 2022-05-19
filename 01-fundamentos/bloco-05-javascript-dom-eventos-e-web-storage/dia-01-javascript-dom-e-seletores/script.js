// Exercício 1
function setText(element, text) {
  element.innerText = text;
}

const paragraph = document.getElementsByTagName('p')[0];
const newText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis a mi vel congue. Nulla facilisis diam eu massa viverra condimentum. Sed commodo consequat tortor nec pharetra. Proin vulputate, purus at dapibus scelerisque, nulla dolor blandit ex, a tempor sem lorem in elit. Sed tempus mollis mauris nec convallis. Phasellus eget massa magna. Curabitur imperdiet lectus eu volutpat congue. Aliquam non auctor odio. Aenean semper consectetur dolor, id posuere massa tempor at. Donec id nulla ut eros dignissim congue. Aliquam efficitur euismod nulla eu rhoncus. Nunc tortor tortor, rutrum a accumsan nec, volutpat sit amet ex. Vestibulum tristique magna turpis, ut congue felis pellentesque eu.';
setText(paragraph, newText);

// Exercício 2
function setBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

const mainContent = document.getElementsByClassName('main-content')[0];
setBackgroundColor(mainContent, 'rgb(76,164,109)');

// Exercício 3
const centerContent = document.getElementsByClassName('center-content')[0];
setBackgroundColor(centerContent, 'white');