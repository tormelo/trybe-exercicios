function validateNumbers(value1, value2) {
  if (!value1 || !value2) {
    throw new Error(`Os dois campos precisam ser preenchidos para realizar a soma.`)
  }
  
    if (isNaN(value1) || isNaN(value2)) {
      throw new Error(`Informe apenas números nos campos.`)
    }
}

function sum() {
  try {
    let value1 = document.getElementById('value1').value;
    let value2 = document.getElementById('value2').value;

    validateNumbers(value1, value2);

    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  } catch (error) {
    document.getElementById('result').innerHTML = `Erro: ${error.message}`;
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}