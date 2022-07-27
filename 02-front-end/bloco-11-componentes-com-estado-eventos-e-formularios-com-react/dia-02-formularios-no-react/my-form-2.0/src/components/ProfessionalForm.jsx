import React from 'react';
import Input from './Input';
import TextArea from './TextArea';

class ProfessionalForm extends React.Component {
  render() {
    const { currentState, handleChange, sendAlert } = this.props;
    const { resume, role, roleDescription } = currentState;
    return (
      <fieldset>
        <legend>Último emprego:</legend>
        <TextArea
          label="Resumo do currículo"
          id="resume"
          maxLength="1000"
          value={resume}
          onChange={handleChange}
        />
        <Input
          label="Cargo"
          id="role"
          maxLength="40"
          value={role}
          onChange={handleChange}
          onMouseEnter={sendAlert}
        />
        <TextArea
          label="Descrição do cargo"
          id="roleDescription"
          maxLength="500"
          value={roleDescription}
          onChange={handleChange}
        />
      </fieldset>
    );
  }
}

export default ProfessionalForm;
