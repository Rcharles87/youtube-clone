
import { Component } from 'react';
import './App.css';
import About from './components/about/About';
import Nav from './components/nav/NavBar';

class App extends Component {

  render(){
    return (
      <div>
        <Nav />
        <About />
      </div>
    );

  }
}

export default App;
