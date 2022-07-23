import { Component } from "react";
import Pokemon from "./Pokemon";
import pokemons from "../data";
import Button from "./Button";

class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      currentFilter: 'All',
      pkmnList: pokemons
    }

    this.moveIndex = this.moveIndex.bind(this);
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
      currentFilter: filter,
      pkmnList: filteredList
    });
  }

  getFilters() {
    return (
      pokemons.reduce((array, { type }) => (
        array.includes(type) ? array : [...array, type]
      ), ['All'])
    );
  }

  createFilterButtons(filters) {
    const { currentFilter } = this.state;
    return (
      filters.map((filter) => {
        const buttonClass = currentFilter === filter ? `btn-filter selected` : 'btn-filter';
        return (
          <Button className={buttonClass} handleClick={() => this.filterList(filter)} key={filter} >
            {filter}
          </Button>);
      })
    );
  }

  render() {
    const { index, pkmnList } = this.state;
    const filters = this.getFilters();
    const filterButtons = this.createFilterButtons(filters);
    const pokemon = pkmnList[index];

    return (
      <div className="pokedex">
        <div>{filterButtons}</div>
        <Pokemon key={pokemon.id} info={pokemon} />
        <Button className="btn-next" disabled={pkmnList.length <= 1} handleClick={this.moveIndex}>
          Próximo pokémon
        </Button>
      </div>

    );
  }
}

export default Pokedex;
