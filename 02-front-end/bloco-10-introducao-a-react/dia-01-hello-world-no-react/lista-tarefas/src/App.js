import { Component } from "react";

const tasks = ['Tomar banho', 'Tomar café', 'Fazer exercícios', 'Almoçar', 'Terminar projeto'];

const createListElement = (value) => (
  <li key={value}>{value}</li>
);

class App extends Component {
  render() {
    return (
      <ul>{tasks.map((task) => createListElement(task))}</ul>
    );
  }
}

export default App;