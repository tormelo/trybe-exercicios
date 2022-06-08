const counter = document.querySelector('#counter');
const button = document.querySelector('#click-btn');
let clickCount = 0;

button.addEventListener('click', () => counter.innerText = clickCount += 1);