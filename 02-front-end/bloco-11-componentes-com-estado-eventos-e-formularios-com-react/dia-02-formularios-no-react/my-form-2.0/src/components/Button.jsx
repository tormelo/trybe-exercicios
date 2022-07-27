import React from 'react';

class Button extends React.Component {
  render() {
    const { label, onClick } = this.props;
    return (
      <button onClick={onClick} >
        {label}
      </button>
    );
  }
}

export default Button;
