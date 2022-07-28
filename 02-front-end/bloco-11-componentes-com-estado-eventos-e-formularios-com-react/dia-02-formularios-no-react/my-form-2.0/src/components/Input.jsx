import React from 'react';

class Input extends React.Component {
  render() {
    const { label, id, maxLength, value, onChange, onBlur, onMouseEnter } = this.props;
    return (
      <div className='input-container'>
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          id={id}
          name={id}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onMouseEnter={onMouseEnter}
          required
        />
      </div>
    );
  }
}

export default Input;
