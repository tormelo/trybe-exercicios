import { Component } from "react";
import PropTypes from 'prop-types'

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
  info: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string
    }),
    image: PropTypes.string,
  })
}

export default Pokemon;
