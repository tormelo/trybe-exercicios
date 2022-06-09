function validateNumbers(value1, value2) {
  if (!value1 || !value2) {
    throw new Error(`Os dois campos precisam ser preenchidos para realizar a soma.`)
  }

  if (isNaN(value1) || isNaN(value2)) {
    throw new Error(`Informe apenas números nos campos.`)
  }
}

function sum() {
  const input1 = document.getElementById('value1');
  const input2 = document.getElementById('value2');
  const result = document.getElementById('result');
  try {
    const value1 = input1.value;
    const value2 = input2.value;
    validateNumbers(value1, value2);
    const sum = parseInt(value1) + parseInt(value2);
    result.innerText = `Resultado: ${sum}`;
  } catch (error) {
    result.innerText = `Erro: ${error.message}`;
  } finally {
    input1.value = '';
    input2.value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}