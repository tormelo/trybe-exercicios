import { Component } from "react";
import Pokemon from "./Pokemon";
import pokemons from "../data";
import Button from "./Button";

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
    const filteredList = filter === 'All' ? pokemons : pokemons.filter(({ type }) => (type === filter));
    this.setState({
      index: 0,
      pkmnList: filteredList
    });
  }

  render() {
    const { index, pkmnList } = this.state;
    const pokemon = pkmnList[index];
    const filters = pokemons.reduce((array, { type }) => (
      array.includes(type) ? array : [...array, type]
    ), ['All']);
    const filterButtons = filters.map((filter) => (
      <Button key={filter} handleClick={() => this.filterList(filter)}>{filter}</Button>
    ));

    return (
      <div className="pokedex">
        <Pokemon key={pokemon.id} info={pokemon} />
        <div>{filterButtons}</div>
        <Button handleClick={this.moveIndex}>Próximo pokémon</Button>
      </div>

    );
  }
}

export default Pokedex;
