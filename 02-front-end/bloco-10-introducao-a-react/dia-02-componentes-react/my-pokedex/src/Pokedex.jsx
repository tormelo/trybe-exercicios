import { Component } from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";

class Pokedex extends Component {
  render() {
    return (
      <div>
        {pokemons.map((pokemon) => <Pokemon key={pokemon.name} info={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;
