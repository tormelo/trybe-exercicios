import { Component } from "react";
import Pokemon from "./Pokemon";
import pokemons from "../data";

class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      maxIndex: pokemons.length - 1
    }

    this.moveIndex = this.moveIndex.bind(this);
  }

  moveIndex() {
    this.setState(({ index: prevIndex, maxIndex }) => ({
      index: prevIndex < maxIndex ? prevIndex + 1 : 0,
    }));
  }

  render() {
    const { index } = this.state;
    const pokemon = pokemons[index];

    return (
      <div className="pokedex">
        <Pokemon key={pokemon.id} info={pokemon} />
        <button onClick={this.moveIndex}>Próximo pokémon</button>
      </div>

    );
  }
}

export default Pokedex;
