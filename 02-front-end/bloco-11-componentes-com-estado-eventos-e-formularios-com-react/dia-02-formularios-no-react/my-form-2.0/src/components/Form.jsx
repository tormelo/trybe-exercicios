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
      <form className='form' onSubmit={submitForm}>
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
        <div className='button-container'>
          <Button
            label="Enviar"
            className="send button"
          />
          <Button
            label="Limpar"
            className="clear button"
            onClick={clearForm}
          />
        </div>
      </form>
    );
  }
}

export default Form;
