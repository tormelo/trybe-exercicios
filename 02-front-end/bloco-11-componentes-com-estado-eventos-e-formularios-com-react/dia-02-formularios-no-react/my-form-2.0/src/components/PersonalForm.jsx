import React from 'react';
import AddressType from './AddressType';
import CountryStateSelect from './CountryStateSelect';
import Input from './Input';

class PersonalForm extends React.Component {
  render() {
    const { currentState, handleChange, onCityInputBlur } = this.props;
    const { name, email, cpf, address, city, countryState, invalidEmail } = currentState;
    return (
      <fieldset>
        <legend>Dados pessoais:</legend>
        <Input
          label="Nome"
          id="name"
          maxLength="40"
          value={name}
          onChange={handleChange}
        />
        <Input
          label="Email"
          id="email"
          maxLength="50"
          value={email}
          onChange={handleChange}
        />
        {invalidEmail && <span>Email inválido</span>}
        <Input
          label="CPF"
          id="cpf"
          maxLength="11"
          value={cpf}
          onChange={handleChange}
        />
        <Input
          label="Endereço"
          id="address"
          maxLength="200"
          value={address}
          onChange={handleChange}
        />
        <Input
          label="Cidade"
          id="city"
          maxLength="28"
          value={city}
          onChange={handleChange}
          onBlur={onCityInputBlur}
        />
        <CountryStateSelect
          value={countryState}
          onChange={handleChange}
        />
        <AddressType
          onChange={handleChange}
        />
      </fieldset>
    );
  }
}

export default PersonalForm;
