import React from 'react';
import CountryStateSelect from './CountryStateSelect';
import Input from './Input';

class PersonalForm extends React.Component {
  render() {
    const { currentState, handleChange } = this.props;
    const { name, countryState } = currentState;
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
        <CountryStateSelect
          value={countryState}
          onChange={handleChange}
        />
      </fieldset>
    );
  }
}

export default PersonalForm;
