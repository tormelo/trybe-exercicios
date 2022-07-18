import { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <ul>
        {conteudos.map(({ conteudo, bloco, status }) => (
          <li key={conteudo}>
            <h2>O conteúdo é: {conteudo}</h2>
            <p>Status: {status}</p>
            <p>Bloco: {bloco}</p>
          </li>
        ))}
      </ul>
    )
  }
}

export default Content;