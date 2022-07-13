const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (onSuccess, onError) => {
  const marsTemperature = getMarsTemperature();
  const success = Math.random() <= 0.6;
  setTimeout(() => {
    if (success) onSuccess(marsTemperature)
    else onError('Curiosity is busy, try again later.')
  }, messageDelay());
};

// imprime "It is currently 47ºF at Mars", por exemplo, ou a mensagem de erro
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou a mensagem de erro
sendMarsTemperature(greet, handleError);