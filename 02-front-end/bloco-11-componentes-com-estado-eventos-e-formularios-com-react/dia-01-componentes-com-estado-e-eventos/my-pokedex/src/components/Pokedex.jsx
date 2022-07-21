import { Component } from "react";
import Pokemon from "./Pokemon";
import pokemons from "../data";

class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      pkmnList: pokemons
    }

    this.moveIndex = this.moveIndex.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  moveIndex() {
    this.setState(({ index: prevIndex, pkmnList }) => ({
      index: (prevIndex + 1) % pkmnList.length,
    }));
  }

  filterList(filter) {
    this.setState(() => {
      const filteredList = filter ? pokemons.filter(({ type }) => type === filter) : pokemons;
      return ({
        index: 0,
        pkmnList: filteredList
      })
    });
  }

  render() {
    const { index, pkmnList } = this.state;
    const pokemon = pkmnList[index];

    return (
      <div className="pokedex">
        <Pokemon key={pokemon.id} info={pokemon} />
        <div>
          <button onClick={() => this.filterList('')}>All</button>
          <button onClick={() => this.filterList('Fire')}>Fire</button>
          <button onClick={() => this.filterList('Psychic')}>Psychic</button>
        </div>
        <button onClick={this.moveIndex}>Próximo pokémon</button>
      </div>

    );
  }
}

export default Pokedex;
