import { Component } from 'react';
import './App.css';
import About from './components/about/About';
import Nav from './components/nav/NavBar';
import VideoPage from './components/video/VideoPage';
import SearchPage from './components/search/SearchPage';
import SideBar from './components/sidebar/SideBar';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state={
    fetchData: [],
    userInput: ""      
    }

}



handleYoutubeFetch = () => {
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.state.userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)
  .then((res)=>{
      return res.json()
  }).then((data)=>{
      this.setState({
          fetchData: data.items
      })
  })
}

handleInput=(event)=>{
  this.setState({
      userInput: event.target.value
  })
}





  render(){

    return (
      <div>

        <Nav userInput={this.state.userInput} handleInput={this.handleInput} handleYoutubeFetch={this.handleYoutubeFetch}/>
        <SideBar/>

        <Switch>
          <Route exact path="/">
            <SearchPage youtubeData={this.state.fetchData} />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/videos/:id" component={VideoPage} />

        </Switch>
      </div>
    );

  }
}

export default App;