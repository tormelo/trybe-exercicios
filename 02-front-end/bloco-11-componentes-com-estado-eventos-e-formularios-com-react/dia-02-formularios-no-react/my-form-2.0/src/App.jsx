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
  alerted: false,
  roleDescription: '',
  submitted: false,
}

class App extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  handleChange = ({ target }) => {
    let { name: key, value } = target;
    const newState = {};
    if (key === 'name') value = value.toUpperCase();
    if (key === 'email') newState.invalidEmail = this.isEmailInvalid(value);
    if (key === 'cpf') value = this.validateCPF(value);
    if (key === 'address') value = this.validateAddress(value);
    newState[key] = value;
    this.saveState(newState);
  }

  isEmailInvalid = (email) => (
    email.match(/^([\w.-]+)(@[\w-]+)([.][\w]+)$/i) ? false : true
  )

  validateCPF = (cpf) => (
    cpf.replace(/[^\d]/g, '')
  )

  validateAddress = (address) => (
    address.replace(/[^\p{L}\d\s.,´`^~]/ug, '')
  )

  onCityInputBlur = ({ target }) => {
    let { name: key, value } = target;
    value = value.match(/^\d+/) ? '' : value;
    this.saveState({ [key]: value });
  }

  sendAlert = () => {
    const { alerted } = this.state;
    if (!alerted) {
      alert('Preencha com cuidado esta informação.')
      this.saveState({ alerted: true });
    };
  }

  saveState = (newState) => {
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <Form
          currentState={this.state}
          handleChange={this.handleChange}
          handleBlur={this.onCityInputBlur}
          handleMouseEnter={this.sendAlert}
        />
      </div>
    );
  }
}

export default App;
