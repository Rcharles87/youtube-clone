import { Component } from 'react';
import './App.css';
import About from './components/about/About';
import Nav from './components/nav/NavBar';
import Videos from './components/video/Videos';
import Home from './components/home/Home';
import {Switch, Route} from 'react-router-dom';

class App extends Component {

  render(){
    return (
      <div>
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route>
          <Videos />
          </Route>

        </Switch>
      </div>
    );

  }
}

export default App;