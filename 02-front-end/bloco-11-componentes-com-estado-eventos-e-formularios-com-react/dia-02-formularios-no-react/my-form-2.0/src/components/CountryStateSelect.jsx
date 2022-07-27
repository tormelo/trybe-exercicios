import React from 'react';
import states from '../data/states';

class CountryStateSelect extends React.Component {
  render() {
    const { value, onChange } = this.props;
    const options = states.map((state) => (
      <option key={state} value={state.toLowerCase()}>{state}</option>
    ));

    return (
      <div>
        <label htmlFor="countryState">
          Selecione seu estado:
        </label>
        <select
          name="countryState"
          id="countryState"
          value={value}
          onChange={onChange}
        >
          {options}
        </select>
      </div>
    );
  }
}

export default CountryStateSelect;