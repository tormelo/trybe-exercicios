import React from 'react';
import Button from './Button';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

class Form extends React.Component {
  render() {
    const {
      currentState,
      handleChange,
      onCityInputBlur,
      sendAlert,
      submitForm,
      clearForm,
    } = this.props;

    return (
      <form onSubmit={submitForm}>
        <PersonalForm
          currentState={currentState}
          handleChange={handleChange}
          onCityInputBlur={onCityInputBlur}
        />
        <ProfessionalForm
          currentState={currentState}
          handleChange={handleChange}
          sendAlert={sendAlert}
        />
        <Button
          label="Enviar"
        />
        <Button
          label="Limpar"
          onClick={clearForm}
        />
      </form>
    );
  }
}

export default Form;
