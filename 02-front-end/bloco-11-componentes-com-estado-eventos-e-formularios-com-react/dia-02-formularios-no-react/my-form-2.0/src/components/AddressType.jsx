import React from 'react';

class AddressType extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className='input-container'>
        <span>Tipo de moradia</span>
        <label htmlFor="house">
          <input type="radio" id="house" name="addressType" value="Casa" onChange={onChange} required />
          Casa
        </label>
        <label htmlFor="apartment">
          <input type="radio" id="apartment" name="addressType" value="Apartamento" onChange={onChange} required />
          Apartamento
        </label>
      </div>
    );
  }
}

export default AddressType;
