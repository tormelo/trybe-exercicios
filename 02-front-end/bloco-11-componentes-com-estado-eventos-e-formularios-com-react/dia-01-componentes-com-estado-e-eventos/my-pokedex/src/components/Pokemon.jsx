import { Component } from "react";
import { shape, string, number } from 'prop-types'

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: { value: weight, measurementUnit }, image } = this.props.info;
    return (
      <div className="pokemon">
        <div className="pokemon-info">
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {weight} {measurementUnit}</p>
        </div>
        <img src={image} alt={`${name} idle pose animation.`} />
      </div>
    );
  }
};

Pokemon.propTypes = {
  info: shape({
    name: string,
    type: string,
    averageWeight: shape({
      value: number,
      measurementUnit: string
    }),
    image: string,
  })
}

export default Pokemon;
