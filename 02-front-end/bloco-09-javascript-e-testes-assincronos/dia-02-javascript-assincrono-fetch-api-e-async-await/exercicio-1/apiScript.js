const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  try {
    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };
    const response = await fetch(API_URL, myObject);
    const data = await response.json();
    return data.joke;
  } catch (error) {
    return 'Something went wrong. Try again.'
  }
};

const setJoke = async () => {
  const jokeContainer = document.querySelector('#jokeContainer');
  const joke = await fetchJoke();
  jokeContainer.innerText = joke;
};

window.onload = () => setJoke();