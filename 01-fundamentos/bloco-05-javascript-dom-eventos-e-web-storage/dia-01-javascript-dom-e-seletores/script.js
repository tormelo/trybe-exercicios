// Exercício 1
function changeText() {
  const paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis a mi vel congue. Nulla facilisis diam eu massa viverra condimentum. Sed commodo consequat tortor nec pharetra. Proin vulputate, purus at dapibus scelerisque, nulla dolor blandit ex, a tempor sem lorem in elit. Sed tempus mollis mauris nec convallis. Phasellus eget massa magna. Curabitur imperdiet lectus eu volutpat congue. Aliquam non auctor odio. Aenean semper consectetur dolor, id posuere massa tempor at. Donec id nulla ut eros dignissim congue. Aliquam efficitur euismod nulla eu rhoncus. Nunc tortor tortor, rutrum a accumsan nec, volutpat sit amet ex. Vestibulum tristique magna turpis, ut congue felis pellentesque eu.';
}
changeText();

// Exercício 2
function changeColor() {
  const mainContent = document.getElementsByClassName('main-content');
  for (const element of mainContent) {
    element.style.backgroundColor = 'rgb(76,164,109)';
  }
}
changeColor();