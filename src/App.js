import { Component } from 'react';
import './App.css';
import About from './components/about/About';
import Nav from './components/nav/NavBar';
import Videos from './components/video/Videos';
class App extends Component {

  render(){
    return (
      <div>
        <Nav />
        <About />
        <Videos />
      </div>
    );

  }
}

export default App;
