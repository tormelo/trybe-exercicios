import React from 'react';
// import { func, string } from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, id, maxLength, value, onChange, onBlur } = this.props;
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          id={id}
          name={id}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required
        />
      </div>
    );
  }
}

// Input.propTypes = {
//   label: string.isRequired,
//   id: string.isRequired,
//   value: string.isRequired,
//   maxLength: string.isRequired,
//   onChange: func.isRequired,
//   onBlur: func,
// }

// Input.defaultProps = {
//   onBlur: undefined,
// }

export default Input;
