let minDate = new Date();
minDate.setMonth(minDate.getMonth() + 1);
minDate.setDate(1);

let maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + 4);
maxDate.setDate(0);

let picker = new Pikaday({
  field: document.getElementById('input-date'),
  defaultDate: minDate,
  minDate: minDate,
  maxDate: maxDate,
});