const getPriceBrlFixed = (priceUsd, rate) => {
  const [priceBrlFixed] = (priceUsd * rate)
    .toString()
    .match(/\d+(.\d\d?)?/);
  return priceBrlFixed;
}

const createElement = (type, text) => {
  const element = document.createElement(type);
  element.innerText = text;
  return element;
}

const populateCryptoList = async () => {
  try {
    const cryptoList = document.querySelector('#crypto-list');
    const usdToBrl = await fetchUsdToBrlRate();
    const cryptos = await fetchCryptos();
    cryptos
      .filter(({ rank }) => rank <= 10)
      .forEach(({ name, symbol, priceUsd }) => {
        const [usdFixed] = priceUsd.match(/\d+(.\d\d?)?/);
        const brlFixed = getPriceBrlFixed(parseFloat(priceUsd), usdToBrl);
        const cryptoElement = createElement('li', `${name} (${symbol}): ${usdFixed} USD - ${brlFixed} BRL`);
        cryptoList.appendChild(cryptoElement);
      });
  } catch (error) {
    alert(error.message);
  }
};

window.onload = () => populateCryptoList();