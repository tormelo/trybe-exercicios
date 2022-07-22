import { Component } from "react";
import { func } from 'prop-types'

class Button extends Component {
  render() {
    const { children, handleClick } = this.props;
    return (
      <button onClick={handleClick}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  handleClick: func
}

export default Button;
