import React from 'react';

class AddressType extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <span>Tipo de moradia:</span>
        <input type="radio" id="house" name="addressType" value="Casa" onChange={onChange} required/>
        <label htmlFor="house">Casa</label>
        <input type="radio" id="apartment" name="addressType" value="Apartamento" onChange={onChange} required/>
        <label htmlFor="apartment">Apartamento</label>
      </div>
    );
  }
}

export default AddressType;
