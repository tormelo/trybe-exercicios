import React from 'react';

class AddressType extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <span>Tipo de moradia:</span>
        <input type="radio" id="house" name="addressType" value="house" onChange={onChange} />
        <label htmlFor="house">Casa</label>
        <input type="radio" id="apartment" name="addressType" value="apartment" onChange={onChange} />
        <label htmlFor="apartment">Apartamento</label>
      </div>
    );
  }
}

export default AddressType;
