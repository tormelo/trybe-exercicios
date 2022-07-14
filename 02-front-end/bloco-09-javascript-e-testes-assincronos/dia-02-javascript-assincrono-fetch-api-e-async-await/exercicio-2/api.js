const API_URL = 'https://api.coincap.io/v2/assets';

const fetchCryptos = async () => {
  try {
    const response = await fetch(API_URL);
    const body = await response.json();
    return body.data;
  } catch (error) {
    throw error;
  }
};

const createElement = (type, text) => {
  const element = document.createElement(type);
  element.innerText = text;
  return element;
}

const populateCryptoList = async () => {
  try {
    const cryptoList = document.querySelector('#crypto-list');
    const cryptos = await fetchCryptos();
    cryptos
      .filter(({ rank }) => rank <= 10)
      .forEach(({ name, symbol, priceUsd }) => {
        const [priceFixed] = priceUsd.match(/\d+(.\d\d?)?/);
        const cryptoElement = createElement('li', `${name} (${symbol}): ${priceFixed}`);
        cryptoList.appendChild(cryptoElement);
      });
  } catch (error) {
    alert(error.message);
  }
};

window.onload = () => populateCryptoList();