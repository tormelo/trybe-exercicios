// Change background color of the page
const bkgColorButton = document.querySelector('#bkg-color');
bkgColorButton.value = '#FFFFFF';
bkgColorButton.addEventListener('change', () => {
  document.body.style.backgroundColor = bkgColorButton.value;
});

// Change font color
const fontColorButton = document.querySelector('#font-color');
fontColorButton.addEventListener('change', () => {
  document.body.style.color = fontColorButton.value;
});