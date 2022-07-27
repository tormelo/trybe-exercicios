import React from 'react';
import Form from './components/Form';
import DataDisplay from './components/DataDisplay';
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
    this.setState(newState);
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
    this.setState({ [key]: value });
  }

  sendAlert = () => {
    const { alerted } = this.state;
    if (!alerted) {
      alert('Preencha com cuidado esta informação.')
      this.setState({ alerted: true });
    };
  }

  submitForm = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
  }

  clearForm = (event) => {
    event.preventDefault();
    this.setState(INITIAL_STATE);
  }

  render() {
    const { submitted } = this.state;
    return (
      <div className="App">
        <Form
          currentState={this.state}
          handleChange={this.handleChange}
          onCityInputBlur={this.onCityInputBlur}
          sendAlert={this.sendAlert}
          submitForm={this.submitForm}
          clearForm={this.clearForm}
        />
        {submitted && <DataDisplay currentState={this.state}/>}
      </div>
    );
  }
}

export default App;
