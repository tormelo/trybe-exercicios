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
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  },
});

const validate = new window.JustValidate('#form');

validate
.addField('#input-name', [
  {
    rule: 'minLength',
    value: 10,
    errorMessage: 'O campo precisa ter pelo menos 10 caracteres'
  },
  {
    rule: 'maxLength',
    value: 40,
    errorMessage: 'O campo tem um limite de 40 caracteres'
  },
  {
    rule: 'required',
    errorMessage: 'Campo obrigatório'
  }
])
.addField('#input-email', [
  {
    rule: 'required',
    errorMessage: 'Campo obrigatório'
  },
  {
    rule: 'email',
    errorMessage: 'E-mail inválido!'
  },
])
.addField('#input-answer', [
  {
    rule: 'minLength',
    value: 140,
    errorMessage: 'O campo precisa ter pelo menos 140 caracteres'
  },
  {
    rule: 'maxLength',
    value: 500,
    errorMessage: 'O campo tem um limite de 500 caracteres'
  },
  {
    rule: 'required',
    errorMessage: 'Campo obrigatório'
  }
])
.addField('#input-date', [
  {
    rule: 'required',
    errorMessage: 'Campo obrigatório'
  },
  {
    validator: () => Object.prototype.toString.call(picker.getDate()) === "[object Date]",
    errorMessage: 'Data inválida'
  }
])
.addField('#agreement', [
  {
    rule: 'required',
    errorMessage: 'Campo obrigatório'
  }
])
.onSuccess(() => {
  alert('Formulário enviado com sucesso!');
});