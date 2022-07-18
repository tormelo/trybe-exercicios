import { Component } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
