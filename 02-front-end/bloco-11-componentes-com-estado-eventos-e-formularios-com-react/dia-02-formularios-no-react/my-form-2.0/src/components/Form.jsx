import React from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

class Form extends React.Component {
  render() {
    const { currentState, handleChange } = this.props;
    return (
      <form>
        <PersonalForm
          currentState={currentState}
          handleChange={handleChange}
        />
        <ProfessionalForm />
      </form>
    );
  }
}

export default Form;