const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
});