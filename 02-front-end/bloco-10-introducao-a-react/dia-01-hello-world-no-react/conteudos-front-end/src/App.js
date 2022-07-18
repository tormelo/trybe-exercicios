import { Component } from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
