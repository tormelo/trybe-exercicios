function createDaysOfTheWeek() {
  const weekDaysList = document.querySelector('.week-days');
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function populateDecemberDays(daysList) {
  const daysParent = document.querySelector('#days');

  for (const day of daysList) {
    const dayElement = document.createElement('li');
    dayElement.className = 'day';
    dayElement.innerText = day;

    if (day === 24 || day === 25 || day == 31) {
      dayElement.className += ' holiday';
    }

    if (day === 4 || day === 11 || day === 18 || day === 25){
      dayElement.className += ' friday';
    }

    daysParent.appendChild(dayElement);
  }
}

populateDecemberDays(dezDaysList);

// Exercício 2
const buttonsContainer = document.querySelector('.buttons-container');

function createButton(buttonName, buttonId) {
  const button = document.createElement('button');
  button.innerText = buttonName;
  button.id = buttonId;

  buttonsContainer.appendChild(button);
}

createButton('Feriados', 'btn-holiday');

// Exercício 3
const holidayButton = document.querySelector('#btn-holiday');

holidayButton.addEventListener('click', () => {
  const holidays = document.querySelectorAll('.holiday');
  const alternativeColor = 'rgb(100, 238, 100)';
  const currentColor = holidays[0].style.backgroundColor;
  const newColor = currentColor !== alternativeColor ? alternativeColor : '';

  for (const holiday of holidays) {
    holiday.style.backgroundColor = newColor;
  }
});

// Exercício 4
createButton('Sexta-feira', 'btn-friday');

// Exercício 5
const fridayButton = document.querySelector('#btn-friday');

fridayButton.addEventListener('click', () => {
  const fridays = document.querySelectorAll('.friday');
  const decFridays = [4, 11, 18, 25];
  let altList = ['SEXTOU!', 'SEXTOU!', 'SEXTOU!', 'SEXTOU!'];

  if (fridays[0].innerText === altList[0]){
    altList = decFridays;
  }

  for (let i = 0; i < fridays.length; i += 1) {
    fridays[i].innerText = altList[i];
  }
});

// Exercício 6
const days = document.querySelectorAll('.day');

function setFontSize(element, size) {
  element.style.fontSize = size;
}

for (const day of days) {
  day.addEventListener('mouseover', (event) => {
    setFontSize(event.target, '30px');
  });
  day.addEventListener('mouseout', (event) => {
    setFontSize(event.target, '20px');
  });
}

// Exercício 7
const tasksContainer = document.querySelector('.my-tasks');

function addTask(taskName) {
  const newTask = document.createElement('span');
  newTask.innerText = taskName;
  tasksContainer.appendChild(newTask);
}

addTask('Estudar JavaScript');