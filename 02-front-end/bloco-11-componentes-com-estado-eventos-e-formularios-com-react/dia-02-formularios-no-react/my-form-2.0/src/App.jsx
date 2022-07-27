import React from 'react';
import Form from './components/Form';
import './App.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  invalidEmail: false,
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  submitted: false,
}

class App extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange({ target }) {
    let { name, value } = target;
    const newState = {};
    if (name === 'name') value = value.toUpperCase();
    if (name === 'email') newState.invalidEmail = this.isEmailInvalid(value);
    if (name === 'cpf') value = this.validateCPF(value);
    if (name === 'address') value = this.validateAddress(value);
    newState[name] = value;
    this.saveState(newState);
  }

  handleBlur({ target }) {
    let { name, value } = target;
    value = value.match(/^\d+/) ? '' : value;
    this.saveState({ [name]: value });
  }

  isEmailInvalid(email) {
    return email.match(/^([\w.-]+)(@[\w-]+)([.][\w]+)$/i) ? false : true;
  }

  validateCPF(cpf) {
    return cpf.replace(/[^\d]/g, '');
  }

  validateAddress(address) {
    return address.replace(/[^\p{L}\d\s.,´`^~]/ug, '');
  }

  saveState(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <Form
          currentState={this.state}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
        />
      </div>
    );
  }
}

export default App;
