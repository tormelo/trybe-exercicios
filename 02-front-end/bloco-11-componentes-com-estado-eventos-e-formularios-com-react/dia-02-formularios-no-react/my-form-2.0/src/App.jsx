import React from 'react';
import Form from './components/Form';
import './App.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

class App extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  handleChange() {

  }

  render() {
    return (
      <div className="App">
        <Form
          currentState={this.state}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;