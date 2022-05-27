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
fontSizeSlider.min = 12;
fontSizeSlider.max = 48;
fontSizeSlider.value = 16;
fontSizeSlider.addEventListener('change', () => {
  const content = document.querySelector('#content');
  content.style.fontSize = `${fontSizeSlider.value}px`;
});


// Add event to change line height
const lineHeightSlider = document.querySelector('#line-height');
lineHeightSlider.min = 100;
lineHeightSlider.max = 200;
lineHeightSlider.value = 110;
lineHeightSlider.addEventListener('change', () => {
  const content = document.querySelector('#content');
  content.style.lineHeight = `${lineHeightSlider.value}%`;
});

// Add font family options
const sansSerifFonts = ['Arial', 'Helvetica'];
const serifFonts = [`'Times New Roman'`, 'Times'];
const fontFamilySelect = document.querySelector('#font-family');

function createFontOption(fontName, fontType) {
  const option = document.createElement('option');
  option.innerText = fontName.replace(/\'/g, '');
  option.value = `${fontName}, ${fontType}`;
  fontFamilySelect.appendChild(option);
}

for (const font of sansSerifFonts) {
  createFontOption(font, 'sans-serif');
}
for (const font of serifFonts) {
  createFontOption(font, 'serif');
}

fontFamilySelect.firstChild.selected = true;

fontFamilySelect.addEventListener('change', () => {
  document.body.style.fontFamily = fontFamilySelect.value;
});

// Add text alignment options
const alignments = ['Center', 'Left', 'Right', 'Justify'];
const aligmentSelect = document.querySelector('#text-align');

for (const alignment of alignments) {
  const option = document.createElement('option');
  option.innerText = alignment;
  option.value = alignment.toLowerCase();
  aligmentSelect.appendChild(option);
}

aligmentSelect.firstChild.selected = true;

aligmentSelect.addEventListener('change', () => {
  const content = document.querySelector('#content');
  content.style.textAlign = aligmentSelect.value;
});
