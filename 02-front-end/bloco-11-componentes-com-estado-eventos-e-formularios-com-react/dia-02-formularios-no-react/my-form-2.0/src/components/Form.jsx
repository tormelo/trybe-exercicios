import React from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

class Form extends React.Component {
  render() {
    const { currentState, handleChange, handleBlur, handleMouseEnter } = this.props;
    return (
      <form>
        <PersonalForm
          currentState={currentState}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <ProfessionalForm
          currentState={currentState}
          handleChange={handleChange}
          handleMouseEnter={handleMouseEnter}
        />
      </form>
    );
  }
}

export default Form;