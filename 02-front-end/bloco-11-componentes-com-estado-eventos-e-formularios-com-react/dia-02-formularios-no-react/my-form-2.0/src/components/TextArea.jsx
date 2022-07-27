import React from 'react';

class TextArea extends React.Component {
  render() {
    const { label, id, maxLength, value, onChange } = this.props;
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          name={id}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    );
  }
}

export default TextArea;
