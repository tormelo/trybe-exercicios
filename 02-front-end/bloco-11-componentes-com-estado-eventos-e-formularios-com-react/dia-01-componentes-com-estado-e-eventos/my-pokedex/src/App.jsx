import { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Pokédex</h1>
        </header>
        <main>
          <Pokedex />
        </main>
      </div>
    );
  }
}

export default App;
