import { Component } from 'react';
import './App.css';
import Pokemon from './Pokemon';
import pokemons from './data';

class App extends Component {
  render() {
    const [testPokemon] = pokemons;
    return (
      <Pokemon info={testPokemon} />
    );
  }
}

export default App;
