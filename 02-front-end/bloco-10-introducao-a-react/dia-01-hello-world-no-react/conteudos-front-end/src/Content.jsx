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
        {conteudos.map(({ conteudo, bloco, status }, index) => (
          <li key={index}>
            O conteúdo é: {conteudo}
            Status: {status}
            Bloco: {bloco}
          </li>
        ))}
      </ul>
    )
  }
}

export default Content;