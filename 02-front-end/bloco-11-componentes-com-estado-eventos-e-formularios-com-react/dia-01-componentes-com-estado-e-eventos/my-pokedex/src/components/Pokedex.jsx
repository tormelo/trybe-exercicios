import { Component } from "react";
import Pokemon from "./Pokemon";
import pokemons from "../data";

class Pokedex extends Component {
  render() {
    return (
      <div className="pokedex">
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} info={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;
