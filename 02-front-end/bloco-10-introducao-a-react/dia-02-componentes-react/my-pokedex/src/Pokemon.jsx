import { Component } from "react";

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: { value: weight, measurementUnit }, image } = this.props.info;
    return (
      <div className="flex align-center">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {weight} {measurementUnit}</p>
        </div>
        <img src={image} alt={`${name} idle pose animation.`} />
      </div>
    );
  }
};

export default Pokemon;
