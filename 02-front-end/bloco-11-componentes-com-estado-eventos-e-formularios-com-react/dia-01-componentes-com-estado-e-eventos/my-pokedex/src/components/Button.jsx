import { Component } from "react";
import { bool, func, string } from 'prop-types'

class Button extends Component {
  render() {
    const { children, className, disabled, handleClick } = this.props;
    return (
      <button className={className} disabled={disabled} onClick={handleClick}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  className: string.isRequired,
  disabled: bool,
  handleClick: func.isRequired
}

Button.defaultProps = {
  disabled: false
}

export default Button;
