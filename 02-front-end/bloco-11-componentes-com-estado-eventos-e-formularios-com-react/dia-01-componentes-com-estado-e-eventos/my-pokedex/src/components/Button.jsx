import { Component } from "react";
import { func, bool } from 'prop-types'

class Button extends Component {
  render() {
    const { children, disabled, handleClick } = this.props;
    return (
      <button disabled={disabled} onClick={handleClick}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  disabled: bool,
  handleClick: func.isRequired
}

Button.defaultProps = {
  disabled: false
}

export default Button;
