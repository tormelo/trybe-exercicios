import React from 'react';

class DataDisplay extends React.Component {
  render() {
    const {
      currentState: {
        name,
        email,
        cpf,
        address,
        city,
        countryState,
        addressType,
        resume,
        role,
        roleDescription,
      }
    } = this.props;

    return (
      <section>
        <h2>Seus dados:</h2>
        <h3>Pessoal</h3>
        <p> Nome: {name}</p>
        <p> Email: {email}</p>
        <p> CPF: {cpf}</p>
        <p> Endereço: {address}</p>
        <p> Cidade: {city}</p>
        <p> Estado: {countryState}</p>
        <p> Tipo de moradia: {addressType}</p>
        <h3>Profissional</h3>
        <p> Resumo do currículo: {resume}</p>
        <p> Cargo: {role}</p>
        <p> Descrição do cargo: {roleDescription}</p>
      </section>
    );
  }
}

export default DataDisplay;
