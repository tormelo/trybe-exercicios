const defaultSettings = {
  backgroundColor: '#ffffff',
  fontColor: '#000000',
  fontSize: '16',
  lineHeight: '120',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
};
let settings = {};

const content = document.querySelector('#content');
const bgColorPicker = document.querySelector('#bkg-color');
const fontColorPicker = document.querySelector('#font-color');
const fontSizeSlider = document.querySelector('#font-size');
const lineHeightSlider = document.querySelector('#line-height');
const fontFamilySelect = document.querySelector('#font-family');
const aligmentSelect = document.querySelector('#text-align');

fontSizeSlider.min = 12;
fontSizeSlider.max = 48;
lineHeightSlider.min = 100;
lineHeightSlider.max = 200;

// localStorage functions
function saveSetting(key, value) {
  settings[key] = value;
  localStorage.settings = JSON.stringify(settings);
}

function loadSettings() {
  if (localStorage.settings !== undefined) {
    settings = JSON.parse(localStorage.settings);
    updateElement(bgColorPicker, settings.backgroundColor);
    updateElement(fontColorPicker, settings.fontColor);
    updateElement(fontSizeSlider, settings.fontSize);
    updateElement(lineHeightSlider, settings.lineHeight);
    updateElement(fontFamilySelect, settings.fontFamily);
    updateElement(aligmentSelect, settings.textAlign);
  }
  else {
    resetSettings();
  }
}

function updateElement(element, value) {
  element.value = value;
  const event = new Event('input');
  element.dispatchEvent(event);
}

function resetSettings() {
  localStorage.settings = JSON.stringify(defaultSettings);
  loadSettings();
}

// Add event to change background color of the page
bgColorPicker.addEventListener('input', () => {
  saveSetting('backgroundColor', bgColorPicker.value);
  document.body.style.backgroundColor = settings.backgroundColor;
});

// Add event to change font color
fontColorPicker.addEventListener('input', () => {
  saveSetting('fontColor', fontColorPicker.value);
  document.body.style.color = settings.fontColor;
});

// Add event to change font size
fontSizeSlider.addEventListener('input', () => {
  saveSetting('fontSize', fontSizeSlider.value);
  content.style.fontSize = `${settings.fontSize}px`;
});


// Add event to change line height
lineHeightSlider.addEventListener('input', () => {
  saveSetting('lineHeight', lineHeightSlider.value);
  content.style.lineHeight = `${settings.lineHeight}%`;
});

// Add font family options
const fonts = [
  {name: 'Arial', type: 'sans-serif'}, 
  {name:'Helvetica', type: 'sans-serif'}, 
  {name: `'Times New Roman'`, type: 'serif'}, 
  {name: 'Times', type: 'serif'},
];

for (const font of fonts) {
  const option = document.createElement('option');
  option.innerText = font.name.replace(/\'/g, '');
  option.value = `${font.name}, ${font.type}`;
  fontFamilySelect.appendChild(option);
}

fontFamilySelect.addEventListener('input', () => {
  saveSetting('fontFamily', fontFamilySelect.value);
  document.body.style.fontFamily = settings.fontFamily;
});

// Add text alignment options
const alignments = ['Center', 'Left', 'Right', 'Justify'];

for (const alignment of alignments) {
  const option = document.createElement('option');
  option.innerText = alignment;
  option.value = alignment.toLowerCase();
  aligmentSelect.appendChild(option);
}

aligmentSelect.addEventListener('input', () => {
  saveSetting('textAlign', aligmentSelect.value);
  content.style.textAlign = settings.textAlign;
});

// Add reset button event
const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', () => {
  resetSettings();
});

// Load saved settings
loadSettings();