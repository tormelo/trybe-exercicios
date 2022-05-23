function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

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
    let dayElement = document.createElement('li');
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
  let button = document.createElement('button');
  button.innerText = buttonName;
  button.id = buttonId;

  buttonsContainer.appendChild(button);
}

createButton('Feriados', 'btn-holiday');

// Exercício 3
const holidayButton = document.querySelector('#btn-holiday');
holidayButton.addEventListener('click', () => {
  let holidays = document.querySelectorAll('.holiday');

  const alternativeColor = 'rgb(100,238,100)';
  const currentColor = holidays[0].style.backgroundColor;

  const newColor = currentColor === '' ? alternativeColor : '';

  for (const holiday of holidays) {
    holiday.style.backgroundColor = newColor;
  }
});

// Exercício 4
createButton('Sexta-feira', 'btn-friday');