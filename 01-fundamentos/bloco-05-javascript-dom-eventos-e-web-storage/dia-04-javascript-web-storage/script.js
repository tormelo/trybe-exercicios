// Add event to change background color of the page
const bkgColorPicker = document.querySelector('#bkg-color');
bkgColorPicker.value = '#FFFFFF';
bkgColorPicker.addEventListener('change', () => {
  document.body.style.backgroundColor = bkgColorPicker.value;
});

// Add event to change font color
const fontColorPicker = document.querySelector('#font-color');
fontColorPicker.addEventListener('change', () => {
  document.body.style.color = fontColorPicker.value;
});

// Add event to change font size
const fontSizeSlider = document.querySelector('#font-size');
fontSizeSlider.min = 10;
fontSizeSlider.max = 50;
fontSizeSlider.value = 16;
fontSizeSlider.addEventListener('change', () => {
  const content = document.querySelector('#content');
  content.style.fontSize = `${fontSizeSlider.value}px`;
});