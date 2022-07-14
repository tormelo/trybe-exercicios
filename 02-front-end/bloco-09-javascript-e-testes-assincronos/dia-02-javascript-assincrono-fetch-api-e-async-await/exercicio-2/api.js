const COINCAP_URL = 'https://api.coincap.io/v2/assets';
const CURRENCY_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

const fetchCryptos = async () => {
  try {
    const response = await fetch(COINCAP_URL);
    const body = await response.json();
    const { data } = body;
    return data;
  } catch (error) {
    throw error;
  }
};

const fetchUsdToBrlRate = async () => {
  try {
    const response = await fetch(CURRENCY_URL);
    const data = await response.json();
    const { usd: { brl } } = data;
    return brl;
  } catch (error) {
    throw error;
  }
};
